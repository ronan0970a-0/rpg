import { useState } from 'react'
import { Plus } from 'lucide-react'
import { useCharacter } from '../context/CharacterContext'
import { newPassive, Passive } from '../types/passive'
import PassiveCard from '../components/PassiveCard'
import PassiveModal from '../components/PassiveModal'
import { btnCls } from '../components/ui'

export default function Passivas() {
  const { state } = useCharacter()
  const [editing, setEditing] = useState<Passive | null>(null)
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-amber-400">🩶 Passivas</h2>
        <button className={btnCls} onClick={() => setEditing(newPassive())}><Plus size={16} /> Adicionar Passiva</button>
      </div>
      {state.passives.length === 0 && <p className="text-zinc-500">Nenhuma passiva ainda. Clique em "Adicionar Passiva".</p>}
      <div className="grid gap-3 md:grid-cols-2">{state.passives.map(p => <PassiveCard key={p.id} p={p} onEdit={() => setEditing(p)} />)}</div>
      {editing && <PassiveModal initial={editing} onClose={() => setEditing(null)} />}
    </div>
  )
}
