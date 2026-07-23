import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Compass, Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Container from '../Container/Container'

function Hero() {
  const [offsetY, setOffsetY] = useState(0)

  useEffect(() => {
    const onScroll = () => setOffsetY(window.scrollY * 0.18)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToHighlights = () => {
    document.getElementById('hero-highlights')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#050505] text-white">
      <motion.video
        animate={{ y: offsetY, scale: 1.04 }}
        transition={{ type: 'tween', duration: 0.4 }}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=80"
      >
        <source src="https://videos.pexels.com/video-files/856999/856999-hd_1280_720_25fps.mp4" type="video/mp4" />
      </motion.video>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(217,168,78,0.22),_transparent_30%),linear-gradient(90deg,rgba(5,5,5,0.78)_0%,rgba(5,5,5,0.55)_60%,rgba(5,5,5,0.78)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,5,0.35)_0%,rgba(5,5,5,0.55)_100%)]" />

      <div className="relative z-10 flex min-h-screen flex-col justify-center">
        <Container className="pb-20 pt-28 sm:pt-32 lg:pt-36">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Where alpine grandeur meets effortless luxury.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80 sm:text-xl">
              Private mountain journeys, elevated service, and timeless itineraries across the world’s most breathtaking peaks.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button icon className="bg-[#d9a84e] text-[#111827] hover:bg-[#c5902f]">
                Explore Tours
              </Button>
              <Button variant="secondary" className="border-white/30 bg-white/10 text-white hover:bg-white/20">
                View Itineraries
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: 'easeOut' }}
            className="mt-16 flex flex-wrap items-center gap-6 border-t border-white/20 pt-8 text-sm text-white/75"
          >
            <div className="flex items-center gap-2">
              <Compass size={16} className="text-[#d9a84e]" />
              <span>Private guides</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} className="text-[#d9a84e]" />
              <span>Five-star mountain stays</span>
            </div>
          </motion.div>
        </Container>
      </div>

      <button
        type="button"
        onClick={scrollToHighlights}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center text-white/70 transition hover:text-white"
      >
        <span className="mb-2 text-[0.65rem] uppercase tracking-[0.35em]">Discover more</span>
        <ChevronDown className="animate-bounce" size={22} />
      </button>
    </section>
  )
}

export default Hero
