import Hero from '../components/Hero/Hero'
import FeaturedDestinations from '../components/FeaturedDestinations/FeaturedDestinations'
import TourPackages from '../components/TourPackages/TourPackages'
import AboutSection from '../components/AboutSection/AboutSection'
import GallerySection from '../components/GallerySection/GallerySection'
import TestimonialsSection from '../components/TestimonialsSection/TestimonialsSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Container from '../components/Container/Container'
import SectionCard from '../components/SectionCard/SectionCard'
import SectionTitle from '../components/SectionTitle/SectionTitle'

function HomePage() {
  return (
    <>
      <Hero />
      <section id="hero-highlights" className="bg-[#f8f5ef] py-20">
        <Container className="space-y-12">
          <SectionTitle
            eyebrow="Signature experiences"
            title="Curated for guests who expect the extraordinary"
            description="Every journey is designed with private access, impeccable pacing, and detail-level service that feels effortless."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Private itineraries',
                description: 'Tailored routes with immersive cultural moments and seamless logistics.',
              },
              {
                title: 'Five-star stays',
                description: 'Handpicked alpine lodges and luxury retreats with panoramic views.',
              },
              {
                title: 'Concierge care',
                description: 'From arrival to departure, every touchpoint is elevated and effortless.',
              },
            ].map((item) => (
              <SectionCard key={item.title} title={item.title} description={item.description} />
            ))}
          </div>
        </Container>
      </section>

      <FeaturedDestinations />
      <TourPackages />
      <AboutSection />
      <GallerySection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}

export default HomePage
