import { useState } from 'react'
import Hero from './components/Hero'
import ModelPanel from './components/ModelPanel'
import BetAlong from './components/BetAlong'
import AdminQuickStart from './components/AdminQuickStart'

function App() {
  const [view, setView] = useState('home')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_10%,rgba(59,130,246,0.08),transparent_40%),radial-gradient(700px_circle_at_80%_90%,rgba(56,189,248,0.08),transparent_40%)]" />
      <div className="relative">
        <nav className="flex items-center justify-between max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500" />
            <span className="font-semibold">EvenTheField</span>
          </div>
          <div className="flex gap-3 text-sm">
            <button className={`px-3 py-1 rounded ${view==='home'?'bg-slate-800/70 border border-slate-700':''}`} onClick={() => setView('home')}>Home</button>
            <button className={`px-3 py-1 rounded ${view==='model'?'bg-slate-800/70 border border-slate-700':''}`} onClick={() => setView('model')}>True Odds</button>
            <button className={`px-3 py-1 rounded ${view==='bet-along'?'bg-slate-800/70 border border-slate-700':''}`} onClick={() => setView('bet-along')}>Bet-Along</button>
          </div>
        </nav>

        {view === 'home' && <Hero onNavigate={setView} />}

        <main className="max-w-6xl mx-auto px-6 pb-20 space-y-8">
          <AdminQuickStart />
          {view === 'model' && <ModelPanel />}
          {view === 'bet-along' && <BetAlong />}

          <section className="bg-slate-800/60 border border-slate-700 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">How it works</h3>
            <ul className="list-disc list-inside text-slate-300 text-sm space-y-1">
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
