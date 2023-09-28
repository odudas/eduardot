import { skills } from '@/config/data/skills'
import { SkillCard } from './SkillCard'

export function MySkills() {
  return (
    <section className="mt-6 space-y-2">
      <h2 className="mb-4 text-2xl font-semibold">Minhas Habilidades</h2>

      <div className="flex flex-row-reverse justify-end gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </section>
  )
}
