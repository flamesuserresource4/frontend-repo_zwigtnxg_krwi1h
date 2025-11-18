import { useEffect, useMemo, useState } from 'react'

const API = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function BetAlong() {
  const [tipsters, setTipsters] = useState([])
  const [followers, setFollowers] = useState([])
  const [subs, setSubs] = useState([])
  const [bets, setBets] = useState([])

  const [tName, setTName] = useState('')
  const [fEmail, setFEmail] = useState('')
  const [selectedTipster, setSelectedTipster] = useState('')
  const [selectedFollower, setSelectedFollower] = useState('')

  const refresh = async () => {
    const [ts, fs] = await Promise.all([
      fetch(`${API}/api/tipsters`).then(r => r.json()),
      fetch(`${API}/api/followers`).then(r => r.json()).catch(() => [])
    ])
    setTipsters(ts)
    setFollowers(fs || [])
  }

  const createTipster = async () => {
    if (!tName) return
    await fetch(`${API}/api/tipsters`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ display_name: tName }) })
    setTName('')
    refresh()
  }

  const createFollower = async () => {
    if (!fEmail) return
    await fetch(`${API}/api/followers`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: fEmail }) })
    setFEmail('')
    refresh()
  }

  const subscribe = async () => {
    if (!selectedTipster || !selectedFollower) return
    await fetch(`${API}/api/subscribe`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tipster_id: selectedTipster, follower_id: selectedFollower, price_cents: 1000 }) })
    loadSubs()
  }

  const loadSubs = async () => {
    if (!selectedTipster) return
    const data = await fetch(`${API}/api/tipsters/${selectedTipster}/followers`).then(r => r.json())
    setSubs(data)
  }

  const postSampleBet = async () => {
    if (!selectedTipster) return
    // find first match
    const matches = await fetch(`${API}/api/matches`).then(r => r.json())
    if (!matches.length) return alert('No matches found to post bet on.')
    const m = matches[0]
    await fetch(`${API}/api/bets`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ tipster_id: selectedTipster, match_id: m.match_id || m.id, market: 'outright', selection: 'home', odds: 1.8, stake: 1 }) })
    loadBets()
  }

  const loadBets = async () => {
    const data = await fetch(`${API}/api/bets?tipster_id=${selectedTipster}`).then(r => r.json()).catch(() => [])
    setBets(data)
  }

  useEffect(() => { refresh() }, [])
  useEffect(() => { loadSubs(); loadBets() }, [selectedTipster])

  return (
    <div className="bg-slate-800/60 border border-slate-700 rounded-xl p-6 text-white">
      <h2 className="text-2xl font-bold mb-4">Bet-Along</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold mb-2">Tipsters</h3>
          <div className="flex gap-2 mb-3">
            <input value={tName} onChange={e => setTName(e.target.value)} placeholder="New tipster name" className="flex-1 bg-slate-900 border border-slate-700 rounded p-2" />
            <button onClick={createTipster} className="px-3 py-2 bg-blue-500 rounded">Add</button>
          </div>
          <select value={selectedTipster} onChange={e => setSelectedTipster(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded p-2">
            <option value="">-- choose tipster --</option>
            {tipsters.map(t => <option key={t.id} value={t.id}>{t.display_name}</option>)}
          </select>
          <div className="mt-4 text-sm text-slate-300">Active followers: {subs.length}</div>
          <button onClick={postSampleBet} className="mt-3 px-3 py-2 bg-emerald-500 rounded">Post Sample Bet</button>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Followers</h3>
          <div className="flex gap-2 mb-3">
            <input value={fEmail} onChange={e => setFEmail(e.target.value)} placeholder="email@example.com" className="flex-1 bg-slate-900 border border-slate-700 rounded p-2" />
            <button onClick={createFollower} className="px-3 py-2 bg-blue-500 rounded">Add</button>
          </div>
          <select value={selectedFollower} onChange={e => setSelectedFollower(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded p-2">
            <option value="">-- choose follower --</option>
            {followers.map(f => <option key={f.id} value={f.id}>{f.email}</option>)}
          </select>
          <button onClick={subscribe} className="mt-3 px-3 py-2 bg-purple-500 rounded">Subscribe</button>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="font-semibold mb-2">Recent Bets</h3>
        <div className="text-sm text-slate-300">This is a simplified view for v1.</div>
      </div>
    </div>
  )
}
