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
    <div className="flex w-fit flex-col items-center justify-center gap-4 bg-zinc-100 px-4 py-4 shadow-md md:flex-row md:gap-10">
      <Image
        src={`/projects/${projectCard.imageProject}`}
        alt=""
        width={500}
        height={500}
        className="rounded-md border-2 object-cover shadow-md"
      />

      <div className="flex-col text-center">
        <h2 className="text-lg font-bold text-zinc-700">
          {projectCard.projectName}
        </h2>
        <p className="mb-2 text-zinc-700">{projectCard.projectDescription}</p>
        {projectCard.projectSkills && projectCard.projectSkills.length > 0 && (
          <div className="flex justify-center gap-2">
            {projectCard.projectSkills.map((projectSkill, id) => (
              <span
                key={id}
                className="w-fit rounded-md border-2 border-zinc-500 px-2 py-0.5 text-sm font-medium"
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
