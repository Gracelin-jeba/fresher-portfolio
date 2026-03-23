const projects = [
  {
    num: '01',
    title: 'Job Portal',
    desc:
      'A full-stack MERN application featuring secure JWT authentication, job listing management, applicant tracking, and a responsive dashboard for both recruiters and job seekers.',
    tags: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT'],
    color: '#e05c1a',
    github: '#',
    live: '#',
  },
{
  num: '02',
  title: 'E-Commerce Website',
  desc:
    'Feature-rich online store with dynamic product listing, filtering, cart management, and full order flow — React frontend with a Node/Express REST API backend.',
  tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST API', 'Bootstrap'],
  color: '#2563eb',
  github: '#',
  live: '#',
},
  {
    num: '03',
    title: 'Portfolio Website',
    desc:
      'Personal developer portfolio showcasing projects and skills. Built with React.js and Tailwind CSS, featuring smooth scroll, typewriter effect, and full responsiveness.',
    tags: ['React.js', 'Tailwind CSS', 'Vite', 'Animations'],
    color: '#059669',
    github: '#',
    live: '#',
  },
]

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22" />
    </svg>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-[6%] bg-paper">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p className="font-syne font-bold text-[0.68rem] tracking-[0.2em] uppercase text-accent">
          My Work
        </p>
        <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.05] tracking-tight mt-2">
          Featured<br />
          <span className="text-accent">Projects.</span>
        </h2>
        <div className="w-11 h-[3px] bg-accent rounded mt-3 mb-12" />

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.num}
              className="bg-card border border-bdr rounded-xl p-7 flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent group"
            >
              {/* Top row */}
              <div className="flex justify-between items-start">
                <span
                  className="font-syne font-extrabold text-[3rem] leading-none tracking-tighter select-none"
                  style={{ color: '#e5dfd6' }}
                >
                  {p.num}
                </span>
                <div
                  className="w-10 h-10 rounded-full opacity-20 group-hover:opacity-30 transition-opacity"
                  style={{ background: p.color }}
                />
              </div>

              {/* Title & desc */}
              <h3 className="font-syne font-extrabold text-[1.3rem] tracking-tight leading-tight mt-4">
                {p.title}
              </h3>
              <p className="text-muted font-light text-sm leading-[1.8] mt-3 flex-1">
                {p.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[0.65rem] font-bold tracking-widest uppercase px-2.5 py-1 rounded"
                    style={{
                      background: p.color + '18',
                      color: p.color,
                      border: `1px solid ${p.color}30`,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="border-t border-bdr mt-5 pt-5 flex gap-5">
                <a
                  href={p.live}
                  className="inline-flex items-center gap-1.5 font-syne font-bold text-[0.73rem] tracking-widest uppercase transition-all hover:gap-2.5"
                  style={{ color: p.color }}
                >
                  Live Demo <ArrowIcon />
                </a>
                <a
                  href={p.github}
                  className="inline-flex items-center gap-1.5 font-syne font-bold text-[0.73rem] tracking-widest uppercase text-muted hover:text-ink transition-all hover:gap-2.5"
                >
                  GitHub <GithubIcon />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
