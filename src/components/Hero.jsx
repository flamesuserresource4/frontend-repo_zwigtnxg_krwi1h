import { useState } from 'react'

export default function Hero({ onNavigate }) {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(600px_circle_at_0%_0%,rgba(56,189,248,0.2),transparent_40%),radial-gradient(600px_circle_at_100%_100%,rgba(59,130,246,0.2),transparent_40%)]" />
      <div className="max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow">EvenTheField</h1>
        <p className="mt-6 text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
          AI-powered odds and a social "bet along" experience. Smarter picks, transparent stats, fair payouts.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={() => onNavigate('model')} className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow">
            Get True Odds
          </button>
          <button onClick={() => onNavigate('bet-along')} className="px-6 py-3 rounded-lg bg-slate-800/70 border border-slate-700 text-white font-semibold hover:bg-slate-800">
            Explore Bet-Along
          </button>
        </div>
      </div>
    </header>
  )
}
