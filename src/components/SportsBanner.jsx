import Logo from './Logo'

export default function SportsBanner() {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-emerald-800/40 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 text-emerald-50">
      <div className="absolute inset-0 opacity-20 pointer-events-none" aria-hidden>
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1200 400">
          <defs>
            <pattern id="pitch" width="60" height="40" patternUnits="userSpaceOnUse" patternTransform="scale(1)">
              <rect width="60" height="40" fill="transparent" />
              <path d="M30 0v40M0 20h60" stroke="#A7F3D0" strokeOpacity="0.25" strokeWidth="1"/>
              <circle cx="30" cy="20" r="6" fill="none" stroke="#A7F3D0" strokeOpacity="0.25"/>
            </pattern>
          </defs>
          <rect width="1200" height="400" fill="url(#pitch)"/>
        </svg>
      </div>

      <div className="relative flex flex-col sm:flex-row items-center sm:items-end gap-6 p-8 sm:p-10">
        <div className="flex items-center gap-4">
          <div className="p-2 rounded-xl bg-emerald-700/40 ring-1 ring-emerald-600/40">
            <Logo size={56} />
          </div>
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">EvenTheField</h1>
            <p className="text-emerald-100/90">AI true odds and a modern bet‑along platform.</p>
          </div>
        </div>
        <div className="sm:ml-auto flex gap-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700/50 ring-1 ring-emerald-500/30">Football</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700/30 ring-1 ring-emerald-500/20">Analytics</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-emerald-700/30 ring-1 ring-emerald-500/20">Community</span>
        </div>
      </div>
    </div>
  )
}
