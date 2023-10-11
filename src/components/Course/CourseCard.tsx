'use client'

import Image from 'next/image'
import * as Collapsible from '@radix-ui/react-collapsible'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { DropdownProject } from './DropdownProject'
import { CertificateButton } from './CertificateButton'

export interface Course {
  institutionLogo: string
  alt: string
  institutionName: string
  education: string
  trail: string
  duration: string
  certifiedLink?: string
  projectName?: string[]
  projectFigma?: string[]
  projectGitHub?: string[]
  projectDeploy?: string[]
}

interface CourseCardProps {
  course: Course
}

export function CourseCard({ course }: CourseCardProps) {
  const [open, setOpen] = useState(false)

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <div className="relative my-5 flex gap-4 rounded-lg bg-zinc-100 px-5 py-5 shadow-md">
        <Image
          src={`/courses/${course.institutionLogo}`}
          alt={course.alt}
          width={128}
          height={128}
          className="rounded-md shadow-md"
        />

        <div className="col flex flex-col">
          <h2 className="text-2xl font-bold text-zinc-800">
            {course.institutionName}
          </h2>
          <p className="text-lg">
            {course.education} - <strong>{course.trail}</strong>
          </p>
          <span className="text-sm font-medium text-zinc-600">
            {course.duration}
          </span>

          {course.certifiedLink && course.certifiedLink.length > 0 && (
            <CertificateButton certifiedLink={course.certifiedLink} />
          )}
        </div>

        {course.projectName && course.projectName.length > 0 && (
          <Collapsible.Trigger className="absolute right-0 top-0 ml-auto h-full cursor-pointer rounded-r-lg bg-zinc-200 px-1 hover:bg-zinc-300 data-[state=open]:bg-amber-600">
            {open ? (
              <ChevronUp className="h-8 w-8 text-amber-900" />
            ) : (
              <ChevronDown className="h-8 w-8 text-zinc-700" />
            )}
          </Collapsible.Trigger>
        )}
      </div>

      <Collapsible.Content className="animate-open">
        {course.projectName && course.projectName.length > 0 && (
          <div className="grid grid-cols-2">
            {course.projectName.map((project, index) => (
              <DropdownProject
                key={project}
                projectName={project}
                projectFigma={
                  course.projectFigma ? course.projectFigma[index] : ''
                }
                projectGitHub={
                  course.projectGitHub ? course.projectGitHub[index] : ''
                }
                projectDeploy={
                  course.projectDeploy ? course.projectDeploy[index] : ''
                }
              />
            ))}
          </div>
        )}
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
