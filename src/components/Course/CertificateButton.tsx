import { ExternalLink } from 'lucide-react'

export interface CertificateButtonProps {
  certifiedLink: string
}

export function CertificateButton({ certifiedLink }: CertificateButtonProps) {
  return (
    <a
      href={certifiedLink}
      target="_blank"
      rel="noreferrer"
      className="group mt-auto flex w-fit items-center gap-2 rounded-lg border-2 border-zinc-300 px-2 py-1 text-xs font-semibold text-blue-500 hover:border-zinc-500 hover:text-amber-700 lg:text-base"
    >
      Exibir certificado
      <span className="text-zinc-500 group-hover:text-zinc-700">
        <ExternalLink className="h-4 w-4 lg:h-5 lg:w-5" />
      </span>
    </a>
  )
}
