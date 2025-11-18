import { useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function AdminQuickStart() {
  const [status, setStatus] = useState('')

  const seedMatches = async () => {
    setStatus('Seeding matches...')
    const now = new Date()
    const toIso = (d) => new Date(d).toISOString()
    const mk = (home, away, hours) => ({
      competition: 'Premier League',
      season: '2024/25',
      home_team: home,
      away_team: away,
      kickoff: toIso(now.getTime() + hours * 3600 * 1000),
      match_id: `${home}-${away}-${hours}`
    })
    const items = [
      mk('Arsenal', 'Chelsea', 24),
      mk('Liverpool', 'Tottenham', 48),
      mk('Man City', 'Newcastle', 72),
    ]
    for (const it of items) {
      await fetch(`${API}/api/matches`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(it) })
    }
    setStatus('Done. Go to True Odds to see matches.')
  }

  const seedHistory = async () => {
    setStatus('Seeding historical results...')
    const samples = [
      { competition: 'Premier League', season: '2023/24', date: '2024-04-10T12:00:00Z', home_team: 'Arsenal', away_team: 'Chelsea', home_goals: 2, away_goals: 1 },
      { competition: 'Premier League', season: '2023/24', date: '2024-03-22T12:00:00Z', home_team: 'Liverpool', away_team: 'Tottenham', home_goals: 3, away_goals: 2 },
      { competition: 'Premier League', season: '2023/24', date: '2024-03-15T12:00:00Z', home_team: 'Man City', away_team: 'Newcastle', home_goals: 2, away_goals: 0 },
      { competition: 'Premier League', season: '2023/24', date: '2024-03-02T12:00:00Z', home_team: 'Chelsea', away_team: 'Arsenal', home_goals: 0, away_goals: 1 },
      { competition: 'Premier League', season: '2023/24', date: '2024-02-25T12:00:00Z', home_team: 'Tottenham', away_team: 'Liverpool', home_goals: 1, away_goals: 2 },
    ]
    for (const it of samples) {
      await fetch(`${API}/api/historical`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(it) })
    }
    setStatus('Historical data loaded. Train the model next.')
  }

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-white">
      <h2 className="text-xl font-semibold mb-2">Admin quick start</h2>
      <p className="text-slate-300 text-sm mb-4">Seed a few matches and historical results to try the app.</p>
      <div className="flex gap-3">
        <button onClick={seedMatches} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">Seed Matches</button>
        <button onClick={seedHistory} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">Seed Historical</button>
      </div>
      {status && <div className="mt-3 text-sm text-slate-300">{status}</div>}
    </div>
  )
}
