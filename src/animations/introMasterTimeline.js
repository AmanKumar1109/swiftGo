import { DEFAULT_EASE, gsap, prefersReducedMotion } from './gsapConfig'

/**
 * Wait for critical hero images to decode, with a safe timeout fallback
 * so the preloader never hangs on slow or failed network requests.
 */
function waitForHeroAssets(root, timeoutMs = 1800) {
  const imgs = Array.from(root.querySelectorAll('[data-hero-card] img'))
  if (imgs.length === 0) return Promise.resolve()

  const imagePromises = imgs.map((img) => {
    const decodeImg = () =>
      typeof img.decode === 'function' ? img.decode().catch(() => {}) : Promise.resolve()

    if (img.complete && img.naturalWidth > 0) {
      return decodeImg()
    }
    return new Promise((resolve) => {
      const done = () => {
        decodeImg().finally(resolve)
      }
      img.addEventListener('load', done, { once: true })
      img.addEventListener('error', done, { once: true })
    })
  })

  const timeout = new Promise((resolve) => {
    window.setTimeout(resolve, timeoutMs)
  })

  return Promise.race([Promise.all(imagePromises), timeout])
}

/**
 * Orchestrates the entire SwiftGo intro (Preloader -> Fill -> Exit ->
 * Hero Image Gather -> Distribute -> Staggered Content Reveal)
 * through ONE coordinated GSAP master timeline.
 */
