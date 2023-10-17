import { ElementType } from 'react'
import { ExternalLink } from 'lucide-react'

export interface SocialMediaItemProps {
  socialMediaLink: string
  socialMediaName: string
  icon: ElementType
}

export function SocialMediaItem({
  icon: Icon,
  socialMediaName,
  socialMediaLink,
}: SocialMediaItemProps) {
  return (
    <a
      href={socialMediaLink}
      target="_blank"
      rel="noreferrer"
      className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-amber-50"
    >
      <Icon className="h-5 w-5 text-zinc-600" />
      <span className="font-medium text-zinc-950 group-hover:text-amber-700">
        {socialMediaName}
      </span>
      <ExternalLink className="ml-auto h-5 w-5 text-zinc-500 group-hover:text-amber-700" />
    </a>
  )
}
