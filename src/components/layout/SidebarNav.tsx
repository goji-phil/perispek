'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  SquaresFour,
  MapTrifold,
  ChartLineUp,
  ClipboardText,
} from '@phosphor-icons/react'
import { cn } from '@/lib/utils/cn'

const NAV_ITEMS = [
  { href: '/dashboard', label: 'Dashboard', icon: SquaresFour },
  { href: '/map', label: 'Map', icon: MapTrifold },
  { href: '/insights', label: 'System Insights', icon: ChartLineUp },
  { href: '/work-orders', label: 'Work Orders', icon: ClipboardText },
] as const

export function SidebarNav({ collapsed }: { collapsed: boolean }) {
  const pathname = usePathname()

  return (
    <nav className="flex flex-col gap-1 px-2 py-3">
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href || pathname.startsWith(href + '/')
        return (
          <Link
            key={href}
            href={href}
            title={collapsed ? label : undefined}
            className={cn(
              'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors duration-150',
              isActive
                ? 'bg-surface-active text-primary'
                : 'text-foreground-muted hover:bg-surface-hover hover:text-foreground'
            )}
          >
            <Icon
              size={20}
              weight={isActive ? 'fill' : 'regular'}
              className="shrink-0"
            />
            <span
              className={cn(
                'whitespace-nowrap transition-all duration-200',
                collapsed ? 'w-0 opacity-0 overflow-hidden' : 'w-auto opacity-100'
              )}
            >
              {label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}
