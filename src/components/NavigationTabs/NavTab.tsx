'use client'

import Link from 'next/link'
import * as Tabs from '@radix-ui/react-tabs'
import { motion } from 'framer-motion'

export interface NavTabProps {
  url: string
  titlePage: string
  isSelected?: boolean
}

export function NavTab({ url, titlePage, isSelected = false }: NavTabProps) {
  return (
    <Link href={url} passHref>
      <Tabs.Trigger
        value={url}
        className="relative px-1 pb-2 text-lg font-semibold text-zinc-500 outline-none hover:text-amber-700 data-[state=active]:text-amber-700"
      >
        <span className="whitespace-nowrap">{titlePage}</span>

        {isSelected && (
          <motion.div
            layoutId="activeTab"
            className="absolute -bottom-px left-0 right-0 h-0.5 bg-amber-700"
          />
        )}
      </Tabs.Trigger>
    </Link>
  )
}
