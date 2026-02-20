'use client'

import { useEffect } from 'react'
import { useSidebarStore } from '@/lib/stores/sidebar'
import { SidebarNav } from './SidebarNav'

export function Sidebar() {
  const { collapsed, toggle } = useSidebarStore()

  useEffect(() => {
    useSidebarStore.persist.rehydrate()
  }, [])

  return (
    <aside
      className="relative flex flex-col shrink-0 bg-surface border-r border-border transition-all duration-200 ease-in-out overflow-hidden"
      style={{
        width: collapsed
          ? 'var(--sidebar-collapsed-width)'
          : 'var(--sidebar-width)',
      }}
    >
      <SidebarNav collapsed={collapsed} onToggle={toggle} />
    </aside>
  )
}
