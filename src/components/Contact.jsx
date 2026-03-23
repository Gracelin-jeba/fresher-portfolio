import { useState } from 'react'

const contactInfo = [
  { icon: '📧', label: 'Email',    value: 'gracelinjeba2002@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Chennai, Tamil Nadu' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/gracelinJeba' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/gracelinJeba' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) return
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 3500)
  }

  return (
    <section id="contact" className="py-24 px-[6%] bg-paper">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-lg mx-auto mb-14">
          <p className="font-syne font-bold text-[0.68rem] tracking-[0.2em] uppercase text-accent">
            Let's Talk
          </p>
          <h2 className="font-syne font-extrabold text-[clamp(2rem,5vw,3rem)] leading-[1.05] tracking-tight mt-2">
            Get In <span className="text-accent">Touch.</span>
          </h2>
          <p className="text-muted text-sm font-light mt-4 leading-relaxed">
            Actively looking for entry-level developer roles. Feel free to reach out
            for opportunities or just a quick hello!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Info */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex gap-4 items-start">
                <div className="w-11 h-11 rounded-lg bg-ink flex items-center justify-center text-base flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-syne font-bold text-[0.65rem] tracking-[0.14em] uppercase text-muted mb-1">
                    {item.label}
                  </p>
                  <p className="text-ink text-sm">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="bg-ink rounded-xl p-9 relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full bg-accent opacity-[0.08] pointer-events-none" />

            {sent ? (
              <div className="text-center py-10">
                <p className="text-4xl mb-4">🎉</p>
                <p className="font-syne font-extrabold text-xl text-paper">Message Sent!</p>
                <p className="text-paper/50 text-sm mt-2">I'll get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="block font-syne font-bold text-[0.65rem] tracking-[0.14em] uppercase text-paper/40 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full bg-white/[0.07] border border-white/15 rounded-lg px-4 py-3 text-paper text-sm placeholder-paper/30 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-syne font-bold text-[0.65rem] tracking-[0.14em] uppercase text-paper/40 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full bg-white/[0.07] border border-white/15 rounded-lg px-4 py-3 text-paper text-sm placeholder-paper/30 outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-syne font-bold text-[0.65rem] tracking-[0.14em] uppercase text-paper/40 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Hi Gracelin, I'd love to discuss..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    className="w-full bg-white/[0.07] border border-white/15 rounded-lg px-4 py-3 text-paper text-sm placeholder-paper/30 outline-none focus:border-accent transition-colors resize-y"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent text-white font-syne font-bold text-sm tracking-widest uppercase py-3.5 rounded-lg hover:bg-orange-700 transition-all hover:-translate-y-0.5 mt-1"
                >
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
