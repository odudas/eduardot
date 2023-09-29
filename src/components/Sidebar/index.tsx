import { Logo } from './Logo'
import { Profile } from './Profile'
import { SocialMediaItem } from './SocialMediaItem'
import { Github, Linkedin } from 'lucide-react'

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
    </aside>
  )
}
