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
  const [tripDetails, setTripDetails] = useState({
    name: '',
    phone: '',
    departureDate: '',
    returnDate: '',
    travelers: '1',
    packageTitle: groupPackages[0]?.title ?? '',
  })
  const [quotation, setQuotation] = useState(null)
  const selectedGroupPackage = groupPackages.find((pkg) => pkg.title === tripDetails.packageTitle)
  const travelerCount = Number(tripDetails.travelers)
  const pricePerPerson = selectedGroupPackage?.groupPricing?.perPerson ?? 0
  const estimatedTotal = pricePerPerson * travelerCount
  const today = new Date()
  const minimumDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  const handleTripDetailsChange = (event) => {
    const { name, value } = event.target
    setTripDetails((current) => ({ ...current, [name]: value }))
    setQuotation(null)
  }

  const handleQuotationSubmit = (event) => {
    event.preventDefault()
    if (!selectedGroupPackage || tripDetails.returnDate < tripDetails.departureDate) return

    setQuotation({
      ...tripDetails,
      packageTitle: selectedGroupPackage.title,
      duration: selectedGroupPackage.duration,
      travelers: travelerCount,
      pricePerPerson,
      total: estimatedTotal,
    })
  }

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

            <div id="group-quotation" className="mt-12 grid scroll-mt-24 gap-8 rounded-[1.8rem] border border-[#e5d7b8] bg-white p-6 shadow-[0_18px_60px_rgba(17,24,39,0.06)] lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[#d9a84e]">Make your trip</p>
                <h3 className="mt-2 text-2xl font-semibold text-[#111827] sm:text-3xl">Get a tentative group-tour quotation</h3>
                <p className="mt-3 max-w-xl leading-7 text-[#6b7280]">
                  Share your travel details to see an estimated total based on the selected package’s per-person price.
                </p>

                <form onSubmit={handleQuotationSubmit} className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-medium text-[#374151]">
                      Full name
                      <input
                        required
                        autoComplete="name"
                        name="name"
                        value={tripDetails.name}
                        onChange={handleTripDetailsChange}
                        className="mt-2 w-full rounded-xl border border-[#e5d7b8] bg-[#fcfaf6] px-4 py-3 text-[#111827] focus:border-[#d9a84e] focus:outline-none focus:ring-2 focus:ring-[#d9a84e]/30"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="block text-sm font-medium text-[#374151]">
                      Phone number
                      <input
                        required
                        autoComplete="tel"
                        type="tel"
                        name="phone"
                        value={tripDetails.phone}
                        onChange={handleTripDetailsChange}
                        className="mt-2 w-full rounded-xl border border-[#e5d7b8] bg-[#fcfaf6] px-4 py-3 text-[#111827] focus:border-[#d9a84e] focus:outline-none focus:ring-2 focus:ring-[#d9a84e]/30"
                        placeholder="e.g. 03xx xxxxxxx"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-[#374151]">
                    Group package
                    <select
                      name="packageTitle"
                      value={tripDetails.packageTitle}
                      onChange={handleTripDetailsChange}
                      required
                      className="mt-2 w-full rounded-xl border border-[#e5d7b8] bg-[#fcfaf6] px-4 py-3 text-[#111827] focus:border-[#d9a84e] focus:outline-none focus:ring-2 focus:ring-[#d9a84e]/30"
                    >
                      {groupPackages.map((pkg) => (
                        <option key={pkg.title} value={pkg.title}>
                          {pkg.title} — {pkg.duration}
                        </option>
                      ))}
                    </select>
                  </label>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm font-medium text-[#374151]">
                      Preferred departure
                      <input
                        required
                        type="date"
                        min={minimumDate}
                        name="departureDate"
                        value={tripDetails.departureDate}
                        onChange={handleTripDetailsChange}
                        className="mt-2 w-full rounded-xl border border-[#e5d7b8] bg-[#fcfaf6] px-4 py-3 text-[#111827] focus:border-[#d9a84e] focus:outline-none focus:ring-2 focus:ring-[#d9a84e]/30"
                      />
                    </label>
                    <label className="block text-sm font-medium text-[#374151]">
                      Preferred return
                      <input
                        required
                        type="date"
                        min={tripDetails.departureDate || minimumDate}
                        name="returnDate"
                        value={tripDetails.returnDate}
                        onChange={handleTripDetailsChange}
                        className="mt-2 w-full rounded-xl border border-[#e5d7b8] bg-[#fcfaf6] px-4 py-3 text-[#111827] focus:border-[#d9a84e] focus:outline-none focus:ring-2 focus:ring-[#d9a84e]/30"
                      />
                    </label>
                  </div>

                  <label className="block text-sm font-medium text-[#374151]">
                    Number of travelers
                    <input
                      required
                      type="number"
                      min="1"
                      step="1"
                      name="travelers"
                      value={tripDetails.travelers}
                      onChange={handleTripDetailsChange}
                      className="mt-2 w-full rounded-xl border border-[#e5d7b8] bg-[#fcfaf6] px-4 py-3 text-[#111827] focus:border-[#d9a84e] focus:outline-none focus:ring-2 focus:ring-[#d9a84e]/30 sm:max-w-xs"
                    />
                  </label>

                  {tripDetails.departureDate && tripDetails.returnDate && tripDetails.returnDate < tripDetails.departureDate ? (
                    <p role="alert" className="text-sm text-red-700">Return date must be on or after your departure date.</p>
                  ) : null}

                  <div className="rounded-2xl bg-[#f8f5ef] p-5" aria-live="polite">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-[#6b7280]">
                      <span>Per person</span>
                      <span className="font-semibold text-[#111827]">PKR {pricePerPerson.toLocaleString('en-US')}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center justify-between gap-2 text-sm text-[#6b7280]">
                      <span>Estimated total ({travelerCount || 0} {travelerCount === 1 ? 'traveler' : 'travelers'})</span>
                      <span className="text-xl font-bold text-[#111827]">PKR {estimatedTotal.toLocaleString('en-US')}</span>
                    </div>
                    <p className="mt-2 text-xs leading-5 text-[#6b7280]">This is a tentative estimate; final pricing and availability will be confirmed by our team.</p>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-[#d9a84e] px-6 py-3 font-semibold text-[#111827] transition hover:bg-[#c5902f] focus:outline-none focus:ring-2 focus:ring-[#d9a84e] focus:ring-offset-2"
                  >
                    Get tentative quotation
                  </button>
                </form>
              </div>

              {quotation ? (
                <div role="status" aria-live="polite" className="self-start rounded-[1.5rem] bg-[#111827] p-6 text-white sm:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#f7d98d]">Tentative quotation</p>
                  <h4 className="mt-3 text-2xl font-semibold">Thank you, {quotation.name}.</h4>
                  <p className="mt-2 text-sm leading-6 text-white/70">Your estimate is ready to review below. This form displays a quotation only; it does not submit a booking or send your details.</p>
                  <dl className="mt-6 space-y-4 border-t border-white/15 pt-5 text-sm">
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/60">Package</dt>
                      <dd className="text-right font-medium">{quotation.packageTitle}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/60">Travel dates</dt>
                      <dd className="text-right font-medium">{quotation.departureDate} to {quotation.returnDate}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/60">Travelers</dt>
                      <dd className="text-right font-medium">{quotation.travelers}</dd>
                    </div>
                    <div className="flex justify-between gap-4">
                      <dt className="text-white/60">Per person</dt>
                      <dd className="text-right font-medium">PKR {quotation.pricePerPerson.toLocaleString('en-US')}</dd>
                    </div>
                    <div className="flex justify-between gap-4 border-t border-white/15 pt-4 text-base">
                      <dt className="font-semibold">Estimated total</dt>
                      <dd className="text-right font-bold text-[#f7d98d]">PKR {quotation.total.toLocaleString('en-US')}</dd>
                    </div>
                  </dl>
                  <p className="mt-5 text-xs leading-5 text-white/60">This quotation is an estimate, not a confirmed booking. Final price and availability are subject to confirmation.</p>
                </div>
              ) : null}
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
