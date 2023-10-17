import { skills } from '@/config/data/skills'
import { SkillCard } from './SkillCard'

export function MySkills() {
  return (
    <section className="mt-6 space-y-2">
      <h2 className="mb-4 text-xl font-semibold text-zinc-950 lg:text-2xl">
        Minhas Habilidades
      </h2>

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}
