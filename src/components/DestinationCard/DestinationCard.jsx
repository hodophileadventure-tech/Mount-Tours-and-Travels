import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

function DestinationCard({ title, description, image, accent }) {
  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      className="group overflow-hidden rounded-[1.75rem] border border-[#e5d7b8] bg-white shadow-[0_20px_70px_rgba(17,24,39,0.08)]"
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-[#111827]/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f7d98d]">{accent}</p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{title}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-base leading-7 text-[#4b5563]">{description}</p>
        <button className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#111827] transition group-hover:text-[#d9a84e]">
          Explore journey
          <ArrowRight size={16} />
        </button>
      </div>
    </motion.article>
  )
}

export default DestinationCard
