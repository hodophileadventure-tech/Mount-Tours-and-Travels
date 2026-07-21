import { motion } from 'framer-motion'

function PageHeader({ eyebrow, title, description, align = 'left', compact = false }) {
  const alignment = {
    left: 'mr-auto text-left',
    center: 'mx-auto text-center',
    right: 'ml-auto text-right',
  }[align]

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className={`max-w-3xl ${alignment}`}
    >
      {eyebrow ? (
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-semibold tracking-[-0.02em] text-[#111827] ${compact ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl lg:text-5xl'} leading-tight`}> 
        {title}
      </h2>
      {description ? (
        <p className={`mt-4 text-base leading-8 text-[#4b5563] ${compact ? 'max-w-2xl' : 'max-w-2xl'}`}>
          {description}
        </p>
      ) : null}
    </motion.div>
  )
}

export default PageHeader
