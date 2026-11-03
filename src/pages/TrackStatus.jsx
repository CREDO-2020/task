import { useState } from 'react'

export default function TrackStatus() {
  const [ticket, setTicket] = useState('')
  const [searched, setSearched] = useState(false)
  const [error, setError] = useState('')
  const search = e => {
    e.preventDefault()
    setSearched(false)
    if (ticket.trim().toUpperCase() === 'KTS-001') {
      setError('')
      setSearched(true)
    } else {
      setError('Ticket not found. For this prototype, try the sample ticket number KTS-001.')
    }
  }

  return (
    <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl text-center"><p className="text-xs font-extrabold uppercase tracking-[.2em] text-brand">KTS service desk / 02</p><h1 className="mt-4 text-4xl font-black tracking-tight text-navy sm:text-5xl">Track your <span className="text-brand">repair.</span></h1><p className="mx-auto mt-5 max-w-xl leading-8 text-slate-500">Enter your repair ticket number below to check the current progress of your device.</p></div>
      <div className="mx-auto mt-10 max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-10">
        <form onSubmit={search}><label htmlFor="ticket" className="mb-2 block text-left text-sm font-bold text-slate-700">Ticket Number</label><div className="flex flex-col gap-3 sm:flex-row"><input id="ticket" value={ticket} onChange={e => { setTicket(e.target.value); setError(''); setSearched(false) }} required placeholder="Enter ticket e.g. KTS-001" className="field flex-1" /><button type="submit" className="rounded-xl bg-brand px-7 py-3.5 font-bold text-white transition hover:bg-blue-700">Track Ticket →</button></div><p className="mt-3 text-xs text-slate-400">Demo ticket: KTS-001</p></form>
        {error && <div role="alert" className="mt-6 rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">{error}</div>}
        {searched && <div role="status" className="mt-7 rounded-2xl border border-blue-100 bg-skyblue p-6"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-xs font-bold uppercase tracking-widest text-slate-500">Repair ticket</p><p className="mt-1 text-2xl font-black text-navy">KTS-001</p></div><span className="rounded-full bg-amber-100 px-4 py-2 text-sm font-bold text-amber-800">In Repair</span></div><div className="mt-6 border-l-2 border-blue-300 pl-5"><p className="font-bold text-navy">Device is being repaired</p><p className="mt-1 text-sm leading-6 text-slate-600">Your device is currently in the repair process. This is a hardcoded sample result for the project prototype.</p></div></div>}
      </div>
      <p className="mt-7 text-center text-xs text-slate-400">This student prototype uses a sample ticket and does not connect to a live repair database.</p>
    </section>
  )
}