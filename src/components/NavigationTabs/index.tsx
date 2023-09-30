'use client'

import { usePathname } from 'next/navigation'
import { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs'
import { NavTab } from './NavTab'
import { tabs } from '@/config/navigation/tabs'

export function NavigationTabs() {
  const pathname = usePathname()
  const [currentTab, setCurrentTab] = useState(pathname)

  return (
    <Tabs.Root
      value={currentTab}
      onValueChange={setCurrentTab}
      className="mb-5"
    >
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
    </Tabs.Root>
  )
}
