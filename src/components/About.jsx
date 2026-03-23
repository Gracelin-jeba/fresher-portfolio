const traits = ['Quick Learner', 'Team Player', 'Detail Oriented', 'Problem Solver']

const stats = [
  { num: '9', unit: 'months', label: 'Internship at Whytap' },
  { num: '3+', label: 'Projects Built' },
  { num: '7+', label: 'Technologies' },
]

export default function About() {
  return (
    <section id="about" className="py-24 px-[6%] bg-paper">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

        {/* Left — text */}
        <div>
          <p className="font-syne font-bold text-[0.68rem] tracking-[0.2em] uppercase text-accent">
            About Me
          </p>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.05] tracking-tight mt-2">
            Who I<br />
            <span className="text-accent">Am.</span>
          </h2>
          <div className="w-11 h-[3px] bg-accent rounded mt-3" />

          <p className="text-muted font-light leading-[1.85] mt-6 text-[0.92rem]">
            I'm an enthusiastic{' '}
            <strong className="text-ink font-medium">MERN Stack Developer</strong> with 9
            months of hands-on internship experience at{' '}
            <strong className="text-ink font-medium">Whytap</strong>. I love turning ideas
            into responsive, scalable web applications using the full MERN stack.
          </p>
          <p className="text-muted font-light leading-[1.85] mt-3 text-[0.92rem]">
            Currently looking for an{' '}
            <strong className="text-ink font-medium">entry-level developer role</strong>{' '}
            where I can grow, collaborate with great teams, and keep building meaningful
            products.
          </p>

          {/* Trait tags */}
          <div className="flex flex-wrap gap-2.5 mt-7">
            {traits.map((t) => (
              <span
                key={t}
                className="border border-bdr rounded-full px-4 py-1.5 font-syne font-semibold text-[0.74rem] tracking-wide text-ink"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Right — cards */}
        <div className="flex flex-col gap-4">
          {/* Experience card */}
          <div className="bg-ink rounded-xl px-8 py-9 relative overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-40 h-40 rounded-full bg-accent opacity-[0.08] pointer-events-none" />
            <p className="font-syne font-bold text-[0.65rem] tracking-[0.18em] uppercase text-paper/40 mb-1">
              Experience
            </p>
            <p className="font-syne font-extrabold text-[2.6rem] text-paper leading-none tracking-tight">
              9 <span className="text-[1.1rem] font-light text-paper/50">months</span>
            </p>
            <p className="text-paper/55 text-sm font-light mt-2 leading-relaxed">
              Full-stack internship at{' '}
              <strong className="text-accent font-semibold">Whytap</strong>
            </p>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { num: '3+', label: 'Projects Built' },
              { num: '7+', label: 'Technologies' },
              { num: '4+', label: 'Tools Used' },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-card border border-bdr rounded-lg py-5 px-3 text-center"
              >
                <p className="font-syne font-extrabold text-[2rem] text-accent leading-none tracking-tight">
                  {s.num}
                </p>
                <p className="text-muted font-medium text-[0.72rem] tracking-wide uppercase mt-1">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
