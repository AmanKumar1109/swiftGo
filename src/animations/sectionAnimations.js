import { DEFAULT_EASE, gsap, prefersReducedMotion } from './gsapConfig'

export function animateHeroParallax(root) {
  if (!root || prefersReducedMotion()) return () => {}

  const ctx = gsap.context(() => {
    // Subtle multi-plane parallax on hero text vs floating collage cards
    gsap.to('[data-hero-content]', {
      y: -28,
      force3D: true,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top top',
        end: 'bottom top',
        scrub: 1.1,
      },
    })

    gsap.utils.toArray('[data-hero-card]').forEach((card, index) => {
      const speed = (index % 2 === 0 ? -1 : 1) * (18 + (index % 3) * 8)
      gsap.to(card, {
        y: speed,
        force3D: true,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top top',
          end: 'bottom top',
          scrub: 1.1,
        },
      })
    })
  }, root)

  return () => ctx.revert()
}

export function animateTimeline(root) {
  if (!root || prefersReducedMotion()) return () => {}

  const ctx = gsap.context(() => {
    gsap.set('[data-timeline-shell]', { willChange: 'clip-path, transform' })
    gsap.set('[data-timeline-watermark]', { willChange: 'transform' })

    // Single unified scroll timeline: Center Expand -> Hold -> Reverse Center Collapse
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top 92%',
        end: 'bottom 18%',
        scrub: 0.9,
      },
    })

    // 1. Center-origin expansion
    tl.fromTo(
      '[data-timeline-shell]',
      {
        clipPath: 'inset(28% 36% 28% 36% round 48px)',
        scale: 0.92,
        opacity: 0.85,
        force3D: true,
        transformOrigin: 'center center',
      },
      {
        clipPath: 'inset(0% 0% 0% 0% round 24px)',
        scale: 1,
        opacity: 1,
        force3D: true,
        ease: 'power2.out',
        duration: 0.36,
      },
      0,
    )
      .fromTo(
        '[data-timeline-reveal]',
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.05,
          ease: 'power2.out',
          duration: 0.24,
        },
        0.12,
      )
      // 2. Hold at full expanded state while reading/interacting
      .to({}, { duration: 0.28 })
      // 3. Reverse center collapse as user scrolls toward next section
      .to(
        '[data-timeline-reveal]',
        {
          y: -14,
          opacity: 0,
          stagger: 0.04,
          ease: 'power2.in',
          duration: 0.2,
        },
        0.64,
      )
      .to(
        '[data-timeline-shell]',
        {
          clipPath: 'inset(28% 36% 28% 36% round 48px)',
          scale: 0.92,
          opacity: 0.85,
          ease: 'power2.inOut',
          duration: 0.36,
        },
        0.68,
      )

    gsap.fromTo(
      '[data-timeline-watermark]',
      { y: -20 },
      {
        y: 24,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      },
    )
  }, root)

  return () => ctx.revert()
}

