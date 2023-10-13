'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'

import * as Tabs from '@radix-ui/react-tabs'
import * as ScrollArea from '@radix-ui/react-scroll-area'

import { tabs } from '@/config/navigation/tabs'

import { NavTab } from './NavTab'

export function NavigationTabs() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState(pathname)

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="mb-5"
    >
      <ScrollArea.Root className="w-full" type="scroll">
        <ScrollArea.Viewport className="w-full overflow-x-scroll">
          <Tabs.List className="flex w-full items-center gap-4 border-b border-zinc-300">
            {tabs.map((tab) => (
              <NavTab
                key={tab.url}
                url={tab.url}
                titlePage={tab.title}
                isSelected={currentTab === tab.url}
              />
            ))}
          </Tabs.List>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar
          orientation="horizontal"
          className="flex h-0.5 translate-y-1.5 touch-none select-none flex-col bg-zinc-100"
        >
          <ScrollArea.Thumb className="relative flex-1 rounded-lg bg-zinc-300" />
        </ScrollArea.Scrollbar>
      </ScrollArea.Root>
    </Tabs.Root>
  )
}
