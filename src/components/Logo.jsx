export default function Logo({ size = 40 }) {
  const s = typeof size === 'number' ? `${size}px` : size
  return (
    <svg width={s} height={s} viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="EvenTheField logo">
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#10B981"/>
          <stop offset="100%" stopColor="#22C55E"/>
        </linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#34D399"/>
          <stop offset="100%" stopColor="#16A34A"/>
        </linearGradient>
        <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000" floodOpacity="0.35"/>
        </filter>
      </defs>
      <g filter="url(#shadow)">
        <path d="M64 8l42 14v34c0 28.3-18.2 53.9-42 64C40.2 110.9 22 86.3 22 56V22L64 8z" fill="url(#g1)" stroke="#064E3B" strokeWidth="3"/>
        <path d="M30 30h68" stroke="#A7F3D0" strokeOpacity="0.5" strokeWidth="3" strokeLinecap="round"/>
        <path d="M26 46h76" stroke="#A7F3D0" strokeOpacity="0.35" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 62h80" stroke="#A7F3D0" strokeOpacity="0.25" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="64" cy="52" r="18" fill="url(#g2)" stroke="#065F46" strokeWidth="3"/>
        <path d="M64 36c6 0 6 8 12 8s6-8 12-8" stroke="#ECFDF5" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <path d="M52 58c6 0 6-8 12-8s6 8 12 8" stroke="#ECFDF5" strokeWidth="2" strokeLinecap="round" opacity="0.7"/>
        <path d="M48 86c10 6 22 6 32 0" stroke="#065F46" strokeWidth="3" strokeLinecap="round" opacity="0.5"/>
      </g>
    </svg>
  )
}
