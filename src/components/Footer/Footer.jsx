import { ArrowRight } from 'lucide-react'
import logo from '../../assets/logo.png'
import Container from '../Container/Container'

const quickLinks = ['Home', 'Destinations', 'Packages', 'About', 'Contact']
const destinations = ['Hunza', 'Skardu', 'Gilgit', 'Naltar', 'Nagar', 'Fairy Meadows', 'Astore', 'Naran', 'Kaghan', 'Swat', 'Kashmir', 'Muree']

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="3.5" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
    </svg>
  )
}

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22 12a10 10 0 1 0-11.5 9.9V14.8h-2.5v-2.8h2.5V9.9c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9h2.9l-.5 2.8h-2.4v7.1A10 10 0 0 0 22 12Z" />
    </svg>
  )
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M17.5 4.5a5.5 5.5 0 0 1-5.4-4.5h-2.6v11.4a4 4 0 0 1-1.5-3.2 4 4 0 0 1 4.2 4v.3a4.9 4.9 0 1 1-4.9-4.9h.1v-2.3a7.4 7.4 0 1 0 7.4 7.4V6.8a5.5 5.5 0 0 1 1.6.7Z" />
    </svg>
  )
}

const socials = [
  { icon: InstagramIcon, label: 'Instagram', href: 'https://www.instagram.com/mount_travel_and_tours?igsh=ZXo4YTN6MDEwNnFx&utm_source=qr' },
  { icon: FacebookIcon, label: 'Facebook', href: 'https://www.facebook.com/share/1DULPvMqYX/?mibextid=wwXIfr' },
  { icon: TikTokIcon, label: 'TikTok', href: 'https://www.tiktok.com/@mounttravelandtour' },
]

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0f172a] text-white">
      <Container className="py-16">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src={logo} alt="Mount Travel & Tours logo" className="h-12 w-12 object-contain" />
              <div>
                <p className="text-lg font-semibold tracking-wide">Mount Travel & Tours</p>
                <p className="text-xs uppercase tracking-[0.3em] text-[#d9a84e]">Luxury journeys</p>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
              Discover extraordinary mountain escapes with private guides, remarkable stays, and concierge-level care.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a84e]">Quick links</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="transition hover:text-white">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a84e]">Destinations</h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {destinations.map((destination) => (
                <li key={destination}>{destination}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a84e]">Contact</h3>
            <div className="mt-5 space-y-3 text-sm text-white/70">
              <p>Aliabad Street 2 near Ali Chowk</p>
              <p>Skardu, Gilgit Baltistan</p>
              <div className="mt-4">
                <p className="font-semibold text-white">WhatsApp</p>
                <a href="https://wa.me/923478771187" className="block transition hover:text-white">03478771187</a>
              </div>
              <div>
                <p className="font-semibold text-white">Call</p>
                <a href="tel:+923554519342" className="block transition hover:text-white">03554519342</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-3">
            {socials.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="rounded-full border border-white/15 p-2 text-white/70 transition hover:border-[#d9a84e] hover:text-[#d9a84e]"
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>

          <p className="text-sm text-white/60">© 2026 Mount Travel & Tours. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
