import { motion } from 'framer-motion'
import { ExternalLink, Star } from 'lucide-react'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

const googleReviewsUrl =
  'https://www.google.com/maps/place/Mount+Travel+and+Tours/@35.2853654,75.6389534,17z/data=!4m8!3m7!1s0x38e463e8276752f9:0xbef43b84ddb4ffdf!8m2!3d35.2853654!4d75.6389534!9m1!1b1!16s%2Fg%2F11w9t8bxvs!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D'

const googleReviews = [
  {
    name: 'Huzaifa Mandviwala',
    date: '2 months ago',
    quote:
      'Our Skardu trip was made truly memorable by our guide, Emran Nadeem. He handled everything from stays to sightseeing with great care and professionalism, making the whole journey smooth and stress free.',
  },
  {
    name: 'Masood Abbas Khan',
    date: '3 weeks ago',
    quote:
      'Our tour was excellent and very enjoyable. Imran is highly professional, knowledgeable, and experienced in tourism. His hospitality was outstanding, and he made the entire trip comfortable and memorable.',
  },
  {
    name: 'Hasham Shabbir',
    date: 'a month ago',
    quote:
      'We booked Mount Travel and Tours for Skardu. Imran, the CEO, himself accompanied us. We enjoyed his guidance, he knows the areas very well, arrived on time every day, and is a trustworthy company to book.',
  },
  {
    name: 'Sohail Ashraf',
    date: 'a month ago',
    quote:
      'We recently traveled to Skardu with Mount Travel and Tours, and the entire experience was wonderful. The team made the trip comfortable, organized, and memorable from start to finish.',
  },
  {
    name: 'Insiyah Abbas',
    date: 'a week ago',
    quote:
      'Thank you for arranging a wonderful trip for us. The owner Emraan bhai is a local there, a gem of a person and highly competent too. Everything was well arranged, and the package was reasonable.',
  },
  {
    name: 'Misha',
    date: '10 months ago',
    quote:
      'We had an amazing experience with Mount Travel and Tours on our recent trip to Skardu. Imran Nadeem was super cooperative, and the itinerary felt genuinely customized.',
  },
]

function ReviewStars() {
  return (
    <div className="flex gap-1 text-[#d9a84e]" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} size={16} fill="currentColor" aria-hidden="true" />
      ))}
    </div>
  )
}

function TestimonialsSection() {
  return (
    <section className="bg-[#f8f5ef] py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionTitle
            eyebrow="Google reviews"
            title="Straight from travelers who explored with us"
            description="A selection of recent guest reviews from Mount Travel and Tours on Google Maps."
            align="left"
          />
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {googleReviews.map((review, index) => (
            <motion.article
              key={review.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="flex min-h-64 flex-col rounded-2xl border border-[#e5d7b8] bg-white p-6 shadow-[0_12px_35px_rgba(17,24,39,0.06)]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#111827]">{review.name}</p>
                  <p className="mt-1 text-xs text-[#6b7280]">{review.date} on Google</p>
                </div>
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f2e7d0] text-sm font-bold text-[#b27d1f]">
                  {review.name.charAt(0)}
                </div>
              </div>

              <ReviewStars />

              <blockquote className="mt-4 flex-1 text-sm leading-7 text-[#4b5563]">“{review.quote}”</blockquote>
            </motion.article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[#d9a84e] px-5 py-2.5 text-sm font-semibold text-[#b27d1f] transition-colors hover:bg-[#d9a84e]/10 focus:outline-none focus:ring-2 focus:ring-[#d9a84e] focus:ring-offset-2"
          >
            See all Google reviews
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </Container>
    </section>
  )
}

export default TestimonialsSection
