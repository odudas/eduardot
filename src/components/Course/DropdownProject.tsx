import { Figma, Github, Layout } from 'lucide-react'

export interface DropdownProjectProps {
  projectName: string
  projectFigma: string
  projectGitHub: string
  projectDeploy: string
}

export function DropdownProject({
  projectName,
  projectFigma,
  projectGitHub,
  projectDeploy,
}: DropdownProjectProps) {
  return (
    <div className="mt-4 border-t border-gray-300 pt-2">
      <h3 className="mb-5 mt-2 text-lg font-semibold text-zinc-950">
        {projectName}
      </h3>

      <ul className="space-y-2">
        {projectFigma && projectFigma.length > 0 && (
          <li className="group flex items-center gap-2">
            <Figma className="h-5 w-5 group-hover:text-amber-700" />
            <span className="text-sm text-zinc-950 lg:text-base">
              <a
                href={projectFigma}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-500 group-hover:text-amber-700 lg:text-base"
              >
                Clique aqui{' '}
              </a>
              para acessar o design deste projeto.
            </span>
          </li>
        )}

        <li className="group flex items-center gap-2">
          <Github className="h-5 w-5 group-hover:text-amber-700" />
          <span className="text-sm text-zinc-950 lg:text-base">
            <a
              href={projectGitHub}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-blue-500 group-hover:text-amber-700 lg:text-base"
            >
              Clique aqui{' '}
            </a>
            para acessar o código deste projeto.
          </span>
        </li>

        {projectDeploy && projectDeploy.length > 0 && (
          <li className="group flex items-center gap-2">
            <Layout className="h-5 w-5 group-hover:text-amber-700" />
            <span className="text-sm text-zinc-950 lg:text-base">
              <a
                href={projectDeploy}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-blue-500 group-hover:text-amber-700 lg:text-base"
              >
                Clique aqui{' '}
              </a>
              para acessar o deploy deste projeto.
            </span>
          </li>
        )}
      </ul>
    </div>
  )
}
