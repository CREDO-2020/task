import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = e => {
    e.preventDefault()
    alert('Thank you for contacting Kigali Tech Solutions! (Prototype demonstration)')
    e.target.reset()
    setSent(true)
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">KTS service desk / 03</p><h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">Let's talk <span className="text-brand">technology.</span></h1><p className="mt-5 max-w-xl leading-8 text-slate-500">Have a question or need help? Send our team a message or visit us in Kigali.</p>
        <div className="mt-10 grid gap-6 lg:grid-cols-[.8fr_1.2fr]">
          <div className="rounded-3xl bg-navy p-8 text-white"><p className="text-xs font-bold uppercase tracking-[.2em] text-blue-300">Visit our office</p><h2 className="mt-4 text-2xl font-extrabold">Kigali Tech Solutions</h2><div className="mt-8 space-y-6"><div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-xl">⌖</span><div><p className="font-bold">Address</p><p className="mt-1 text-sm leading-6 text-slate-300">Kigali Innovation City,<br />Gasabo District, Kigali, Rwanda</p></div></div><div className="flex gap-4"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-xl">⌘</span><div><p className="font-bold">Our services</p><p className="mt-1 text-sm leading-6 text-slate-300">Hardware repairs, software installation and corporate networking.</p></div></div></div><div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm font-semibold text-blue-200">Kigali · Rwanda</p><p className="mt-1 text-xs text-slate-400">Supporting businesses around Kigali, including the Kigali Special Economic Zone.</p></div></div>
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-9"><h2 className="text-xl font-extrabold text-navy">Send us a message</h2><p className="mt-1 text-sm text-slate-500">Fill in the form and let us know how we can help.</p>{sent && <div role="status" className="mt-5 rounded-xl bg-emerald-50 p-3 text-sm font-semibold text-emerald-800">Message submitted (prototype demonstration).</div>}
            <form onSubmit={submit} className="mt-7 space-y-5"><div><label htmlFor="name" className="mb-2 block text-sm font-bold text-slate-700">Name</label><input id="name" name="name" required placeholder="Your full name" className="field" /></div><div><label htmlFor="email" className="mb-2 block text-sm font-bold text-slate-700">Email</label><input id="email" name="email" type="email" required placeholder="you@example.com" className="field" /></div><div><label htmlFor="message" className="mb-2 block text-sm font-bold text-slate-700">Message</label><textarea id="message" name="message" required rows="4" placeholder="How can we help you?" className="field resize-y" /></div><button type="submit" className="w-full rounded-full bg-brand px-6 py-4 font-bold text-white transition hover:bg-blue-700">Send Message →</button></form>
          </div>
        </div>
      </div>
    </section>
  )
}