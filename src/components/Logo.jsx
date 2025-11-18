import { motion } from 'framer-motion'

export default function Logo({ size = 40, animated = true }) {
  const s = typeof size === 'number' ? `${size}px` : size
  return (
    <motion.svg
      width={s}
      height={s}
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="EvenTheField logo"
      initial={animated ? { rotate: -6, scale: 0.9 } : false}
      animate={animated ? { rotate: 0, scale: 1 } : undefined}
      transition={{ type: 'spring', stiffness: 120, damping: 10 }}
    >
      <defs>
        <linearGradient id="emeraldEdge" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#22C55E"/>
        </linearGradient>
        <radialGradient id="coreGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#A7F3D0" stopOpacity="0.9"/>
          <stop offset="60%" stopColor="#34D399" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#059669" stopOpacity="0"/>
        </radialGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000" floodOpacity="0.35"/>
        </filter>
      </defs>

      <g filter="url(#softShadow)">
        {/* Bold shield with notch */}
        <motion.path
          d="M64 8l42 14v34c0 28.3-18.2 53.9-42 64C40.2 110.9 22 86.3 22 56V22L64 8z"
          fill="url(#emeraldEdge)"
          stroke="#022c22"
          strokeWidth="3"
          initial={animated ? { pathLength: 0 } : false}
          animate={animated ? { pathLength: 1 } : undefined}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        />

        {/* Dynamic diagonal stripes */}
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M${26 + i*8} ${30 + i*8} L${102 - i*6} ${30 + i*8}`}
            stroke="#A7F3D0"
            strokeOpacity={0.2 + i*0.1}
            strokeWidth={2 + (i===0 ? 1 : 0)}
            strokeLinecap="round"
            initial={animated ? { opacity: 0, x: -10 } : false}
            animate={animated ? { opacity: 1, x: 0 } : undefined}
            transition={{ delay: 0.1 * i, duration: 0.6 }}
          />
        ))}

        {/* Center circle with pulse */}
        <motion.circle
          cx="64"
          cy="52"
          r="18"
          fill="url(#coreGlow)"
          stroke="#065F46"
          strokeWidth="3"
          initial={animated ? { scale: 0.8, opacity: 0 } : false}
          animate={animated ? { scale: [1, 1.06, 1], opacity: 1 } : undefined}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Ball seams */}
        <path d="M64 36c6 0 6 8 12 8s6-8 12-8" stroke="#ECFDF5" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <path d="M52 58c6 0 6-8 12-8s6 8 12 8" stroke="#ECFDF5" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>

        {/* Base curve */}
        <path d="M48 86c10 6 22 6 32 0" stroke="#065F46" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </g>
    </motion.svg>
  )
}
