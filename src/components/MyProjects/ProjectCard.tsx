import Image from 'next/image'

export interface ProjectCard {
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
    <div className="flex flex-wrap items-center justify-center gap-4 bg-zinc-100 px-4 py-4 shadow-md">
      <div className="rounded-md border-2 object-cover shadow-md">
        <Image
          src={`/projects/${projectCard.imageProject}`}
          alt=""
          width={500}
          height={500}
        />
      </div>

      <div className="w-120 flex-col text-center">
        <h2 className="text-base font-bold text-zinc-950 lg:text-lg">
          {projectCard.projectName}
        </h2>
        <p className="mb-2 text-sm text-zinc-950 lg:text-base">
          {projectCard.projectDescription}
        </p>

        {projectCard.projectSkills && projectCard.projectSkills.length > 0 && (
          <div className="flex justify-center gap-2">
            {projectCard.projectSkills.map((projectSkill, id) => (
              <span
                key={id}
                className="w-fit rounded-md border-2 border-zinc-600 px-2 py-0.5 text-xs font-medium text-zinc-950 shadow-md lg:text-sm"
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
