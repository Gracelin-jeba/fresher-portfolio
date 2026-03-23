const navLinks = ['About', 'Skills', 'Projects', 'Contact']

export default function Footer() {
  const scrollTo = (id) =>
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="bg-ink px-[6%] py-10">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-5 text-center">
        {/* Logo */}
        <p className="font-syne font-extrabold text-xl text-paper tracking-tight">
          GJ<span className="text-accent">.</span>
        </p>

        {/* Nav links */}
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((l) => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="font-syne font-semibold text-xs tracking-widest uppercase text-paper/40 hover:text-accent transition-colors"
            >
              {l}
            </button>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/[0.07]" />

        {/* Bottom line */}
        <p className="text-paper/40 text-xs tracking-wide">
          Designed &amp; built by{' '}
          <strong className="text-accent font-semibold">Gracelin Jeba</strong>
          {' '}· MERN Stack Developer · Chennai
        </p>
        <p className="text-paper/25 text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
