import Image from 'next/image'

export interface Course {
  institutionLogo: string
  alt: string
  institutionName: string
  education: string
  trail: string
  duration: string
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="my-5 flex gap-4 rounded-lg bg-zinc-100 px-5 py-5 shadow-md">
      <Image
        src={`/courses/${course.institutionLogo}`}
        alt={course.alt}
        width={128}
        height={128}
        className="rounded-md shadow-md"
      />

      <div className="col flex flex-col">
        <h2 className="text-2xl font-semibold text-zinc-800">
          {course.institutionName}
        </h2>
        <p className="text-lg">
          {course.education} - <strong>{course.trail}</strong>
        </p>
        <span className="text-sm font-medium text-zinc-600">
          {course.duration}
        </span>
      </div>
    </div>
  )
}
