'use client'

import { useEffect } from 'react'
import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import { useSidebarStore } from '@/lib/stores/sidebar'
import { SidebarNav } from './SidebarNav'
import { cn } from '@/lib/utils/cn'

export function Sidebar() {
  const { collapsed, toggle } = useSidebarStore()

  useEffect(() => {
    // Rehydrate after mount — required to avoid SSR/client hydration mismatch
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
      {/* Logo / branding area */}
      <div className={cn(
        'flex items-center gap-3 px-4 border-b border-border shrink-0',
        'h-[var(--topbar-height)]'
      )}>
        {/* Logo mark — always visible */}
        <div className="w-7 h-7 rounded-md bg-primary shrink-0 flex items-center justify-center">
          <span className="text-white text-xs font-bold">P</span>
        </div>
        {/* App name — hidden when collapsed */}
        <span
          className={cn(
            'text-sm font-semibold text-foreground whitespace-nowrap transition-all duration-200',
            collapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
          )}
        >
          Perispek
        </span>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden">
        <SidebarNav collapsed={collapsed} />
      </div>

      {/* Collapse toggle */}
      <button
        onClick={toggle}
        className={cn(
          'flex items-center justify-center w-full h-10 border-t border-border',
          'text-foreground-muted hover:text-foreground hover:bg-surface-hover',
          'transition-colors duration-150 shrink-0'
        )}
        aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
      >
        {collapsed
          ? <CaretRight size={16} weight="bold" />
          : <CaretLeft size={16} weight="bold" />
        }
      </button>
    </aside>
  )
}
