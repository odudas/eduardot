import Image from 'next/image'

export interface ProjectCard {
  id: number
  imageProject: string
  projectName: string
  projectDescription: string
  projectSkills: string[]
}

interface ProjectCardProps {
  projectCard: ProjectCard
}

export function ProjectCard({ projectCard }: ProjectCardProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={`/projects/${projectCard.imageProject}`}
        alt=""
        width={500}
        height={500}
        className="rounded-md border-2"
      />

      <div className="flex flex-col text-center">
        <h2 className="text-lg font-bold text-zinc-700">
          {projectCard.projectName}
        </h2>
        <p className="mb-2 text-zinc-700">{projectCard.projectDescription}</p>
        {projectCard.projectSkills && projectCard.projectSkills.length > 0 && (
          <div className="flex justify-center gap-2">
            {projectCard.projectSkills.map((projectSkill, id) => (
              <span
                key={id}
                className="w-fit rounded-md border-2 border-zinc-500 px-3 py-1 text-sm font-semibold"
              >
                {projectSkill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
