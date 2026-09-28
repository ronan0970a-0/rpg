// Ícone e cor de cada elemento. Para adicionar um elemento novo, basta incluir uma linha aqui.
export const META: Record<string, { icon: string; cls: string }> = {
  Escuridão: { icon: '🌑', cls: 'border-indigo-400 text-indigo-300' },
  Fogo: { icon: '🔥', cls: 'border-orange-400 text-orange-300' },
  Luz: { icon: '✨', cls: 'border-yellow-300 text-yellow-200' },
  Sangue: { icon: '🩸', cls: 'border-red-500 text-red-400' },
  Selo: { icon: '⛓️', cls: 'border-zinc-300 text-zinc-200' },
  Bardo: { icon: '🎼', cls: 'border-purple-400 text-purple-300' },
}
// Elementos do personagem (Bardo é só ícone de magia)
export const ELEMENTS = ['Fogo', 'Luz', 'Escuridão', 'Sangue', 'Selo']
// Sugestões de tipo de magia (o campo aceita texto livre; adicione novos aqui)
export const MAGIC_TYPES = ['Ataque', 'Defesa', 'Suporte', 'Ilusão', 'Materialização', 'Selo']

export interface Magic {
  id: string; name: string; type: string; element: string; description: string
  range: string; duration: string; effects: string; penalty: string; cooldown: string
}
export const newMagic = (): Magic => ({
  id: crypto.randomUUID(), name: '', type: '', element: 'Fogo', description: '',
  range: '', duration: '', effects: '', penalty: '', cooldown: '',
})
