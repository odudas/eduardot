import { Github, Linkedin, MessageCircle } from 'lucide-react'

import { Logo } from './Logo'
import { Profile } from './Profile'
import { SocialMediaItem } from './SocialMediaItem'

export function Sidebar() {
  return (
    <aside className="right-auto flex flex-col gap-6 border-r border-zinc-300 p-4 px-5 py-8">
      <Logo />

      <Profile />

      <nav>
        <SocialMediaItem
          icon={Github}
          socialMediaName="GitHub"
          socialMediaLink="https://github.com/odudas"
        />
        <SocialMediaItem
          icon={Linkedin}
          socialMediaName="Linkedin"
          socialMediaLink="https://www.linkedin.com/in/eduardotdev/"
        />
      </nav>

      <a
        href="https://wa.me/5511919213184"
        target="_blank"
        rel="noreferrer"
        className="group flex items-center justify-center gap-2 rounded-lg border-2 border-zinc-400 px-3 py-2 font-semibold hover:bg-green-100"
      >
        <MessageCircle className="text-zinc-700 group-hover:text-green-500" />
        <span className="text-zinc-700 group-hover:text-zinc-700">
          WhatsApp
        </span>
      </a>
    </aside>
  )
}
