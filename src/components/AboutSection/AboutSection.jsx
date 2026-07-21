import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Container from '../Container/Container'

const stats = [
  { value: 5000, suffix: '+', label: 'Happy Travelers' },
  { value: 150, suffix: '+', label: 'Luxury Tours' },
  { value: 10, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Customer Satisfaction' },
]

function AnimatedCounter({ value, suffix, label }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (!isInView) return

    let start = 0
    const duration = 1400
    const startTime = performance.now()

    const tick = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      const next = Math.round(value * eased)
      setDisplayValue(next)

      if (progress < 1) {
        requestAnimationFrame(tick)
      }
    }

    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <div ref={ref} className="rounded-[1.2rem] border border-[#e5d7b8] bg-white/80 p-5 shadow-sm">
      <p className="text-3xl font-semibold text-[#111827]">
        {displayValue}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-[#6b7280]">{label}</p>
    </div>
  )
}

function AboutSection() {
  return (
    <section className="bg-[#f8f5ef] py-24">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="overflow-hidden rounded-[2rem] border border-[#e5d7b8] shadow-[0_20px_70px_rgba(17,24,39,0.08)]"
          >
            <img
              src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80"
              alt="Mountain luxury landscape"
              className="h-[520px] w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#d9a84e]">About us</p>
            <h2 className="text-3xl font-semibold leading-tight text-[#111827] sm:text-4xl">
              Crafted for travelers who seek beauty, ease, and meaning.
            </h2>
            <p className="text-lg leading-8 text-[#4b5563]">
              Mount Travel & Tours was founded to create journeys that feel both effortless and unforgettable. We blend local insight, premium hospitality, and a deep respect for the landscapes we explore.
            </p>
            <p className="text-lg leading-8 text-[#4b5563]">
              From remote mountain lodges to private guides and seamless logistics, every itinerary is designed to reveal the extraordinary while remaining deeply comfortable.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <AnimatedCounter key={stat.label} {...stat} />
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}

export default AboutSection
