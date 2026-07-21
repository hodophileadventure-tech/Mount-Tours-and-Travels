import { HeartHandshake, Landmark, Users } from 'lucide-react'
import Container from '../components/Container/Container'
import PageHeader from '../components/PageHeader/PageHeader'
import SectionCard from '../components/SectionCard/SectionCard'

const values = [
  { title: 'Thoughtful hospitality', description: 'We design journeys that feel calm, generous, and deeply personal from the first conversation.', icon: <HeartHandshake size={18} /> },
  { title: 'Local knowledge', description: 'Our expertise is rooted in long-standing relationships and a deep understanding of mountain regions.', icon: <Landmark size={18} /> },
  { title: 'Trusted by guests', description: 'Every experience reflects the care, discretion, and service standards our travelers expect.', icon: <Users size={18} /> },
]

function AboutPage() {
  return (
    <section className="bg-[#fcfaf6] py-24 sm:py-28">
      <Container>
        <div className="mb-16 max-w-3xl">
          <PageHeader
            eyebrow="About"
            title="A luxury travel company rooted in craftsmanship, care, and cultural depth"
            description="We believe the finest journeys are the ones that feel seamless, personal, and quietly transformative."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {values.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default AboutPage
