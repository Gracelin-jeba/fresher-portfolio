const skillData = {
  Frontend: [
    { name: 'React.js',    icon: '⚛' },
    { name: 'JavaScript',  icon: 'JS' },
    { name: 'HTML5',       icon: 'H5' },
    { name: 'CSS3',        icon: 'CS' },
  ],
  Backend: [
    { name: 'Node.js',     icon: 'N'  },
    { name: 'Express.js',  icon: 'EX' },
  ],
  Database: [
    { name: 'MongoDB',     icon: 'MG' },
  ],
  Tools: [
    { name: 'Git',         icon: 'GT' },
    { name: 'GitHub',      icon: 'GH' },
    { name: 'VS Code',     icon: 'VS' },
    { name: 'Postman',     icon: 'PM' },
  ],
}

function Pill({ name, icon }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/[0.06] border border-white/10 rounded-lg px-5 py-2.5 font-syne font-semibold text-[0.8rem] tracking-wide text-paper/85 cursor-default transition-all duration-200 hover:bg-accent/15 hover:border-accent/40 hover:text-paper hover:-translate-y-0.5">
      <span className="text-accent font-bold text-xs">{icon}</span>
      {name}
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-[6%] bg-ink relative overflow-hidden">
      {/* deco */}
      <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent opacity-[0.05] pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-wrap justify-between items-end gap-5 mb-14">
          <div>
            <p className="font-syne font-bold text-[0.68rem] tracking-[0.2em] uppercase text-accent">
              What I Know
            </p>
            <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.05] tracking-tight mt-2 text-paper">
              My Tech<br />
              <span className="text-accent">Stack.</span>
            </h2>
          </div>
          <p className="text-paper/40 text-sm font-light max-w-xs leading-relaxed">
            Technologies and tools I've worked with during my internship and personal projects.
          </p>
        </div>

        {/* Categories */}
        {Object.entries(skillData).map(([category, skills]) => (
          <div key={category} className="mb-9">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-syne font-bold text-[0.65rem] tracking-[0.18em] uppercase text-paper/30">
                {category}
              </span>
              <div className="flex-1 h-px bg-white/[0.06]" />
            </div>
            <div className="flex flex-wrap gap-3">
              {skills.map((s) => (
                <Pill key={s.name} {...s} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
