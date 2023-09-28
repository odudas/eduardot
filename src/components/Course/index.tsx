import { courses } from '@/data/courses'
import { CourseCard } from './CourseCard'

export function Course() {
  return (
    <section>
      {courses.map((course) => (
        <CourseCard key={course.trail} course={course} />
      ))}
    </section>
  )
}
