import { useEffect, useRef } from 'react'
import { Package, ShieldCheck, Zap } from 'lucide-react'
import { animateMission } from '../animations/sectionAnimations'
import { MISSION_CARDS } from '../constants/siteData'

const ICON_MAP = {
  zap: Zap,
  shield: ShieldCheck,
  package: Package,
}

function MissionCard({ card, className = '' }) {
  const Icon = ICON_MAP[card.icon] || Zap

  return (
    <div
      data-mission-card
      className={`rounded-2xl border border-[#EFEFEF] bg-white/95 p-5 shadow-[0_14px_40px_rgba(0,0,0,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_48px_rgba(0,0,0,0.11)] ${className}`}
    >
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#F5F3F0] text-[#7B6656]">
        <Icon className="h-4 w-4" />
      </div>
      <h3 className="mb-2 text-sm font-semibold leading-snug text-[#2D2D2D]">
        {card.title}
      </h3>
      <p className="text-xs leading-relaxed text-[#626262]">
        {card.description}
      </p>
    </div>
  )
}

const MISSION_LINE_1 = ['Moving', 'More', 'Than']
const MISSION_LINE_2 = ['Just', 'Deliveries.']

export function MissionSection() {
  const sectionRef = useRef(null)
  const [speedCard, reliabilityCard, convenienceCard] = MISSION_CARDS

  useEffect(() => {
    return animateMission(sectionRef.current)
  }, [])

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative w-full overflow-hidden bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1220px] px-5 md:px-10">
        {/* Top Heading */}
        <div data-mission-text-depth className="max-w-xl">
          <h2 className="text-[30px] font-normal leading-[1.16] tracking-[-0.02em] text-[#2D2D2D] sm:text-[38px]">
            <span className="block overflow-hidden pb-0.5">
              <span data-mission-line className="block">
                {MISSION_LINE_1.join(' ')}
              </span>
            </span>
            <span className="block overflow-hidden pb-0.5">
              <span data-mission-line className="block">
                {MISSION_LINE_2.join(' ')}
              </span>
            </span>
          </h2>
          <p
            data-mission-desc
            className="mt-4 text-sm leading-relaxed text-[#626262] sm:text-[15px]"
          >
            SwiftGo brings food delivery and courier services together on one
            convenient platform. We make everyday deliveries easier through a
            simple, reliable and seamless experience.
          </p>
        </div>

        {/* Desktop Organic Oval + Floating Cards Composition */}
        <div className="relative mt-12 hidden min-h-[540px] lg:block">
          {/* Central Organic Elliptical Image */}
          <div className="mx-auto flex justify-center pt-6">
            <div
              data-mission-oval
              className="relative h-[420px] w-[660px] overflow-hidden rounded-[54%_46%_48%_52%/50%_54%_46%_50%] bg-[#EFEFEF] shadow-[0_24px_60px_rgba(0,0,0,0.1)]"
            >
              <img
                data-mission-oval-img
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85&fm=webp"
                alt="SwiftGo customer receiving a fast, reliable delivery"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Dark Courier Badge Accent (Top-Right of Oval) */}
          <div
            data-mission-luminaire="spot"
            className="absolute right-[18%] -top-2 flex h-24 w-24 items-center justify-center rounded-full bg-white p-2 shadow-[0_14px_34px_rgba(0,0,0,0.12)]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#2D241E] text-white">
              <Package className="h-8 w-8 text-[#D4AE8E]" />
            </div>
          </div>

          {/* Floating Light Ring Accent (Right Edge) */}
          <div
            data-mission-luminaire="ring"
            className="absolute right-[6%] bottom-10 flex h-28 w-28 items-center justify-center rounded-full bg-white/85 p-3 shadow-[0_16px_40px_rgba(0,0,0,0.08)] backdrop-blur-sm"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-full border-[8px] border-[#EAEAEA] bg-white text-[#7B6656]">
              <Zap className="h-6 w-6" />
            </div>
          </div>

          {/* Floating Card 1: Left */}
          <MissionCard
            card={speedCard}
            className="absolute top-16 left-4 z-10 w-[260px]"
          />

          {/* Floating Card 2: Bottom Right */}
          <MissionCard
            card={reliabilityCard}
            className="absolute right-[20%] bottom-0 z-10 w-[260px]"
          />

          {/* Floating Card 3: Top Right */}
          <MissionCard
            card={convenienceCard}
            className="absolute top-28 right-4 z-10 w-[260px]"
          />
        </div>

        {/* Tablet & Mobile Responsive Layout */}
        <div className="mt-10 space-y-6 lg:hidden">
          <div
            data-mission-oval
            className="overflow-hidden rounded-[24px] shadow-md"
          >
            <img
              data-mission-oval-img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85&fm=webp"
              alt="SwiftGo customer receiving a fast, reliable delivery"
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {MISSION_CARDS.map((card) => (
              <MissionCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
