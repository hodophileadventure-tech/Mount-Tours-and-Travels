import { motion } from 'framer-motion'
import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircleMore } from 'lucide-react'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setErrors((current) => ({ ...current, [name]: '' }))
  }

  const validate = () => {
    const nextErrors = {}
    if (!formData.name.trim()) nextErrors.name = 'Name is required.'
    if (!formData.email.trim()) nextErrors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) nextErrors.email = 'Please enter a valid email.'
    if (!formData.message.trim()) nextErrors.message = 'Please share your travel plans.'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (validate()) {
      window.alert('Thank you for your inquiry. Our concierge team will contact you shortly.')
      setFormData({ name: '', email: '', phone: '', message: '' })
    }
  }

  return (
    <section className="bg-[#fcfaf6] py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionTitle
            eyebrow="Contact"
            title="Plan your next mountain escape with our concierge team"
            description="Whether you are arranging a private itinerary or a grand alpine celebration, we are ready to assist with elegance and discretion."
            align="left"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-[2rem] border border-[#e5d7b8] bg-[#111827] p-8 text-white shadow-[0_20px_70px_rgba(17,24,39,0.12)] sm:p-10"
          >
            <h3 className="text-2xl font-semibold">Request a private consultation</h3>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Share your travel preferences and our team will craft a tailored experience for you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d9a84e] focus:outline-none"
                />
                {errors.name ? <p className="mt-2 text-sm text-[#f7d98d]">{errors.name}</p> : null}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d9a84e] focus:outline-none"
                  />
                  {errors.email ? <p className="mt-2 text-sm text-[#f7d98d]">{errors.email}</p> : null}
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d9a84e] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your dream itinerary"
                  className="w-full rounded-[1.3rem] border border-white/15 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 focus:border-[#d9a84e] focus:outline-none"
                />
                {errors.message ? <p className="mt-2 text-sm text-[#f7d98d]">{errors.message}</p> : null}
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-[#d9a84e] px-5 py-3 text-sm font-semibold text-[#111827] transition hover:bg-[#c5902f]"
              >
                Send Inquiry
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="space-y-6"
          >
            <div className="rounded-[2rem] border border-[#e5d7b8] bg-white/80 p-8 shadow-[0_20px_70px_rgba(17,24,39,0.08)]">
              <h3 className="text-2xl font-semibold text-[#111827]">Visit our office</h3>
              <div className="mt-6 space-y-4 text-[#4b5563]">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="mt-1 text-[#d9a84e]" />
                  <div>
                    <p className="font-semibold text-[#111827]">Office</p>
                    <p>Aliabad Street 2 near Ali Chowk</p>
                    <p>Skardu, Gilgit Baltistan</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone size={18} className="mt-1 text-[#d9a84e]" />
                  <div>
                    <p className="font-semibold text-[#111827]">Call</p>
                    <a href="tel:+923554519342" className="transition hover:text-white">03554519342</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircleMore size={18} className="mt-1 text-[#d9a84e]" />
                  <div>
                    <p className="font-semibold text-[#111827]">WhatsApp</p>
                    <a href="https://wa.me/923478771187" target="_blank" rel="noreferrer" className="transition hover:text-white">03478771187</a>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/923478771187"
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#d9a84e] px-4 py-3 text-sm font-semibold text-[#d9a84e] transition hover:bg-[#d9a84e]/10"
              >
                <MessageCircleMore size={16} /> WhatsApp Concierge
              </a>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-[#e5d7b8] shadow-[0_20px_70px_rgba(17,24,39,0.08)]">
              <iframe
                title="Mount Travel & Tours Office Map"
                src="https://www.google.com/maps?q=Aliabad+Street+2+near+Ali+Chowk+Skardu+Gilgit+Baltistan&output=embed"
                loading="lazy"
                className="h-[300px] w-full"
              />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
