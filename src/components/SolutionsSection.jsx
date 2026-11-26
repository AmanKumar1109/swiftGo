import { useEffect, useRef, useState } from 'react'
import { DEFAULT_EASE, gsap, prefersReducedMotion } from '../animations/gsapConfig'
import { animateSolutions } from '../animations/sectionAnimations'
import { SOLUTION_CONTEXTS } from '../constants/siteData'

export function SolutionsSection() {
  const [activeId, setActiveId] = useState(SOLUTION_CONTEXTS[0].id)
  const sectionRef = useRef(null)
  const imageRef = useRef(null)
  const pillRef = useRef(null)
  const isFirstRender = useRef(true)

  const activeContext =
    SOLUTION_CONTEXTS.find((ctx) => ctx.id === activeId) ||
    SOLUTION_CONTEXTS[0]

  useEffect(() => {
    return animateSolutions(sectionRef.current)
  }, [])

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (prefersReducedMotion()) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { scale: 1.04, opacity: 0.6 },
        { scale: 1, opacity: 1, duration: 0.55, ease: DEFAULT_EASE },
      )
      gsap.fromTo(
        pillRef.current,
        { y: 8, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: DEFAULT_EASE },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [activeId])

  return (
    <section
      ref={sectionRef}
      id="services"
      className="w-full bg-[#F6F6F6] py-16 md:py-24"
    >
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-10 px-5 md:px-10 lg:grid-cols-12 lg:gap-12">
        {/* Left Copy Column */}
        <div className="lg:col-span-5">
          <p
            data-solutions-copy
            className="mb-2 text-[11px] font-medium uppercase tracking-wider text-[#8C7A6B]"
          >
            Delivery Built Around You
          </p>
          <h2
            data-solutions-copy
            className="mb-4 text-[30px] font-normal leading-[1.18] tracking-[-0.02em] text-[#2D2D2D] sm:text-[36px]"
          >
            Food &amp; Courier Services, Seamlessly Connected.
          </h2>
          <p
            data-solutions-copy
            className="text-sm leading-relaxed text-[#626262] sm:text-[15px]"
          >
            Whether you are ordering dinner from your favourite local restaurant
            or sending an important parcel across the city, SwiftGo delivers
            speed, reliability, and care on every single trip.
          </p>
        </div>

        {/* Right Showcase + Thumbnail Selector */}
        <div className="relative lg:col-span-7">
          {/* Overlapping Circular Thumbnails */}
          <div className="relative z-10 -mb-5 flex justify-end gap-2 pr-3 sm:pr-5">
            {SOLUTION_CONTEXTS.map((ctx) => {
              const isSelected = ctx.id === activeId
              return (
                <button
                  key={ctx.id}
                  type="button"
                  data-solutions-thumb
                  onClick={() => setActiveId(ctx.id)}
                  aria-label={ctx.label}
                  title={ctx.label}
                  className={`h-10 w-10 overflow-hidden rounded-full border-2 bg-white shadow-md transition-all duration-300 sm:h-11 sm:w-11 ${
                    isSelected
                      ? 'scale-110 border-[#A87C56] ring-2 ring-[#A87C56]/25'
                      : 'border-white opacity-85 hover:-translate-y-0.5 hover:opacity-100'
                  }`}
                >
                  <img
                    src={ctx.thumb}
                    alt={ctx.label}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </button>
              )
            })}
          </div>

          {/* Main Context Image Card */}
          <div
            data-solutions-stage
            className="relative aspect-[16/10] w-full overflow-hidden rounded-[22px] bg-[#E5E5E5] shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
          >
            <img
              ref={imageRef}
              src={activeContext.image}
              alt={activeContext.label}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            <span
              ref={pillRef}
              className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-1.5 text-xs font-medium text-[#2D2D2D] shadow-sm backdrop-blur-sm"
            >
              {activeContext.label}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
