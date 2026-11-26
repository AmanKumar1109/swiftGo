import { useLayoutEffect, useRef, useState } from 'react'
import { prefersReducedMotion } from '../animations/gsapConfig'
import { runIntroMasterTimeline } from '../animations/introMasterTimeline'
import { HeroSection } from '../components/HeroSection'
import { ImpactSection } from '../components/ImpactSection'
import { MissionSection } from '../components/MissionSection'
import { Preloader } from '../components/Preloader'
import { SolutionsSection } from '../components/SolutionsSection'
import { TimelineSection } from '../components/TimelineSection'
import { MainLayout } from '../layouts/MainLayout'

export function HomePage() {
  const [introDone, setIntroDone] = useState(() => prefersReducedMotion())
  const pageRef = useRef(null)

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return undefined
    return runIntroMasterTimeline(pageRef.current, () => {
      setIntroDone(true)
    })
  }, [])

  return (
    <div ref={pageRef}>
      {!introDone && <Preloader />}
      <MainLayout>
        <HeroSection introDone={introDone} />
        <TimelineSection />
        <MissionSection />
        <SolutionsSection />
        <ImpactSection />
      </MainLayout>
    </div>
  )
}