export function runIntroMasterTimeline(root, onComplete) {
  if (!root || prefersReducedMotion()) {
    onComplete?.()
    return () => {}
  }

  let cancelled = false
  let ctx = null

  const init = async () => {
    // Lock scroll briefly during preloader intro
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    ctx = gsap.context(() => {
      const stage = root.querySelector('[data-hero-stage]')
      const cards = gsap.utils
        .toArray('[data-hero-card]', root)
        .filter((el) => el.offsetParent !== null)

      // Measure actual rendered positions to compute exact gather deltas
      const stageRect = stage
        ? stage.getBoundingClientRect()
        : { left: 0, top: 0, width: window.innerWidth, height: 500 }
      const centerX = stageRect.left + stageRect.width / 2
      const centerY = stageRect.top + stageRect.height / 2

      const clusterOffsets = [
        { x: -34, y: -22, rot: -6 },
        { x: 36, y: -18, rot: 5 },
        { x: -42, y: 16, rot: 4 },
        { x: 28, y: 24, rot: -5 },
        { x: -12, y: -28, rot: 3 },
        { x: 14, y: 20, rot: -3 },
      ]

      const gatherVectors = cards.map((card, i) => {
        const rect = card.getBoundingClientRect()
        const cardCenterX = rect.left + rect.width / 2
        const cardCenterY = rect.top + rect.height / 2
        const offset = clusterOffsets[i % clusterOffsets.length]

        return {
          el: card,
          dx: centerX - cardCenterX + offset.x,
          dy: centerY - cardCenterY + offset.y,
          rot: offset.rot,
        }
      })

      // Set initial hidden states for hero content & cards before reveal
      gsap.set('[data-preloader-overlay]', { willChange: 'clip-path' })
      gsap.set('[data-nav-item]', { y: -14, opacity: 0, force3D: true })
      gsap.set('[data-hero-eyebrow]', { y: 16, opacity: 0, force3D: true })
      gsap.set('[data-hero-word]', { y: 36, opacity: 0, force3D: true })
      gsap.set('[data-hero-desc]', { y: 18, opacity: 0, force3D: true })
      gsap.set('[data-hero-cta]', { y: 16, opacity: 0, force3D: true })

      // Start cards at their gathered center coordinates (slightly scaled down & hidden)
      gatherVectors.forEach(({ el, dx, dy, rot }) => {
        gsap.set(el, {
          x: dx * 1.15,
          y: dy * 1.15,
          rotation: rot * 1.4,
          scale: 0.72,
          opacity: 0,
          force3D: true,
          willChange: 'transform, opacity',
        })
      })

      const master = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = prevOverflow
          onComplete?.()
        },
      })

      // PHASE 1 — BRAND INTRO
      master
        .addLabel('PHASE_1_BRAND_INTRO')
        .from('[data-preloader-logo]', {
          y: 16,
          opacity: 0,
          duration: 0.55,
          ease: DEFAULT_EASE,
        })
        // PHASE 2 — LOADING & LEFT-TO-RIGHT BRAND COLOR FILL
        .addLabel('PHASE_2_LOADING')
        .to(
          '[data-preloader-logo]',
          {
            '--fill': '100%',
            duration: 1.2,
            ease: 'power2.inOut',
          },
          'PHASE_2_LOADING',
        )
        .to(
          '[data-preloader-bar]',
          {
            scaleX: 1,
            duration: 1.2,
            ease: 'power2.inOut',
          },
          'PHASE_2_LOADING',
        )
        .to({}, { duration: 0.18 }) // Brief hold on filled SWIFTGO wordmark

        // PHASE 3 — PRELOADER EXIT
        .addLabel('PHASE_3_PRELOADER_EXIT')
        .to('[data-preloader-content]', {
          y: -16,
          opacity: 0,
          duration: 0.35,
          ease: 'power2.in',
        })
        .to(
          '[data-preloader-overlay]',
          {
            clipPath: 'inset(0% 0% 100% 0%)',
            duration: 0.65,
            ease: 'power3.inOut',
          },
          '-=0.12',
        )
        .set('[data-preloader-overlay]', { display: 'none' })

        // PHASE 4 — IMAGE GATHERING AT CENTER
        .addLabel('PHASE_4_IMAGE_GATHERING', '-=0.25')

      gatherVectors.forEach(({ el, dx, dy, rot }, idx) => {
        master.to(
          el,
          {
            x: dx,
            y: dy,
            rotation: rot,
            scale: 1.04,
            opacity: 1,
            duration: 0.65,
            ease: 'power3.out',
          },
          `PHASE_4_IMAGE_GATHERING+=${idx * 0.055}`,
        )
      })

      // PHASE 5 — IMAGE DISTRIBUTION TO EXACT ORIGINAL POSITIONS
      master.addLabel('PHASE_5_IMAGE_DISTRIBUTION', '+=0.12')

      gatherVectors.forEach(({ el }, idx) => {
        master.to(
          el,
          {
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.85,
            ease: 'power3.out',
            force3D: true,
            clearProps: 'transform,willChange',
          },
          `PHASE_5_IMAGE_DISTRIBUTION+=${idx * 0.06}`,
        )
      })

      // PHASE 6 — STAGGERED HERO CONTENT & NAVBAR REVEAL
      master
        .addLabel('PHASE_6_CONTENT_REVEAL', 'PHASE_5_IMAGE_DISTRIBUTION+=0.28')
        .to(
          '[data-nav-item]',
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.045,
            ease: DEFAULT_EASE,
            clearProps: 'transform,opacity',
          },
          'PHASE_6_CONTENT_REVEAL',
        )
        .to(
          '[data-hero-eyebrow]',
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            ease: DEFAULT_EASE,
            clearProps: 'transform,opacity',
          },
          'PHASE_6_CONTENT_REVEAL+=0.08',
        )
        .to(
          '[data-hero-word]',
          {
            y: 0,
            opacity: 1,
            duration: 0.75,
            stagger: 0.06,
            ease: DEFAULT_EASE,
            clearProps: 'transform,opacity',
          },
          'PHASE_6_CONTENT_REVEAL+=0.16',
        )
        .to(
          '[data-hero-desc]',
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            ease: DEFAULT_EASE,
            clearProps: 'transform,opacity',
          },
          'PHASE_6_CONTENT_REVEAL+=0.42',
        )
        .to(
          '[data-hero-cta]',
          {
            y: 0,
            opacity: 1,
            duration: 0.55,
            stagger: 0.09,
            ease: DEFAULT_EASE,
            clearProps: 'transform,opacity',
          },
          'PHASE_6_CONTENT_REVEAL+=0.52',
        )
        // PHASE 7 — FINAL HERO STATE
        .addLabel('PHASE_7_FINAL_HERO_STATE')
    }, root)

    // Ensure critical hero images are decoded before distribution completes
    await waitForHeroAssets(root)
    if (cancelled) return
  }

  init()

  return () => {
    cancelled = true
    document.body.style.overflow = ''
    ctx?.revert()
  }
}
