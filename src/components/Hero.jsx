import { useState, useEffect, useRef } from 'react'

const ROLES = ['MERN Stack Developer', 'React.js Enthusiast', 'Full Stack Builder']
const TICKER = ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Tailwind CSS', 'REST APIs', 'Git & GitHub', 'Responsive Design', 'Full Stack Dev']

function Typewriter() {
  const [display, setDisplay] = useState('')
  const roleIdx = useRef(0)
  const charIdx = useRef(0)
  const timer = useRef(null)

  useEffect(() => {
    const type = () => {
      const current = ROLES[roleIdx.current]
      if (charIdx.current <= current.length) {
        setDisplay(current.slice(0, charIdx.current))
        charIdx.current++
        timer.current = setTimeout(type, 68)
      } else {
        timer.current = setTimeout(erase, 2000)
      }
    }
    const erase = () => {
      if (charIdx.current > 0) {
        charIdx.current--
        setDisplay(ROLES[roleIdx.current].slice(0, charIdx.current))
        timer.current = setTimeout(erase, 36)
      } else {
        roleIdx.current = (roleIdx.current + 1) % ROLES.length
        timer.current = setTimeout(type, 320)
      }
    }
    timer.current = setTimeout(type, 600)
    return () => clearTimeout(timer.current)
  }, [])

  return (
    <p className="font-dm font-light italic text-muted text-xl md:text-2xl mt-4 min-h-[38px]">
      {display}
      <span className="cursor-blink">&nbsp;</span>
    </p>
  )
}

function Ticker() {
  const all = [...TICKER, ...TICKER]
  return (
    <div className="bg-ink overflow-hidden py-3 border-t border-white/5 border-b border-white/5">
      <div className="inline-block animate-marquee whitespace-nowrap">
        {all.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-4 pr-9 font-syne font-bold text-xs tracking-widest uppercase text-paper/60">
            {item}
            <span className="text-accent text-base">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <>
      <section
        id="hero"
        className="min-h-screen flex items-center px-[6%] pt-24 pb-16 relative overflow-hidden"
      >
        {/* Geometric circles */}
        <div className="absolute top-[-80px] right-[4%] w-[340px] h-[340px] rounded-full border border-bdr opacity-50 pointer-events-none" />
        <div className="absolute bottom-20 right-[22%] w-[160px] h-[160px] rounded-full border border-bdr opacity-25 pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-ink text-paper font-syne font-bold text-[0.68rem] tracking-[0.14em] uppercase px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse-dot" />
            Open to opportunities
          </div>

          {/* Name */}
          <h1 className="font-syne font-extrabold leading-[0.92] tracking-tight mt-6 text-[clamp(3.2rem,9vw,7rem)]">
            GRACELIN
            <br />
            <span className="text-accent">JEBA E</span>
          </h1>

          {/* Typewriter role */}
          <Typewriter />

          {/* Location */}
          <div className="flex items-center gap-2 text-muted text-sm mt-3">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#e05c1a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Chennai, Tamil Nadu
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-9">
            <button
              onClick={() => scrollTo('projects')}
              className="inline-flex items-center gap-2 bg-accent text-white font-syne font-bold text-xs tracking-widest uppercase px-7 py-3.5 rounded hover:bg-orange-700 transition-all hover:-translate-y-0.5"
            >
              View Projects
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="inline-flex items-center gap-2 bg-transparent text-ink font-syne font-bold text-xs tracking-widest uppercase px-7 py-3.5 rounded border-2 border-ink hover:bg-ink hover:text-paper transition-all hover:-translate-y-0.5"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll hint */}
          <div className="flex items-center gap-3 text-muted font-syne text-[0.65rem] font-bold tracking-[0.14em] uppercase mt-16">
            <span className="w-7 h-px bg-muted block" />
            Scroll to explore
          </div>
        </div>
      </section>

      <Ticker />
    </>
  )
}
