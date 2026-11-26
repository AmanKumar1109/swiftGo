import { useEffect, useRef } from 'react'
import { animateHeroParallax } from '../animations/sectionAnimations'
import { HERO_COLLAGE_IMAGES } from '../constants/siteData'

const HERO_LINE_1 = ['Good', 'Food.', 'Fast', 'Delivery.']
const HERO_LINE_2 = ['Everything', 'Moves', 'with', 'SwiftGo.']

export function HeroSection({ introDone = true }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    if (!introDone) return undefined
    return animateHeroParallax(sectionRef.current)
  }, [introDone])

  return (
    <section
      ref={sectionRef}
      data-hero-section
      className="relative w-full overflow-hidden bg-[#F6F6F6] pt-10 pb-20 md:pt-16 md:pb-28"
    >
      <div
        data-hero-stage
        className="relative mx-auto flex min-h-[450px] max-w-[1280px] flex-col items-center justify-center px-5 md:min-h-[560px] md:px-10"
      >
        {/* Floating Food & Courier Collage (Desktop / Tablet) */}
        <div className="pointer-events-none absolute inset-0 hidden md:block">
          {HERO_COLLAGE_IMAGES.map((img) => (
            <div
              key={img.id}
              data-hero-card
              className={`pointer-events-auto absolute overflow-hidden rounded-2xl bg-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.14)] ${img.positionClass}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        {/* Centered Headline & CTAs */}
        <div
          data-hero-content
          className="relative z-10 mx-auto max-w-2xl text-center"
        >
          <p
            data-hero-eyebrow
            className="mb-3 text-xs font-medium tracking-wider text-[#8C7A6B] uppercase"
          >
            Food Delivery &amp; Courier Services
          </p>
          <h1 className="text-[36px] font-normal leading-[1.12] tracking-[-0.025em] text-[#2D2D2D] sm:text-[48px] md:text-[58px]">
            <span className="block overflow-hidden pb-1">
              {HERO_LINE_1.map((word, idx) => (
                <span
                  key={`l1-${idx}`}
                  data-hero-word
                  className="mr-[0.24em] inline-block last:mr-0"
                >
                  {word}
                </span>
              ))}
            </span>
            <span className="block overflow-hidden pb-1">
              {HERO_LINE_2.map((word, idx) => (
                <span
                  key={`l2-${idx}`}
                  data-hero-word
                  className="mr-[0.24em] inline-block last:mr-0"
                >
                  {word}
                </span>
              ))}
            </span>
          </h1>

          <p
            data-hero-desc
            className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-[#5F5F5F] sm:text-[15px]"
          >
            From your favourite restaurant meals to important parcels, SwiftGo
            makes every delivery simple, convenient and reliable.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#services"
              data-hero-cta
              className="rounded-full bg-[#7B6656] px-6 py-2.5 text-xs font-medium text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#645244] hover:shadow-md sm:text-[13px]"
            >
              Order Food
            </a>
            <a
              href="#milestones"
              data-hero-cta
              className="rounded-full border border-[#D4C7BC] bg-white px-6 py-2.5 text-xs font-medium text-[#2D2D2D] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7B6656] hover:text-[#7B6656] sm:text-[13px]"
            >
              Send a Parcel
            </a>
          </div>
        </div>

        {/* Mobile Collage Strip */}
        <div className="mt-10 grid w-full grid-cols-3 gap-3 md:hidden">
          {HERO_COLLAGE_IMAGES.slice(0, 3).map((img) => (
            <div
              key={img.id}
              data-hero-card
              className="aspect-square overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
