import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

ScrollTrigger.config({
  ignoreMobileResize: true,
  limitCallbacks: true,
})

gsap.ticker.lagSmoothing(500, 33)

export const prefersReducedMotion = () => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export const DEFAULT_EASE = 'power3.out'

export { gsap, ScrollTrigger }
