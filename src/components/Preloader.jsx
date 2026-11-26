export function Preloader() {
  return (
    <div
      data-preloader-overlay
      aria-hidden="true"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F6F6F6] select-none"
    >
      <div data-preloader-content className="flex flex-col items-center">
        {/* SWIFTGO Brand Wordmark with Left-to-Right Color Fill */}
        <div
          data-preloader-logo
          style={{
            '--fill': '0%',
            backgroundImage:
              'linear-gradient(90deg, #7B6656 var(--fill), #D3D3D3 var(--fill))',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          className="text-4xl font-bold tracking-[0.22em] sm:text-5xl md:text-[56px]"
        >
          SWIFTGO
        </div>

        {/* Minimal Progress Indicator */}
        <div className="mt-6 h-[2px] w-44 overflow-hidden rounded-full bg-[#E3DDD7] sm:w-56">
          <div
            data-preloader-bar
            className="h-full w-full origin-left scale-x-0 rounded-full bg-[#7B6656]"
          />
        </div>
      </div>
    </div>
  )
}
