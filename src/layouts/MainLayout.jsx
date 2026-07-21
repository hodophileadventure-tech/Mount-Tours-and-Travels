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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="min-h-screen bg-transparent text-[#111827]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e5d7b8] bg-[#f8f5ef]/95 shadow-[0_10px_30px_rgba(0,0,0,0.08)] backdrop-blur transition-all duration-500">
        <Container className="flex items-center justify-between py-4">
          <NavLink to="/" className="flex items-center gap-3">
            <img src={logo} alt="Mount Travel & Tours logo" className="h-14 w-14 object-contain" />
            <div>
              <p className="text-lg font-semibold tracking-wide text-[#111827]">
                Mount Travel & Tours
              </p>
              <p className="text-xs uppercase tracking-[0.3em] text-[#6b7280]">
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
                      ? 'text-[#d9a84e]'
                      : 'text-[#374151] hover:text-[#d9a84e]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="rounded-full border border-[#c9b37f] p-2 text-[#111827] md:hidden"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </Container>

        {mobileOpen ? (
          <div className="border-t border-white/10 bg-[#111827]/95 px-4 py-4 backdrop-blur md:hidden">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block rounded-2xl px-4 py-3 text-sm font-medium ${isActive ? 'bg-[#d9a84e]/15 text-[#f7d98d]' : 'text-white/80 hover:bg-white/10'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </header>

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default MainLayout
