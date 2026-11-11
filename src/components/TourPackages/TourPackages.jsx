import { useState } from 'react'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'
import PackageCard from '../PackageCard/PackageCard'
import packages from '../../data/packages'

function TourPackages({ showPackageTypeSelector = false }) {
  const airPackages = packages.filter((pkg) => pkg.category === 'By Air')
  const roadPackages = packages.filter((pkg) => pkg.category === 'By Road')
  const groupPackages = packages.filter((pkg) => pkg.category === 'Group')
  const [packageType, setPackageType] = useState('Private')

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

        {showPackageTypeSelector ? (
          <div className="mb-12 flex flex-col gap-5 rounded-[1.8rem] border border-[#e5d7b8] bg-white p-6 shadow-[0_18px_60px_rgba(17,24,39,0.06)] sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a84e]">Find your journey</p>
              <h2 className="mt-2 text-2xl font-semibold text-[#111827]">Choose a package style</h2>
              <p className="mt-2 max-w-xl text-[#6b7280]">Browse a private escape or explore our group tour collection.</p>
            </div>
            <div className="flex w-full gap-3 sm:w-auto" role="group" aria-label="Package type">
              {[
                { value: 'Private', label: 'Private packages' },
                { value: 'Group', label: 'Group packages' },
              ].map(({ value, label }) => (
                <button
                  key={value}
                  type="button"
                  aria-pressed={packageType === value}
                  onClick={() => setPackageType(value)}
                  className={`flex-1 rounded-full border px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#d9a84e] focus:ring-offset-2 sm:flex-none ${
                    packageType === value
                      ? 'border-[#d9a84e] bg-[#d9a84e] text-[#111827]'
                      : 'border-[#e5d7b8] bg-white text-[#374151] hover:border-[#d9a84e] hover:bg-[#fcfaf6]'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {showPackageTypeSelector && packageType === 'Group' ? (
          <div>
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">Travel together</p>
              <h2 className="mt-2 text-3xl font-semibold text-[#111827]">Group Packages</h2>
              <p className="mt-3 max-w-2xl text-lg text-[#6b7280]">Discover group journeys across Pakistan’s mountains, valleys, and coast.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {groupPackages.map((pkg) => (
                <PackageCard key={pkg.title} {...pkg} />
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-16">
            <div>
              <div className="mb-8">
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">Category 01</p>
                <h2 className="mt-2 text-3xl font-semibold text-[#111827]">By Air</h2>
                <p className="mt-3 max-w-2xl text-lg text-[#6b7280]">Fast, scenic, and comfortable mountain escapes with premium air travel connections.</p>
                <p className="mt-2 max-w-2xl text-sm font-medium text-[#b45309]">Note: Flight tickets and dinner are not included in the package price.</p>
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
                <p className="mt-2 max-w-2xl text-sm font-medium text-[#b45309]">Note: Dinner is not included in the package price.</p>
              </div>
              <div className="grid gap-8 lg:grid-cols-3">
                {roadPackages.map((pkg) => (
                  <PackageCard key={pkg.title} {...pkg} />
                ))}
              </div>
            </div>
          </div>
        )}
      </Container>
    </section>
  )
}

export default TourPackages
