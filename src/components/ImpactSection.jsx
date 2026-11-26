import { useEffect, useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { animateImpact } from '../animations/sectionAnimations'

export function ImpactSection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    return animateImpact(sectionRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="w-full bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1220px] px-5 md:px-10">
        {/* Centered Header */}
        <div className="text-center">
          <p
            data-impact-header
            className="mb-2 text-[11px] font-medium uppercase tracking-wider text-[#8C7A6B]"
          >
            Our Reach &amp; Reliability
          </p>
          <h2
            data-impact-header
            className="text-[28px] font-normal tracking-[-0.02em] text-[#2D2D2D] sm:text-[36px]"
          >
            Deliveries That Speak for Us.
          </h2>
        </div>

        {/* Bento Grid */}
        <div data-impact-grid className="mx-auto mt-10 max-w-[840px]">
          {/* Row 1 */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Wide Courier Team Photo Card */}
            <div
              data-impact-card
              className="group relative min-h-[220px] overflow-hidden rounded-[20px] bg-[#2D2D2D] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.12)] sm:col-span-2"
            >
              <img
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&w=900&q=80&fm=webp"
                alt="SwiftGo courier delivering parcels with care"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <h3 className="text-[15px] font-medium">
                  Dedicated Couriers &amp; Riders
                </h3>
                <p className="mt-1 text-xs text-white/80">
                  Trusted professionals ensuring every meal and parcel arrives
                  on time
                </p>
              </div>
            </div>

            {/* Bronze 300 Card */}
            <div
              data-impact-card
              className="group relative flex min-h-[220px] flex-col justify-between rounded-[20px] bg-gradient-to-br from-[#BA8D68] to-[#986A46] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(152,106,70,0.28)]"
            >
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/80">
                Restaurants
              </span>
              <div>
                <p
                  data-count-target="300"
                  className="text-5xl font-light tracking-tight"
                >
                  300
                </p>
                <p className="mt-1.5 text-xs text-white/90">
                  Partner restaurants &amp; kitchens
                </p>
              </div>
              <a
                href="#services"
                aria-label="Explore partner restaurants"
                className="flex h-8 w-8 items-center justify-center self-end rounded-full bg-white text-[#8C6240] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Row 2 */}
          <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {/* Taupe 53 Card */}
            <div
              data-impact-card
              className="group relative flex min-h-[220px] flex-col justify-between rounded-[20px] bg-gradient-to-br from-[#9F7F64] to-[#81644C] p-6 text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(129,100,76,0.28)]"
            >
              <span className="text-[11px] font-medium uppercase tracking-wider text-white/80">
                Coverage
              </span>
              <div>
                <p
                  data-count-target="53"
                  className="text-5xl font-light tracking-tight"
                >
                  53
                </p>
                <p className="mt-1.5 text-xs text-white/90">
                  Active delivery zones &amp; hubs
                </p>
              </div>
              <a
                href="#contact"
                aria-label="View delivery coverage"
                className="flex h-8 w-8 items-center justify-center self-end rounded-full bg-white text-[#7A5E47] shadow-sm transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:scale-105"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Editorial Text Card */}
            <div
              data-impact-card
              className="flex min-h-[220px] items-center rounded-[20px] bg-[#F4F4F4] p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#EFEFEF]"
            >
              <p className="text-[13px] leading-relaxed text-[#525252]">
                From hot restaurant meals to time-sensitive parcels, SwiftGo
                connects people and businesses with fast, dependable everyday
                delivery.
              </p>
            </div>

            {/* Express Delivery 25 Min Card */}
            <div
              data-impact-card
              className="group relative min-h-[220px] overflow-hidden rounded-[20px] bg-[#EFEFEF] transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
            >
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80&fm=webp"
                alt="Fresh meal ready for 25-minute express delivery"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/75 via-transparent to-black/35" />
              <span
                data-count-target="25"
                className="absolute top-4 left-5 text-4xl font-light tracking-tight text-[#2D2D2D]"
              >
                25
              </span>
              <span className="absolute bottom-4 left-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-medium text-[#2D2D2D] shadow-sm backdrop-blur-sm">
                Avg. delivery minutes
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
