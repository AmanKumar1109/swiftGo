import { useState } from 'react'
import { ChevronDown, Menu, Search, User, X } from 'lucide-react'
import { NAV_LINKS } from '../constants/siteData'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="relative z-30 w-full bg-[#F6F6F6]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-4 md:px-10">
        {/* Brand Wordmark */}
        <a
          href="#"
          data-nav-item
          className="flex items-center select-none transition-opacity duration-200 hover:opacity-80"
          aria-label="SwiftGo Home"
        >
          <span className="text-[22px] tracking-tight text-[#2D2D2D]">
            <span className="font-semibold">Swift</span>
            <span className="font-bold italic text-[#7B6656]">Go</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-7 lg:flex"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              data-nav-item
              className="group relative flex items-center gap-1 py-1 text-xs font-medium tracking-wide text-[#4A4A4A] transition-colors duration-200 hover:text-[#7B6656]"
            >
              <span>{item.label}</span>
              {item.hasDropdown && (
                <ChevronDown className="h-3.5 w-3.5 text-[#7A7A7A] transition-transform duration-200 group-hover:translate-y-0.5 group-hover:text-[#7B6656]" />
              )}
              <span className="absolute bottom-0 left-0 h-[1.5px] w-full origin-left scale-x-0 rounded-full bg-[#7B6656] transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            data-nav-item
            className="rounded-full bg-[#7B6656] px-4 py-1.5 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#645244] hover:shadow-md active:translate-y-0"
          >
            Get Started
          </a>
          <button
            type="button"
            data-nav-item
            aria-label="Search"
            className="hidden h-7 w-7 items-center justify-center rounded-full bg-[#5C4C40] text-white transition-all duration-200 hover:scale-105 hover:bg-[#473A30] sm:flex"
          >
            <Search className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            data-nav-item
            aria-label="Customer account"
            className="hidden h-7 w-7 items-center justify-center rounded-full bg-[#5C4C40] text-white transition-all duration-200 hover:scale-105 hover:bg-[#473A30] sm:flex"
          >
            <User className="h-3.5 w-3.5" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-[#E0E0E0] bg-white text-[#2D2D2D] lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" />
            ) : (
              <Menu className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="border-t border-[#E6E6E6] bg-white px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-3" aria-label="Mobile menu">
            {NAV_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between py-1.5 text-sm font-medium text-[#333333]"
              >
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown className="h-4 w-4 text-[#888888]" />
                )}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
