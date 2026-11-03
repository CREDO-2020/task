import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import RequestRepair from './pages/RequestRepair'
import TrackStatus from './pages/TrackStatus'
import Contact from './pages/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#f7f9fc]">
      <Navbar />
      <main className="page-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request" element={<RequestRepair />} />
          <Route path="/status" element={<TrackStatus />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}