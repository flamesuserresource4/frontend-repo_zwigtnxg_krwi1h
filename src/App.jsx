import { useState } from 'react'
import Hero from './components/Hero'
import ModelPanel from './components/ModelPanel'
import BetAlong from './components/BetAlong'
import AdminQuickStart from './components/AdminQuickStart'
import SportsBanner from './components/SportsBanner'

function App() {
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-950 text-emerald-50">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(16,185,129,0.08),transparent_40%),radial-gradient(700px_circle_at_80%_90%,rgba(52,211,153,0.08),transparent_40%)]" />
      <div className="relative">
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-emerald-700/40 ring-1 ring-emerald-600/40">
              <div className="w-4 h-4 rounded-full bg-emerald-400" />
            </div>
            <span className="font-semibold tracking-wide">EvenTheField</span>
          </div>
          <div className="flex gap-3 text-sm">
            <button className={`px-3 py-1 rounded ${view==='home'?"bg-emerald-800/40 ring-1 ring-emerald-700/50":"hover:bg-emerald-800/20"}`} onClick={() => setView('home')}>Home</button>
            <button className={`px-3 py-1 rounded ${view==='model'?"bg-emerald-800/40 ring-1 ring-emerald-700/50":"hover:bg-emerald-800/20"}`} onClick={() => setView('model')}>True Odds</button>
            <button className={`px-3 py-1 rounded ${view==='bet-along'?"bg-emerald-800/40 ring-1 ring-emerald-700/50":"hover:bg-emerald-800/20"}`} onClick={() => setView('bet-along')}>Bet-Along</button>
          </div>
        </nav>

        {view === 'home' && (
          <div className="max-w-6xl mx-auto px-6 space-y-6">
            <SportsBanner />
            <Hero onNavigate={setView} />
          </div>
        )}

        <main className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
          <AdminQuickStart />
          {view === 'model' && <ModelPanel />}
          {view === 'bet-along' && <BetAlong />}

          <section className="bg-emerald-900/30 ring-1 ring-emerald-800/40 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">How it works</h3>
            <ul className="list-disc list-inside text-emerald-100/80 text-sm space-y-1">
              <li>Matches are stored in the database. Seed some with the quick start above.</li>
              <li>Train to compute team ratings from historical results (baseline model).</li>
              <li>Predict to get outright odds and a goal-line estimate.</li>
              <li>Tipsters post bets before kickoff. Followers subscribe and receive notifications.</li>
              <li>Payments split 90% to tipsters, 10% to the platform.</li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
