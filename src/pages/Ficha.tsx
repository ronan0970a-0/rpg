import { useCharacter } from '../context/CharacterContext'
import { Character } from '../types/character'
import { ELEMENTS, META } from '../types/magic'
import CharacterCard from '../components/CharacterCard'
import StatusCard from '../components/StatusCard'
import { Card, Field, Num, Txt, uploadImage } from '../components/ui'

export default function Ficha() {
  const { state: { character: c }, setCharacter } = useCharacter()
  // set: altera um campo do personagem (atualiza Ficha e Status em tempo real)
  const set = (k: keyof Character, v: unknown) => setCharacter({ [k]: v } as Partial<Character>)
  const txt = (label: string, k: keyof Character) => <Txt label={label} value={String(c[k])} onChange={v => set(k, v)} />
  const num = (label: string, k: keyof Character) => <Field label={label}><Num value={Number(c[k])} onChange={n => set(k, n)} /></Field>
  return (
    <div className="space-y-4">
      <CharacterCard />
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {Object.entries(c.stats).map(([k, v]) => <StatusCard key={k} name={k} value={v} />)}
      </div>
      <Card className="space-y-3">
        <h2 className="text-2xl font-bold text-amber-400">Editar ficha</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {txt('Nome', 'name')}{txt('Player', 'player')}{txt('Raça', 'race')}{txt('Classe', 'klass')}
          {num('Nível', 'level')}{num('Idade', 'age')}{txt('Altura (m)', 'height')}{txt('Peso (kg)', 'weight')}
          {num('HP Atual', 'hp')}{num('HP Máximo', 'hpMax')}{num('Sanidade Atual', 'san')}{num('Sanidade Máxima', 'sanMax')}
        </div>
        <div>
          <p className="mb-1 text-sm text-zinc-400">Elementos</p>
          <div className="flex flex-wrap gap-2">
            {ELEMENTS.map(e => {
              const on = c.elements.includes(e)
              return (
                <button key={e} onClick={() => set('elements', on ? c.elements.filter(x => x !== e) : [...c.elements, e])}
                  className={`rounded-full border px-3 py-1 text-sm transition ${on ? META[e].cls : 'border-zinc-700 text-zinc-500'}`}>
                  {META[e].icon} {e}
                </button>
              )
            })}
          </div>
        </div>
        <Field label="Imagem do personagem">
          <input type="file" accept="image/*" onChange={e => uploadImage(e.target.files?.[0], s => set('image', s))} />
        </Field>
      </Card>
    </div>
  )
}
