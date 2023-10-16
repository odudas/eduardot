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
        <div className="aspect-square w-20 lg:w-32">
          <Image
            src={`/courses/${course.institutionLogo}`}
            alt={course.alt}
            width={128}
            height={128}
            className="rounded-md shadow-md"
          />
        </div>

        <div className="col flex flex-col">
          <h2 className="text-base font-bold text-zinc-800 lg:text-2xl">
            {course.institutionName}
          </h2>
          <p className="text-sm lg:text-lg">
            {course.education} -{' '}
            <strong className="block lg:inline">{course.trail}</strong>
          </p>
          <span className="mb-2 text-xs font-medium text-zinc-600 lg:mb-0 lg:text-sm">
            {course.duration}
          </span>

          {course.certifiedLink && course.certifiedLink.length > 0 && (
            <CertificateButton certifiedLink={course.certifiedLink} />
          )}
        </div>

        {course.projectName && course.projectName.length > 0 && (
          <Collapsible.Trigger className="absolute right-0 top-0 ml-auto h-full cursor-pointer rounded-r-lg bg-zinc-200 px-1 hover:bg-zinc-300 data-[state=open]:bg-amber-600">
            {open ? (
              <ChevronUp className="h-4 w-4 text-amber-900 lg:h-8 lg:w-8" />
            ) : (
              <ChevronDown className=" h-4 w-4 text-zinc-700 lg:h-8 lg:w-8" />
            )}
          </Collapsible.Trigger>
        )}
      </div>

      <Collapsible.Content className="animate-open">
        {course.projectName && course.projectName.length > 0 && (
          <div className="grid lg:grid-cols-2">
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
