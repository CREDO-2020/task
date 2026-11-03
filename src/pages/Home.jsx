import { Link } from 'react-router-dom'

const services = [
  { number: '01', icon: '⌘', title: 'Laptop Repair', description: 'Professional diagnosis and repair for laptops and desktop computers.', tags: 'Hardware · Diagnostics' },
  { number: '02', icon: '⌁', title: 'Network Setup', description: 'Reliable business networking, configuration and connectivity solutions.', tags: 'Business · Connectivity' },
  { number: '03', icon: '▣', title: 'Software Installation', description: 'Operating systems, essential applications, updates and software support.', tags: 'Installation · Support' },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy">
        <div className="absolute -right-24 -top-32 h-[500px] w-[500px] rounded-full border border-white/10" />
        <div className="absolute -right-8 -top-16 h-[370px] w-[370px] rounded-full border border-white/10" />
        <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-300/25 bg-blue-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[.16em] text-blue-200"><span className="h-2 w-2 rounded-full bg-emerald-400" /> Kigali-based IT support</div>
            <h1 className="max-w-3xl text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-6xl">Fast & Reliable IT Support <span className="text-blue-300">in Kigali.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">Technology problems should never slow your business down. Get dependable repairs, software support and network solutions from Kigali Tech Solutions.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to="/request" className="inline-flex items-center justify-center rounded-full bg-brand px-7 py-4 font-bold text-white shadow-xl shadow-blue-950/30 transition hover:-translate-y-1 hover:bg-blue-600">Request a Repair <span className="ml-3">→</span></Link>
              <Link to="/status" className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-4 font-bold text-white transition hover:bg-white/10">Track Your Ticket</Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-sm text-slate-400"><span>✓ Business-focused support</span><span>✓ Reliable solutions</span><span>✓ Kigali, Rwanda</span></div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs font-semibold uppercase tracking-widest text-blue-200">KTS service desk</p><p className="mt-1 text-lg font-bold text-white">How can we help?</p></div><span className="grid h-12 w-12 place-items-center rounded-2xl bg-blue-500/20 text-2xl">✦</span></div>
              <div className="space-y-3 py-5">
                {services.map((service, i) => <div key={service.number} className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-500/20 text-xl text-blue-200">{service.icon}</span><div className="min-w-0 flex-1"><p className="font-bold text-white">{service.title}</p><p className="mt-1 text-xs text-slate-400">{service.tags}</p></div><span className="text-sm text-slate-500">0{i + 1}</span></div>)}
              </div>
              <div className="rounded-xl bg-blue-500/15 px-4 py-3 text-center text-sm font-semibold text-blue-200">Your technology. Our priority.</div>
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-2xl bg-white px-5 py-4 shadow-soft"><p className="text-xs font-semibold text-slate-500">Support location</p><p className="mt-1 font-extrabold text-navy">Kigali, Rwanda</p></div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">What we do</p><h2 className="mt-3 text-3xl font-black tracking-tight text-navy sm:text-4xl">IT solutions that keep you moving.</h2></div><p className="max-w-md leading-7 text-slate-500">From a faulty laptop to a complete office network, KTS helps businesses stay productive and connected.</p></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map(service => <article key={service.number} className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-soft"><div className="flex items-center justify-between"><span className="grid h-14 w-14 place-items-center rounded-2xl bg-skyblue text-2xl font-bold text-brand">{service.icon}</span><span className="text-sm font-bold text-slate-300">{service.number}</span></div><h3 className="mt-7 text-xl font-extrabold text-navy">{service.title}</h3><p className="mt-3 min-h-[72px] leading-7 text-slate-500">{service.description}</p><Link to="/request" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand">Request this service <span className="transition group-hover:translate-x-1">→</span></Link></article>)}
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-5 pb-20 sm:px-8"><div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-skyblue p-8 sm:flex-row sm:items-center sm:p-12"><div><p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">Need technical assistance?</p><h2 className="mt-3 text-2xl font-black text-navy sm:text-3xl">Let's get your business back on track.</h2><p className="mt-2 text-slate-600">Send your repair request in just a few steps.</p></div><Link to="/request" className="shrink-0 rounded-full bg-brand px-7 py-4 font-bold text-white transition hover:bg-blue-700">Submit a Request →</Link></div></section>
    </>
  )
}