import { motion } from 'framer-motion'

function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050505]" role="status" aria-live="polite">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center gap-4"
      >
        <div className="h-14 w-14 rounded-full border border-white/20 border-t-[#d9a84e] animate-spin" />
        <p className="text-sm uppercase tracking-[0.35em] text-white/70">Preparing journey</p>
      </motion.div>
    </div>
  )
}

export default LoadingScreen
