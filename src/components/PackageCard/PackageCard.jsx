import { useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, BedDouble, Car, Coffee, Star } from 'lucide-react'
import PackageItineraryModal from '../PackageItineraryModal/PackageItineraryModal'

function PackageCard({ title, duration, price, image, rating, hotel, transport, meals, badge, itinerary, groupPricing }) {
  const [isItineraryOpen, setIsItineraryOpen] = useState(false)
  const closeItinerary = useCallback(() => setIsItineraryOpen(false), [])
  const details = [
    hotel && { label: hotel, icon: <BedDouble size={14} className="text-[#d9a84e]" /> },
    transport && { label: transport, icon: <Car size={14} className="text-[#d9a84e]" /> },
    meals && { label: meals, icon: <Coffee size={14} className="text-[#d9a84e]" /> },
  ].filter(Boolean)
  const hasStartingPrice = price && price !== 'Contact for pricing'
  const displayPrice = hasStartingPrice ? price : 'Price on request'

  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.25 } }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group flex flex-col overflow-hidden rounded-[1.8rem] border border-[#e5d7b8] bg-white shadow-[0_18px_60px_rgba(17,24,39,0.08)]"
    >
      <div className="relative overflow-hidden">
        {image ? (
          <img src={image} alt={title} loading="lazy" className="h-80 w-full object-cover transition duration-500 group-hover:scale-110" />
        ) : (
          <div aria-hidden="true" className="h-80 w-full bg-[radial-gradient(ellipse_at_top_right,_#c9b17c,_transparent_55%),linear-gradient(135deg,_#173b43,_#263447_55%,_#111827)] transition duration-500 group-hover:scale-110" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-[#111827]/20 to-transparent" />
        {badge ? (
          <div className="absolute left-4 top-4 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
            {badge}
          </div>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="rounded-full border border-white/25 bg-white/10 px-3 py-2 text-sm font-medium text-white backdrop-blur-md">
            {duration}
          </div>
          <div className="mt-4 rounded-[1.2rem] border border-white/20 bg-white/10 p-4 backdrop-blur-xl">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f7d98d]">Signature Escape</p>
            <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        {rating ? (
          <div className="flex items-center gap-2 text-[#d9a84e]">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={`${title}-${index}`} size={16} fill="currentColor" />
            ))}
            <span className="ml-2 text-sm font-medium text-[#4b5563]">{rating}/5</span>
          </div>
        ) : null}

        {details.length > 0 ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {details.map(({ label, icon }) => (
              <span key={label} className="inline-flex items-center gap-2 rounded-full border border-[#e5d7b8] bg-[#f8f5ef] px-3 py-2 text-sm text-[#374151]">
                {icon} {label}
              </span>
            ))}
          </div>
        ) : null}

        <div className="mt-auto flex flex-wrap items-end justify-between gap-3 pt-6">
          <div>
            {groupPricing ? (
              <div className="space-y-1">
                <p className="text-sm text-[#6b7280]">
                  Per person <span className="ml-1 font-semibold text-[#111827]">PKR {groupPricing.perPerson.toLocaleString('en-US')}</span>
                </p>
                <p className="text-sm text-[#6b7280]">
                  Per couple <span className="ml-1 font-semibold text-[#111827]">PKR {groupPricing.perCouple.toLocaleString('en-US')}</span>
                </p>
              </div>
            ) : (
              <>
                <p className="text-sm text-[#6b7280]">{hasStartingPrice ? 'Starting from' : 'Package pricing'}</p>
                <p className="text-xl font-semibold text-[#111827] sm:text-2xl">{displayPrice}</p>
              </>
            )}
          </div>
          <button
            type="button"
            onClick={itinerary ? () => setIsItineraryOpen(true) : undefined}
            className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#d9a84e] hover:text-[#111827]"
          >
            {itinerary ? 'View itinerary' : 'Book Now'} <ArrowRight size={16} />
          </button>
        </div>
      </div>
      {isItineraryOpen && itinerary ? (
        <PackageItineraryModal
          title={title}
          duration={duration}
          itinerary={itinerary}
          onClose={closeItinerary}
        />
      ) : null}
    </motion.article>
  )
}

export default PackageCard
