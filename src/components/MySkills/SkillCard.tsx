import Image from 'next/image'

export interface Skill {
  name: string
  photo: string
}

interface SkillCardProps {
  skill: Skill
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className="flex h-28 w-24 flex-col items-center justify-center gap-2 rounded-lg bg-zinc-100 px-5 py-5 shadow-md">
      <Image src={`/skills/${skill.photo}`} alt="" width={50} height={50} />
      <span className="text-center text-sm font-semibold text-zinc-700">
        {skill.name}
      </span>
    </div>
  )
}
