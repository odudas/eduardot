import { MyProjects } from '@/components/MyProjects'

export default function Projects() {
  return (
    <>
      <h1 className="text-xl font-bold text-zinc-950 lg:text-2xl">
        Cada projeto é um novo aprendizado!
      </h1>
      <span className="text-sm font-medium text-zinc-700">
        Aqui estão alguns projetos pessoais que desenvolvi para pôr em prática
        os conceitos que aprendi estudando desenvolvimento de aplicações.
      </span>

      <MyProjects />
    </>
  )
}
