import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Star } from 'lucide-react'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

const testimonials = [
  {
    name: 'Ayesha Khan',
    country: 'Islamabad, Pakistan',
    quote:
      'Every detail felt effortless. From private transfers to the mountain villa, the experience was as refined as it was unforgettable.',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Hassan Malik',
    country: 'Lahore, Pakistan',
    quote:
      'The journey felt cinematic and deeply personal. We were guided with elegance, warmth, and extraordinary local insight.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80',
  },
  {
    name: 'Sara Ali',
    country: 'Karachi, Pakistan',
    quote:
      'A seamless luxury escape with breathtaking views and a level of service we’ll remember for years to come.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80',
  },
]

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [])

  const activeTestimonial = testimonials[activeIndex]

  return (
    <section className="bg-[#f8f5ef] py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionTitle
            eyebrow="Testimonials"
            title="What discerning travelers say about their experience"
            description="Luxury is felt in the details, and our guests consistently remember the comfort, care, and confidence of every journey."
            align="left"
          />
        </div>

        <div className="rounded-[2rem] border border-[#e5d7b8] bg-white/80 p-8 shadow-[0_20px_70px_rgba(17,24,39,0.08)] sm:p-10 lg:p-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="grid items-center gap-8 lg:grid-cols-[220px_1fr]"
            >
              <div className="flex justify-center lg:justify-start">
                <img
                  src={activeTestimonial.image}
                  alt={activeTestimonial.name}
                  className="h-52 w-52 rounded-full object-cover ring-4 ring-[#f2e7d0]"
                />
              </div>

              <div>
                <div className="flex gap-1 text-[#d9a84e]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={`${activeTestimonial.name}-${index}`} size={18} fill="currentColor" />
                  ))}
                </div>

                <blockquote className="mt-6 text-2xl leading-10 text-[#111827] sm:text-3xl">
                  “{activeTestimonial.quote}”
                </blockquote>

                <div className="mt-6">
                  <p className="text-lg font-semibold text-[#111827]">{activeTestimonial.name}</p>
                  <p className="text-sm text-[#6b7280]">{activeTestimonial.country}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-[#d9a84e]' : 'w-2.5 bg-[#d8cdb3] hover:bg-[#c5902f]'
                }`}
                aria-label={`Show testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
