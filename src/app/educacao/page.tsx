import { Course } from '@/components/Course'

export default function Education() {
  return (
    <>
      <div>
        <h3 className="text-2xl font-bold">
          Universidade e Cursos Complementares
        </h3>
        <span className="text-sm font-medium text-zinc-700">
          Minha faculdade e os projetos dos cursos complementares que faço para
          sempre aprender mais e pôr a mão na massa.
        </span>
      </div>

      <Course />
    </>
  )
}