export function animateMission(root) {
  if (!root || prefersReducedMotion()) return () => {}

  const ctx = gsap.context(() => {
    // Connected editorial reveal: Brown container closes -> Image mask + settle -> Line-by-line heading -> Desc -> Cards
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: root,
        start: 'top 78%',
        end: 'top 18%',
        scrub: 0.9,
      },
    })

    // 1. Image masked wipe + subtle vertical entrance + 1.06 -> 1 scale settle
    tl.fromTo(
      '[data-mission-oval]',
      {
        clipPath: 'inset(0% 100% 0% 0%)',
        y: 22,
        opacity: 0.75,
        force3D: true,
      },
      {
        clipPath: 'inset(0% 0% 0% 0%)',
        y: 0,
        opacity: 1,
        force3D: true,
        ease: 'power3.out',
        duration: 0.5,
      },
      0,
    )
      .fromTo(
        '[data-mission-oval-img]',
        { scale: 1.06, force3D: true },
        {
          scale: 1,
          force3D: true,
          ease: 'power2.out',
          duration: 0.55,
        },
        0,
      )
      // 2. Line-by-line heading reveal
      .fromTo(
        '[data-mission-line]',
        { y: 32, opacity: 0, force3D: true },
        {
          y: 0,
          opacity: 1,
          stagger: 0.12,
          force3D: true,
          ease: 'power2.out',
          duration: 0.35,
        },
        0.18,
      )
      // 3. Supporting paragraph
      .fromTo(
        '[data-mission-desc]',
        { y: 20, opacity: 0, force3D: true },
        {
          y: 0,
          opacity: 1,
          force3D: true,
          ease: 'power2.out',
          duration: 0.35,
        },
        0.34,
      )
      // 4. Staggered mission cards
      .fromTo(
        '[data-mission-card]',
        { y: 26, opacity: 0, force3D: true },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          force3D: true,
          ease: 'power2.out',
          duration: 0.4,
        },
        0.44,
      )

    // Gentle scroll depth difference: image vs text block + floating badge accents
    gsap.fromTo(
      '[data-mission-oval-img]',
      { y: -14 },
      {
        y: 14,
        force3D: true,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      },
    )

    gsap.fromTo(
      '[data-mission-text-depth]',
      { y: 10 },
      {
        y: -14,
        force3D: true,
        ease: 'none',
        scrollTrigger: {
          trigger: root,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1.2,
        },
      },
    )

    gsap.to('[data-mission-luminaire="spot"]', {
      y: -18,
      force3D: true,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    })

    gsap.to('[data-mission-luminaire="ring"]', {
      y: 18,
      force3D: true,
      ease: 'none',
      scrollTrigger: {
        trigger: root,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.2,
      },
    })
  }, root)

  return () => ctx.revert()
}

export function animateSolutions(root) {
  if (!root || prefersReducedMotion()) return () => {}

  const ctx = gsap.context(() => {
    gsap.from('[data-solutions-copy]', {
      y: 24,
      opacity: 0,
      duration: 0.75,
      stagger: 0.1,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: root,
        start: 'top 80%',
        once: true,
      },
    })

    gsap.from('[data-solutions-thumb]', {
      scale: 0.8,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: '[data-solutions-stage]',
        start: 'top 82%',
        once: true,
      },
    })

    gsap.from('[data-solutions-stage]', {
      y: 30,
      opacity: 0,
      duration: 0.9,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: '[data-solutions-stage]',
        start: 'top 82%',
        once: true,
      },
    })
  }, root)

  return () => ctx.revert()
}

export function animateImpact(root) {
  if (!root || prefersReducedMotion()) return () => {}

  const ctx = gsap.context(() => {
    gsap.from('[data-impact-header]', {
      y: 22,
      opacity: 0,
      duration: 0.75,
      stagger: 0.08,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: root,
        start: 'top 82%',
        once: true,
      },
    })

    gsap.from('[data-impact-card]', {
      y: 28,
      opacity: 0,
      duration: 0.75,
      stagger: 0.09,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: '[data-impact-grid]',
        start: 'top 82%',
        once: true,
      },
    })

    // Metric count-up animations
    gsap.utils.toArray('[data-count-target]').forEach((el) => {
      const target = Number(el.getAttribute('data-count-target')) || 0
      const counter = { val: 0 }
      gsap.to(counter, {
        val: target,
        duration: 1.5,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = Math.round(counter.val).toString()
        },
      })
    })
  }, root)

  return () => ctx.revert()
}

export function animateFooter(root) {
  if (!root || prefersReducedMotion()) return () => {}

  const ctx = gsap.context(() => {
    gsap.from('[data-footer-shell]', {
      y: 32,
      opacity: 0,
      duration: 0.85,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: root,
        start: 'top 88%',
        once: true,
      },
    })

    gsap.from('[data-footer-col]', {
      y: 18,
      opacity: 0,
      duration: 0.65,
      stagger: 0.06,
      ease: DEFAULT_EASE,
      scrollTrigger: {
        trigger: '[data-footer-shell]',
        start: 'top 80%',
        once: true,
      },
    })
  }, root)

  return () => ctx.revert()
}
