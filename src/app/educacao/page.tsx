import { Course } from '@/components/Course'

export default function Educacao() {
  return (
    <>
      <h3 className="text-2xl font-bold">
        Universidade e Cursos Complementares
      </h3>
      <span className="text-zinc-700 text-sm font-medium">
        Minha faculdade e os projetos dos cursos complementares que faço para
        sempre aprender mais e pôr a mão na massa.
      </span>

      <Course />
    </>
  )
}
