import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-9 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-lg font-extrabold">KTS <span className="text-blue-300">Portal</span></p>
          <p className="mt-1 text-sm text-slate-400">Fast & reliable IT support in Kigali.</p>
        </div>
        <div className="flex flex-wrap gap-5 text-sm text-slate-300">
          <Link className="hover:text-white" to="/">Home</Link>
          <Link className="hover:text-white" to="/request">Request Repair</Link>
          <Link className="hover:text-white" to="/status">Track Status</Link>
          <Link className="hover:text-white" to="/contact">Contact Us</Link>
        </div>
        <p className="text-xs text-slate-500">© {new Date().getFullYear()} Kigali Tech Solutions</p>
      </div>
    </footer>
  )
}