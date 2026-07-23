import { useEffect, useState } from 'react'
import { Outlet, NavLink } from 'react-router-dom'
import { Compass, Menu, Sparkles, X } from 'lucide-react'
import Container from '../components/Container/Container'
import Footer from '../components/Footer/Footer'
import logo from '../assets/logo.png'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/destinations', label: 'Destinations' },
  { to: '/packages', label: 'Packages' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function MainLayout() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [tripFormOpen, setTripFormOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleTripSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-transparent text-[#111827]">
      <header className={`fixed inset-x-0 top-0 z-50 border-b border-[#d9a84e]/40 bg-[linear-gradient(135deg,#111827_0%,#1f2937_48%,#5a3a1c_100%)] shadow-[0_12px_40px_rgba(17,24,39,0.35)] backdrop-blur-xl transition-all duration-500 ${scrolled ? 'py-2' : 'py-0'}`}>
        <Container className="flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Mount Travel & Tours logo" className="h-16 w-16 object-contain" />
            <div>
              <p className="text-lg font-semibold tracking-wide text-white">
                Mount Travel & Tours
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#f7d98d]">
                Luxury escapes
              </p>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? 'text-[#f7d98d]'
                      : 'text-white/85 hover:text-[#f7d98d]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setTripFormOpen(true)
                setSubmitted(false)
              }}
              className="rounded-full bg-[#f7d98d] px-4 py-2.5 text-sm font-semibold text-[#111827] transition hover:bg-white hover:text-[#111827]"
            >
              Make My Trip
            </button>
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-[#f7d98d]/70 p-2 text-white md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>

        {mobileOpen ? (
          <div className="border-t border-[#d9a84e]/30 bg-[linear-gradient(180deg,rgba(17,24,39,0.98),rgba(35,25,16,0.98))] px-4 py-4 backdrop-blur md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-medium ${isActive ? 'bg-[#f7d98d]/15 text-[#f7d98d]' : 'text-white/80 hover:bg-white/10'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false)
                setTripFormOpen(true)
                setSubmitted(false)
              }}
              className="mt-3 w-full rounded-full bg-[#f7d98d] px-4 py-3 text-sm font-semibold text-[#111827]"
            >
              Make My Trip
            </button>
          </div>
        ) : null}
      </header>

      {tripFormOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#111827]/70 px-3 py-4 sm:px-4 sm:py-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-[#e5d7b8] bg-[#fcfaf6] p-5 shadow-[0_25px_80px_rgba(17,24,39,0.3)] sm:p-8 lg:p-10">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">Plan your escape</p>
                <h2 className="mt-2 text-2xl font-semibold text-[#111827] sm:text-3xl">Make My Trip</h2>
                <p className="mt-2 max-w-2xl text-sm text-[#6b7280] sm:text-base">Share your dream itinerary and we’ll craft a tailored mountain experience for you.</p>
              </div>
              <button
                type="button"
                onClick={() => setTripFormOpen(false)}
                className="rounded-full border border-[#e5d7b8] p-2 text-[#111827] transition hover:bg-[#111827] hover:text-white"
              >
                <X size={18} />
              </button>
            </div>

            {submitted ? (
              <div className="mt-6 rounded-[1.25rem] border border-[#d9a84e]/30 bg-[#fff8e8] p-5 text-sm text-[#6b7280] sm:p-6">
                <p className="font-semibold text-[#111827]">Thank you for your request.</p>
                <p className="mt-2">Our travel team will reach out to you shortly with a personalized itinerary.</p>
              </div>
            ) : (
              <form className="mt-6 grid gap-4 md:grid-cols-2" onSubmit={handleTripSubmit}>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">Full name</label>
                  <input required className="w-full rounded-2xl border border-[#e5d7b8] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a84e]" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">Email address</label>
                  <input type="email" required className="w-full rounded-2xl border border-[#e5d7b8] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a84e]" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">Phone number</label>
                  <input required className="w-full rounded-2xl border border-[#e5d7b8] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a84e]" placeholder="03XX-XXXXXXX" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">Destination</label>
                  <input required className="w-full rounded-2xl border border-[#e5d7b8] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a84e]" placeholder="Skardu, Hunza, etc." />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">Travelers</label>
                  <input required className="w-full rounded-2xl border border-[#e5d7b8] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a84e]" placeholder="2 adults, 1 child" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-medium text-[#374151]">Preferred dates</label>
                  <input type="text" className="w-full rounded-2xl border border-[#e5d7b8] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a84e]" placeholder="e.g. July 2026" />
                </div>
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-[#374151]">Trip notes</label>
                  <textarea rows="5" className="w-full rounded-2xl border border-[#e5d7b8] bg-white px-4 py-3 text-sm outline-none focus:border-[#d9a84e]" placeholder="Tell us about your travel style, budget, or special requests" />
                </div>
                <div className="md:col-span-2 flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-sm text-[#6b7280]">We’ll contact you within 24 hours.</p>
                  <button type="submit" className="rounded-full bg-[#111827] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#d9a84e] hover:text-[#111827]">
                    Submit Request
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      ) : null}

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
