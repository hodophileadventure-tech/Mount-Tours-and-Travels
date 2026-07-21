import { Mail, MessageCircleMore, Phone } from 'lucide-react'
import Container from '../components/Container/Container'
import PageHeader from '../components/PageHeader/PageHeader'
import SectionCard from '../components/SectionCard/SectionCard'

const contactDetails = [
  { title: 'Concierge line', description: '+92 300 1234567', icon: <Phone size={18} /> },
  { title: 'Email', description: 'concierge@mounttraveltours.com', icon: <Mail size={18} /> },
  { title: 'WhatsApp', description: 'Private consultations available daily', icon: <MessageCircleMore size={18} /> },
]

function ContactPage() {
  return (
    <section className="bg-[#f8f5ef] py-24 sm:py-28">
      <Container>
        <div className="mb-16 max-w-3xl">
          <PageHeader
            eyebrow="Contact"
            title="Begin your next private journey with a conversation"
            description="Our concierge team is ready to shape a personalized itinerary around your interests, pace, and preferred level of comfort."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {contactDetails.map((detail) => (
            <SectionCard key={detail.title} {...detail} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default ContactPage
