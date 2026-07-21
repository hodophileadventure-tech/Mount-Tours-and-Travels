import { motion } from 'framer-motion'
import Container from '../Container/Container'
import SectionTitle from '../SectionTitle/SectionTitle'

const images = [
  {
    src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80',
    title: 'Alpine Dawn',
  },
  {
    src: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=900&q=80',
    title: 'Valley Serenity',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=80',
    title: 'Forest Hideaway',
    className: '',
  },
  {
    src: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
    title: 'Summit Light',
    className: 'md:col-span-2',
  },
  {
    src: 'https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=900&q=80',
    title: 'Golden Hour',
    className: '',
  },
]

function GallerySection() {
  return (
    <section className="bg-[#fcfaf6] py-24">
      <Container>
        <div className="mb-12 max-w-3xl">
          <SectionTitle
            eyebrow="Gallery"
            title="A visual journey through some of the world’s most unforgettable mountain landscapes"
            description="Every frame captures the calm, grandeur, and cinematic beauty that define our private travel experiences."
            align="left"
          />
        </div>

        <div className="columns-1 gap-6 sm:columns-2 xl:columns-3">
          {images.map((image, index) => (
            <motion.figure
              key={image.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative mb-6 overflow-hidden break-inside-avoid rounded-[1.6rem] border border-[#e5d7b8] shadow-[0_18px_60px_rgba(17,24,39,0.08)]"
            >
              <img
                src={image.src}
                alt={image.title}
                loading="lazy"
                className="h-auto w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-[#111827]/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-semibold text-white">{image.title}</h3>
              </div>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default GallerySection
