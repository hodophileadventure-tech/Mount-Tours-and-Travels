import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import PackageCard from '../PackageCard/PackageCard'
import packages from '../../data/packages'

function TourPackages() {
  const airPackages = packages.filter((pkg) => pkg.category === 'By Air')
  const roadPackages = packages.filter((pkg) => pkg.category === 'By Road')

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

        <div className="space-y-16">
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">Category 01</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#111827]">By Air</h2>
              <p className="mt-3 max-w-2xl text-lg text-[#6b7280]">Fast, scenic, and comfortable mountain escapes with premium air travel connections.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {airPackages.map((pkg) => (
                <PackageCard key={pkg.title} {...pkg} />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">Category 02</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#111827]">By Road</h2>
              <p className="mt-3 max-w-2xl text-lg text-[#6b7280]">Comfortable road journeys with private transport, thoughtful pacing, and flexible mountain routes.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {roadPackages.map((pkg) => (
                <PackageCard key={pkg.title} {...pkg} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TourPackages
