import { Compass, Mountain, Trees, Sparkles } from 'lucide-react'
import Container from '../components/Container/Container'
import PageHeader from '../components/PageHeader/PageHeader'
import SectionCard from '../components/SectionCard/SectionCard'
import DestinationCard from '../components/DestinationCard/DestinationCard'
import destinations from '../data/destinations'

const highlights = [
  { title: 'Private access', description: 'Reach hidden alpine viewpoints through curated routes and trusted local partnerships.', icon: <Mountain size={18} /> },
  { title: 'Immersive stays', description: 'Stay in beautifully appointed mountain lodges and boutique retreats with panoramic views.', icon: <Compass size={18} /> },
  { title: 'Nature-led travel', description: 'Each itinerary is shaped around calm, connoisseur-led discovery and seasonal beauty.', icon: <Trees size={18} /> },
  { title: 'Signature service', description: 'From arrival to departure, every detail is managed with warmth and precision.', icon: <Sparkles size={18} /> },
]

function DestinationsPage() {
  return (
    <section className="bg-[#fcfaf6] py-24 sm:py-28">
      <Container>
        <div className="mb-16 max-w-3xl">
          <PageHeader
            eyebrow="Destinations"
            title="The world’s most striking mountain journeys, refined for modern luxury"
            description="Explore elevated destinations that balance cinematic scenery with thoughtful pacing, comfort, and exceptional local insight."
          />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {highlights.map((item) => (
            <SectionCard key={item.title} {...item} />
          ))}
        </div>

        <div className="mt-16">
          <div className="mb-10 max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-[-0.02em] text-[#111827] sm:text-4xl">Destinations we cover</h2>
            <p className="mt-4 text-base leading-8 text-[#4b5563]">
              Explore the full range of regions we offer, each presented with destination imagery, private guidance, and effortless luxury.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {destinations.map((destination) => (
              <DestinationCard key={destination.title} {...destination} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default DestinationsPage
