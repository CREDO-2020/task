import { useState } from 'react'

export default function RequestRepair() {
  const [form, setForm] = useState({ company: '', laptop: '', description: '' })
  const [submitted, setSubmitted] = useState(false)
  const update = e => setForm({ ...form, [e.target.name]: e.target.value })
  const submit = e => {
    e.preventDefault()
    alert('Your repair request has been submitted successfully! (Prototype demonstration)')
    setSubmitted(true)
    setForm({ company: '', laptop: '', description: '' })
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto grid max-w-5xl gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="pt-3"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">KTS service desk / 01</p><h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">Request a <span className="text-brand">repair.</span></h1><p className="mt-5 leading-8 text-slate-500">Tell us about your device and the issue you're experiencing. Our team will use these details to understand the support you need.</p><div className="mt-9 rounded-2xl border border-blue-100 bg-skyblue p-5"><p className="font-bold text-navy">Before you submit</p><p className="mt-2 text-sm leading-6 text-slate-600">Provide an accurate laptop model and a clear description of the problem to help us identify the issue.</p></div></div>
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-9">
          <div className="mb-8"><h2 className="text-xl font-extrabold text-navy">Repair request form</h2><p className="mt-1 text-sm text-slate-500">All fields are required.</p></div>
          {submitted && <div role="status" className="mb-6 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800">Request submitted (prototype only). No ticket is stored on a server.</div>}
          <form onSubmit={submit} className="space-y-6">
            <div><label htmlFor="company" className="mb-2 block text-sm font-bold text-slate-700">Company Name</label><input id="company" name="company" value={form.company} onChange={update} required placeholder="e.g. Kigali Business Ltd" className="field" /></div>
            <div><label htmlFor="laptop" className="mb-2 block text-sm font-bold text-slate-700">Laptop Model</label><input id="laptop" name="laptop" value={form.laptop} onChange={update} required placeholder="e.g. HP EliteBook 840 G3" className="field" /></div>
            <div><label htmlFor="description" className="mb-2 block text-sm font-bold text-slate-700">Description of the Problem</label><textarea id="description" name="description" value={form.description} onChange={update} required rows="5" placeholder="Describe the issue with your device..." className="field resize-y" /></div>
            <button type="submit" className="w-full rounded-full bg-brand px-6 py-4 font-bold text-white shadow-lg shadow-blue-100 transition hover:bg-blue-700">Submit Request <span className="ml-2">→</span></button>
            <p className="text-center text-xs text-slate-400">Kigali Tech Solutions · Repair support portal</p>
          </form>
        </div>
      </div>
    </section>
  )
}