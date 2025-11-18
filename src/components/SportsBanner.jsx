import { motion } from 'framer-motion'
import Logo from './Logo'

export default function SportsBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-2xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-emerald-50"
    >
      {/* Animated pitch pattern */}
      <motion.div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden
        initial={{ backgroundPositionX: 0 }}
        animate={{ backgroundPositionX: ['0%', '100%'] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{ backgroundImage: `radial-gradient(circle at center, rgba(167,243,208,0.15) 1px, transparent 1px)`, backgroundSize: '60px 40px' }}
      />

      <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 p-8 sm:p-10">
        <div className="flex items-center gap-4">
          <motion.div className="p-2 rounded-xl bg-emerald-700/40 ring-1 ring-emerald-600/40"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Logo size={56} />
          </motion.div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">EvenTheField</h1>
            <p className="text-emerald-100/90">AI true odds and a modern bet‑along platform.</p>
          </div>
        </div>
        <div className="sm:ml-auto flex gap-3">
          {['Football', 'Analytics', 'Community'].map((t, i) => (
            <motion.span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700/50 ring-1 ring-emerald-500/30"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.4 }}
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
