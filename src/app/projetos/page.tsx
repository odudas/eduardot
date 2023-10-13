import { MyProjects } from '@/components/MyProjects'

export default function Projects() {
  return (
    <>
      <div className="mb-4">
        <h1 className="text-2xl font-bold">
          Cada projeto é um novo aprendizado!
        </h1>
        <span className="text-sm font-medium text-zinc-500">
          Aqui estão alguns projetos pessoais que desenvolvi para pôr em prática
          os conceitos que aprendi estudando desenvolvimento de aplicações.
        </span>
      </div>

      <MyProjects />
    </>
  )
}
