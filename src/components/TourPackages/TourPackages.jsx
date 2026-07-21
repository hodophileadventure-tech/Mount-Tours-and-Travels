import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import PackageCard from '../PackageCard/PackageCard'
import packages from '../../data/packages'

function TourPackages() {
  return (
    <section className="bg-[#fcfaf6] py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionTitle
            eyebrow="Tour packages"
            title="Luxury itineraries designed around comfort, access, and awe"
            description="Each journey is carefully curated with premium hospitality, seamless transport, and unforgettable moments in the mountains."
            align="left"
          />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.title} {...pkg} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default TourPackages
