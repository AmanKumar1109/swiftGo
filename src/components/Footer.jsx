import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { animateFooter } from '../animations/sectionAnimations'
import { FOOTER_COLUMNS } from '../constants/siteData'

export function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    return animateFooter(footerRef.current)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email.trim()) return
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer
      ref={footerRef}
      id="contact"
      className="w-full bg-white px-4 pt-6 pb-8 sm:px-6 md:px-10"
    >
      <div
        data-footer-shell
        className="mx-auto max-w-[1220px] overflow-hidden rounded-[24px] bg-gradient-to-br from-[#7A6351] via-[#655040] to-[#4C3B2F] px-7 py-12 text-white shadow-[0_20px_50px_rgba(76,59,47,0.2)] sm:px-12 md:px-16 md:py-16"
      >
        {/* Top Statement */}
        <h2
          data-footer-col
          className="mb-12 max-w-2xl text-2xl font-light tracking-tight text-white/95 sm:text-3xl md:text-[38px]"
        >
          Reliable delivery that moves your world.
        </h2>

        {/* Links + Newsletter Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title} data-footer-col>
              <h3 className="mb-3.5 text-xs font-semibold tracking-wide text-white/90">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="inline-block text-xs text-white/70 transition-all duration-200 hover:translate-x-0.5 hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div data-footer-col className="col-span-2">
            <h3 className="mb-3.5 text-[13px] font-medium text-white/90">
              Stay updated with SwiftGo!
            </h3>
            <form
              onSubmit={handleSubmit}
              className="flex max-w-xs items-center rounded-full border border-white/20 bg-white/10 py-1.5 pr-1.5 pl-4 backdrop-blur-sm transition-colors duration-200 focus-within:border-white/45 focus-within:bg-white/15"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (subscribed) setSubscribed(false)
                }}
                placeholder="Enter your email"
                aria-label="Enter your email"
                className="w-full bg-transparent text-xs text-white placeholder-white/55 focus:outline-none"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white text-[#4C3B2F] transition-transform duration-200 hover:scale-105 active:scale-95"
              >
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </form>
            {subscribed && (
              <p className="mt-2 text-[11px] text-white/85">
                You&apos;re subscribed to SwiftGo updates.
              </p>
            )}
          </div>
        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 text-[11px] text-white/60 sm:flex-row sm:items-center">
          <p>© 2026 SwiftGo Inc. All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="transition-colors hover:text-white/90">
              Terms &amp; Conditions
            </a>
            <a href="#" className="transition-colors hover:text-white/90">
              Privacy Policy
            </a>
            <a href="#" className="transition-colors hover:text-white/90">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
