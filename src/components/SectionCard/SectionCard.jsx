import { motion } from 'framer-motion'

function SectionCard({ title, description, icon }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45 }}
      className="min-h-[220px] rounded-[1.75rem] border border-[#e5d7b8] bg-white/80 p-8 shadow-[0_16px_50px_rgba(17,24,39,0.05)]"
    >
      {icon ? <div className="mb-6 inline-flex rounded-full bg-[#f8f5ef] p-3 text-[#d9a84e] shadow-sm">{icon}</div> : null}
      <h3 className="text-xl font-semibold text-[#111827]">{title}</h3>
      <p className="mt-4 text-base leading-8 text-[#4b5563]">{description}</p>
    </motion.div>
  )
}

export default SectionCard
