'use client'

import * as Collapsible from '@radix-ui/react-collapsible'

import { Github, Linkedin, Menu, MessageCircle } from 'lucide-react'

import { Logo } from './Logo'
import { Profile } from './Profile'
import { SocialMediaItem } from './SocialMediaItem'

export function Sidebar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 py-2 data-[state=open]:bottom-0 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger className="rounded-md px-2 py-2 text-sm font-semibold text-zinc-500 outline-none hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 active:opacity-80 lg:hidden">
          <Menu className="h-6 w-6" />
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
          <SocialMediaItem
            icon={MessageCircle}
            socialMediaName="WhatsApp"
            socialMediaLink="https://wa.me/5511919213184"
          />
        </nav>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
