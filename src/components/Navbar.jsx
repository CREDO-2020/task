import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/request', label: 'Request Repair' },
  { to: '/status', label: 'Track Status' },
  { to: '/contact', label: 'Contact Us' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const linkClass = ({ isActive }) =>
    `rounded-full px-4 py-2.5 text-sm font-semibold transition ${isActive ? 'bg-blue-50 text-brand' : 'text-slate-600 hover:bg-slate-50 hover:text-navy'}`

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-navy text-sm font-black tracking-tight text-white">KTS</span>
          <span className="text-lg font-extrabold tracking-tight text-navy">KTS <span className="text-brand">Portal</span></span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} className={linkClass}>{link.label}</NavLink>)}
        </nav>
        <Link to="/request" className="hidden rounded-full bg-brand px-5 py-3 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-700 md:inline-flex">Get IT Support <span className="ml-2">↗</span></Link>
        <button type="button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 text-navy md:hidden">
          <span className="text-2xl leading-none">{open ? '×' : '☰'}</span>
        </button>
      </div>
      {open && <nav className="border-t border-slate-100 bg-white px-5 py-4 md:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl flex-col gap-2">
          {links.map(link => <NavLink key={link.to} to={link.to} end={link.to === '/'} onClick={() => setOpen(false)} className={linkClass}>{link.label}</NavLink>)}
        </div>
      </nav>}
    </header>
  )
}