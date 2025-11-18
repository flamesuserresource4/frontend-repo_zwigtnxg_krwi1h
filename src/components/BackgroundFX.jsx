import { motion } from 'framer-motion'

export default function BackgroundFX() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Stadium night gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-950" />

      {/* Moving aurora blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-40 -left-40 h-[60vmax] w-[60vmax] rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ x: [0, 60, -40, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-40 -right-40 h-[55vmax] w-[55vmax] rounded-full bg-teal-400/10 blur-3xl"
        animate={{ x: [0, -50, 30, 0], y: [0, -20, 40, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Soft spotlight beams */}
      <motion.div
        aria-hidden
        className="absolute left-1/4 top-0 h-[90vmax] w-[25vmax] rotate-12 bg-gradient-to-b from-emerald-400/10 via-emerald-300/0 to-transparent blur-2xl"
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute right-1/4 top-0 h-[90vmax] w-[25vmax] -rotate-12 bg-gradient-to-b from-emerald-300/10 via-emerald-200/0 to-transparent blur-2xl"
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Subtle animated grid like a pitch */}
      <motion.svg
        aria-hidden
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 1200 800"
        preserveAspectRatio="none"
        initial={{ x: 0 }}
        animate={{ x: [0, -40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      >
        <defs>
          <pattern id="moving-grid" width="60" height="40" patternUnits="userSpaceOnUse">
            <rect width="60" height="40" fill="transparent" />
            <path d="M30 0v40M0 20h60" stroke="#A7F3D0" strokeOpacity="0.2" strokeWidth="1" />
            <circle cx="30" cy="20" r="6" fill="none" stroke="#A7F3D0" strokeOpacity="0.2" />
          </pattern>
        </defs>
        <rect width="120%" height="120%" x="-10%" y="-10%" fill="url(#moving-grid)" />
      </motion.svg>

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-emerald-300/40 shadow-[0_0_10px_rgba(16,185,129,0.6)]"
          style={{ left: `${Math.random()*100}%`, top: `${Math.random()*100}%` }}
          animate={{ y: [0, -10, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 6 + Math.random()*6, repeat: Infinity, ease: 'easeInOut', delay: Math.random()*3 }}
        />
      ))}
    </div>
  )
}
