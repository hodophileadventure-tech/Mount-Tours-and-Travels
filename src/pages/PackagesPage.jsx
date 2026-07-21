import { ShieldCheck, CalendarRange, Star } from 'lucide-react'
import Container from '../components/Container/Container'
import PageHeader from '../components/PageHeader/PageHeader'
import SectionCard from '../components/SectionCard/SectionCard'
import TourPackages from '../components/TourPackages/TourPackages'

const packageHighlights = [
  { title: 'Flexible planning', description: 'Tailor your journey around seasonal conditions, private preferences, and preferred pace.', icon: <CalendarRange size={18} /> },
  { title: 'Trusted quality', description: 'Every package is assembled with vetted partners, premium stays, and thoughtful logistics.', icon: <ShieldCheck size={18} /> },
  { title: 'Exceptional standards', description: 'Service and comfort remain consistent from initial planning through the final farewell.', icon: <Star size={18} /> },
]

function PackagesPage() {
  return (
    <section className="bg-[#f8f5ef] py-24 sm:py-28">
      <Container>
        <div className="mb-16 max-w-3xl">
          <PageHeader
            eyebrow="Packages"
            title="Tailor-made mountain escapes with confidence and elegance"
            description="Our packages combine elevated hospitality, private movement, and deeply considered pacing for a journey that feels both effortless and unforgettable."
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {packageHighlights.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>
      </Container>

      <TourPackages />
    </section>
  )
}

export default PackagesPage
