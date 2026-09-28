import { useState } from 'react'
import { useCharacter } from '../context/CharacterContext'
import { Accessory } from '../types/accessory'
import { Field, Modal, uploadImage, Txt } from './ui'

export default function AccessoryModal({ initial, onClose }: { initial: Accessory; onClose: () => void }) {
  const { save } = useCharacter()
  const [f, setF] = useState(initial)
  const set = (k: keyof Accessory, v: string) => setF({ ...f, [k]: v })
  const submit = () => { if (!f.name.trim()) return; save('accessories', f); onClose() }
  return (
    <Modal title={initial.name ? 'Editar acessório' : 'Novo acessório'} onClose={onClose} onSave={submit}>
      <Txt label="Nome" value={f.name} onChange={v => set('name', v)} />
      <Txt label="Tipo" value={f.type} onChange={v => set('type', v)} />
      <Txt label="Descrição" value={f.description} onChange={v => set('description', v)} area />
      <Txt label="Bônus" value={f.bonus} onChange={v => set('bonus', v)} />
      <Txt label="Resistências (uma por linha, ex.: Frio +50%)" value={f.resistances} onChange={v => set('resistances', v)} area />
      <Field label="Imagem">
        <input type="file" accept="image/*" onChange={e => uploadImage(e.target.files?.[0], s => set('image', s))} />
      </Field>
    </Modal>
  )
}
