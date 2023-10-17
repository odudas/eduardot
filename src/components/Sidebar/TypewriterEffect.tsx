'use client'

import { Cursor, useTypewriter } from 'react-simple-typewriter'

export function TypewriterEffect() {
  const [text] = useTypewriter({
    words: [
      'Desenvolvedor Front-end',
      'Estudante de TI',
      'Entusiasta de Tecnologia',
    ],
    loop: true,
  })

  return (
    <div>
      <span className="font-medium leading-none text-zinc-700">{text}</span>
      <Cursor cursorBlinking />
    </div>
  )
}
