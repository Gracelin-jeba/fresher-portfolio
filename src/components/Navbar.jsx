import { useState, useEffect } from 'react'

const links = ['About', 'Skills', 'Projects', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 px-[6%] transition-all duration-300 ${
          scrolled
            ? 'bg-paper/90 backdrop-blur-md border-b border-bdr'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-5xl mx-auto flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-syne font-extrabold text-xl tracking-tight text-ink"
          >
            GJ<span className="text-accent">.</span>
          </button>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <button
                key={l}
                onClick={() => scrollTo(l)}
                className="font-syne font-semibold text-xs tracking-widest uppercase text-ink hover:text-accent transition-colors"
              >
                {l}
              </button>
            ))}
            <button
              onClick={() => scrollTo('Contact')}
              className="bg-accent text-white font-syne font-bold text-xs tracking-wider uppercase px-5 py-2.5 rounded hover:bg-orange-700 transition-all hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 text-ink"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-ink z-[9999] flex flex-col items-center justify-center gap-10">
          <button
            className="absolute top-6 right-7 text-paper"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          {links.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-syne font-bold text-4xl text-paper hover:text-accent transition-colors tracking-tight"
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
