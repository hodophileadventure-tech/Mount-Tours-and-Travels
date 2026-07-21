import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import DestinationCard from '../DestinationCard/DestinationCard'
import destinations from '../../data/destinations'

function FeaturedDestinations() {
  return (
    <section className="bg-[#f8f5ef] py-24">
      <Container>
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="Featured destinations"
            title="Signature escapes crafted for the most discerning travelers"
            description="From the peaks of Hunza to the serenity of Kashmir, each experience is designed to feel intimate, elevated, and unforgettable."
            align="left"
          />
          <p className="max-w-md text-sm leading-7 text-[#6b7280]">
            Discover curated routes, private guides, and exquisite mountain stays that turn journey into legacy.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {destinations.map((destination) => (
            <DestinationCard key={destination.title} {...destination} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedDestinations
