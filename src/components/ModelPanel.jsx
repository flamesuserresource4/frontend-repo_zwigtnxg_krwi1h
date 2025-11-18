import { useEffect, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function ModelPanel() {
  const [loading, setLoading] = useState(false)
  const [trainInfo, setTrainInfo] = useState(null)
  const [matches, setMatches] = useState([])
  const [matchId, setMatchId] = useState('')
  const [prediction, setPrediction] = useState(null)
  const [error, setError] = useState('')

  const fetchMatches = async () => {
    const res = await fetch(`${API}/api/matches`)
    const data = await res.json()
    setMatches(data)
  }

  const train = async () => {
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/model/train`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({}) })
      const data = await res.json()
      setTrainInfo(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const predict = async () => {
    if (!matchId) return
    setLoading(true)
    setError('')
    try {
      const res = await fetch(`${API}/api/model/predict`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ match_id: matchId }) })
      const data = await res.json()
      setPrediction(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchMatches() }, [])

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">True Odds (Soccer)</h2>
      <p className="text-slate-300 text-sm mb-4">Train a baseline model then get outright and goal-line estimates for a match.</p>

      <div className="flex gap-3 flex-wrap mb-6">
        <button onClick={train} className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded">{loading ? 'Training...' : 'Train Model'}</button>
        <button onClick={fetchMatches} className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded">Refresh Matches</button>
      </div>

      {trainInfo && (
        <div className="text-sm text-slate-300 mb-6">Model trained for {trainInfo.teams} teams.</div>
      )}

      <div className="mb-4">
        <label className="block text-sm mb-1">Select Match</label>
        <select value={matchId} onChange={e => setMatchId(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded p-2">
          <option value="">-- choose --</option>
          {matches.map(m => (
            <option key={m.id} value={m.match_id || m.id}>{m.home_team} vs {m.away_team} ({new Date(m.kickoff).toLocaleString()})</option>
          ))}
        </select>
        <button onClick={predict} className="mt-3 px-4 py-2 bg-emerald-500 hover:bg-emerald-600 rounded">{loading ? 'Predicting...' : 'Get True Odds'}</button>
      </div>

      {error && <div className="text-red-400 text-sm mb-3">{error}</div>}

      {prediction && (
        <div className="mt-6 space-y-2 text-sm">
          <div className="font-semibold">{prediction.match.home_team} vs {prediction.match.away_team}</div>
          <div>Goal line: <span className="font-mono">{prediction.goal_line}</span></div>
          <div>Home xG: {prediction.expected_goals.home} • Away xG: {prediction.expected_goals.away}</div>
          <div className="mt-2">
            <div className="font-semibold">Outright odds (decimal)</div>
            <div className="font-mono">Home {prediction.outright.odds_decimal.home} • Draw {prediction.outright.odds_decimal.draw} • Away {prediction.outright.odds_decimal.away}</div>
          </div>
        </div>
      )}
    </div>
  )
}
