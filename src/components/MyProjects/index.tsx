import { projects } from '@/config/data/projects'
import { ProjectCard } from './ProjectCard'

export function MyProjects() {
  return (
    <section className="mt-6 space-y-2">
      <div className="flex flex-col justify-end gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} projectCard={project} />
        ))}
      </div>
    </section>
  )
}
