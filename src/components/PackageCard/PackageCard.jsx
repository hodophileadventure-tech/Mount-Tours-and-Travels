import { motion } from 'framer-motion'
import { ArrowRight, BedDouble, Car, Coffee, Star } from 'lucide-react'

function PackageCard({ title, duration, price, image, rating, hotel, transport, meals, badge }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.01, transition: { duration: 0.25 } }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group overflow-hidden rounded-[1.8rem] border border-[#e5d7b8] bg-white shadow-[0_18px_60px_rgba(17,24,39,0.08)]"
    >
      <div className="relative overflow-hidden">
        <img src={image} alt={title} loading="lazy" className="h-80 w-full object-cover transition duration-500 group-hover:scale-110" />
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

      <div className="p-6">
        <div className="flex items-center gap-2 text-[#d9a84e]">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={`${title}-${index}`} size={16} fill="currentColor" />
          ))}
          <span className="ml-2 text-sm font-medium text-[#4b5563]">{rating}/5</span>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e5d7b8] bg-[#f8f5ef] px-3 py-2 text-sm text-[#374151]">
            <BedDouble size={14} className="text-[#d9a84e]" /> {hotel}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e5d7b8] bg-[#f8f5ef] px-3 py-2 text-sm text-[#374151]">
            <Car size={14} className="text-[#d9a84e]" /> {transport}
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-[#e5d7b8] bg-[#f8f5ef] px-3 py-2 text-sm text-[#374151]">
            <Coffee size={14} className="text-[#d9a84e]" /> {meals}
          </span>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div>
            <p className="text-sm text-[#6b7280]">Starting from</p>
            <p className="text-2xl font-semibold text-[#111827]">{price}</p>
          </div>
          <button className="inline-flex items-center gap-2 rounded-full bg-[#111827] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#d9a84e] hover:text-[#111827]">
            Book Now <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </motion.article>
  )
}

export default PackageCard
