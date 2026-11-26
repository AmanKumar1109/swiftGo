import { useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { DEFAULT_EASE, gsap, prefersReducedMotion } from '../animations/gsapConfig'
import { animateTimeline } from '../animations/sectionAnimations'
import { TIMELINE_MILESTONES } from '../constants/siteData'

export function TimelineSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef(null)
  const contentRef = useRef(null)
  const watermarkRef = useRef(null)
  const isFirstRender = useRef(true)

  const active = TIMELINE_MILESTONES[activeIndex]

  useEffect(() => {
    return animateTimeline(sectionRef.current)
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { y: 12, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.45, ease: DEFAULT_EASE },
      )
      gsap.fromTo(
        watermarkRef.current,
        { scale: 0.96, opacity: 0.05 },
        { scale: 1, opacity: 1, duration: 0.55, ease: DEFAULT_EASE },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeIndex])

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev === 0 ? TIMELINE_MILESTONES.length - 1 : prev - 1,
    )
  }

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev === TIMELINE_MILESTONES.length - 1 ? 0 : prev + 1,
    )
  }

  return (
    <section
      ref={sectionRef}
      id="milestones"
      className="w-full bg-white px-4 py-6 sm:px-6 md:px-10"
    >
      <div
        data-timeline-shell
        className="relative mx-auto max-w-[1220px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#9C704C] via-[#BB8F6A] to-[#D4AE8D] px-6 py-10 text-white shadow-[0_18px_45px_rgba(110,80,55,0.16)] sm:px-12 sm:py-14 md:px-16 md:py-16"
      >
        {/* Giant Background Watermark */}
        <span
          ref={watermarkRef}
          data-timeline-watermark
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-8 select-none text-[180px] font-semibold leading-none tracking-tighter text-white/[0.11] sm:right-16 sm:text-[260px] md:text-[340px]"
        >
          {active.watermark}
        </span>

        {/* Horizontal Service Track */}
        <div data-timeline-reveal className="relative z-10 mb-14 sm:mb-20 md:mb-24">
          <div className="flex items-center justify-between gap-4">
            {TIMELINE_MILESTONES.map((item, idx) => {
              const isActive = idx === activeIndex
              return (
                <button
                  key={item.year}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="group relative flex flex-col items-center focus:outline-none"
                >
                  <span
                    className={`rounded-full px-4 py-1 text-xs font-medium transition-all duration-300 ${
                      isActive
                        ? 'scale-105 bg-white text-[#8C6240] shadow-sm'
                        : 'bg-white/15 text-white/85 hover:bg-white/25'
                    }`}
                  >
                    {item.year}
                  </span>
                  <span
                    className={`mt-3 h-2 w-2 rounded-full transition-all duration-300 ${
                      isActive
                        ? 'scale-125 bg-white ring-4 ring-white/25'
                        : 'bg-white/50 group-hover:bg-white/80'
                    }`}
                  />
                </button>
              )
            })}
          </div>
          {/* Connecting Line */}
          <div className="pointer-events-none absolute bottom-[3px] left-0 right-0 -z-10 h-px bg-white/30" />
        </div>

        {/* Lower Content + Navigation Arrows */}
        <div className="relative z-10 flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <div ref={contentRef} data-timeline-reveal className="max-w-xl">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-wider text-white/75">
              {active.eyebrow}
            </p>
            <h2 className="mb-4 text-2xl font-normal tracking-tight text-white sm:text-3xl md:text-[36px]">
              {active.title}
            </h2>
            <p className="text-sm leading-relaxed text-white/90 sm:text-[15px]">
              {active.description}
            </p>
            <a
              href="#services"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2 text-xs font-medium text-[#7B5638] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
            >
              <span>{active.ctaLabel}</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Stacked Circular Arrow Buttons */}
          <div data-timeline-reveal className="flex flex-row gap-2.5 sm:flex-col">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous service"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 active:translate-y-0"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label="Next service"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 text-white transition-all duration-200 hover:translate-y-0.5 hover:border-white hover:bg-white/15 active:translate-y-0"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
