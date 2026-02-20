'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Speedometer,
  Pipe,
  Lightbulb,
  Wrench,
  Bell,
  UserCircle,
  Gear,
  CaretDoubleLeft,
  CaretDoubleRight,
} from '@phosphor-icons/react'
import { cn } from '@/lib/utils/cn'
import { PerispekLogo } from '@/components/PerispekLogo'

const MAIN_NAV = [
  { href: '/dashboard', label: 'Dashboard', shortLabel: 'Dashb.', icon: Speedometer },
  { href: '/map', label: 'Asset Map', shortLabel: 'Assets', icon: Pipe },
  { href: '/insights', label: 'System Insights', shortLabel: 'Insights', icon: Lightbulb },
  { href: '/work-orders', label: 'Work Orders', shortLabel: 'WOs', icon: Wrench },
] as const

const SETTINGS_NAV = [
  { href: '/notifications', label: 'Notifications', icon: Bell },
  { href: '/account', label: 'Account', icon: UserCircle },
  { href: '/settings', label: 'Settings', icon: Gear },
] as const

function NavItem({
  href,
  label,
  icon: Icon,
  isActive,
  collapsed,
  shortLabel,
}: {
  href: string
  label: string
  icon: React.ElementType
  isActive: boolean
  collapsed: boolean
  shortLabel?: string
}) {
  if (collapsed) {
    return (
      <div className="flex flex-col items-center gap-0.5">
        <Link
          href={href}
          title={label}
          className={cn(
            'flex items-center justify-center p-2 rounded-[12px] transition-colors duration-150',
            isActive
              ? 'bg-[rgba(255,255,255,0.05)] text-foreground'
              : 'text-[#71717a] hover:bg-[rgba(255,255,255,0.04)] hover:text-foreground'
          )}
        >
          <Icon size={20} weight={isActive ? 'fill' : 'regular'} />
        </Link>
        <span className="text-[10px] font-medium leading-3 tracking-[0.08px] text-[#71717a] text-center truncate w-full">
          {shortLabel ?? label}
        </span>
      </div>
    )
  }

  return (
    <Link
      href={href}
      className={cn(
        'flex items-center gap-2 p-2 min-h-8 rounded-[12px] w-full transition-colors duration-150',
        isActive
          ? 'bg-[rgba(255,255,255,0.05)] text-foreground'
          : 'text-[#e4e4e7] hover:bg-[rgba(255,255,255,0.04)] hover:text-foreground'
      )}
    >
      <Icon size={20} weight={isActive ? 'fill' : 'regular'} className="shrink-0" />
      <span className="text-sm font-medium leading-4 tracking-[0.04px] whitespace-nowrap">
        {label}
      </span>
    </Link>
  )
}

export function SidebarNav({
  collapsed,
  onToggle,
}: {
  collapsed: boolean
  onToggle: () => void
}) {
  const pathname = usePathname()

  if (collapsed) {
    return (
      <div className="flex flex-col items-center gap-6 px-3 py-5 h-full">
        {/* Logo mark only */}
        <PerispekLogo size={32} />

        {/* Main nav */}
        <div className="flex flex-1 flex-col gap-0.5 items-center w-10">
          {MAIN_NAV.map(({ href, label, shortLabel, icon }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              shortLabel={shortLabel}
              icon={icon}
              isActive={pathname === href || pathname.startsWith(href + '/')}
              collapsed
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-border shrink-0" />

        {/* Settings nav */}
        <div className="flex flex-col items-center gap-0 shrink-0 w-10">
          {SETTINGS_NAV.map(({ href, label, icon }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              icon={icon}
              isActive={pathname === href}
              collapsed
            />
          ))}
        </div>

        {/* Divider */}
        <div className="w-full border-t border-border shrink-0" />

        {/* Expand toggle */}
        <button
          onClick={onToggle}
          className="flex items-center justify-center p-2 rounded-[12px] text-[#71717a] hover:bg-[rgba(255,255,255,0.04)] hover:text-foreground transition-colors duration-150 shrink-0"
          aria-label="Expand sidebar"
        >
          <CaretDoubleRight size={20} weight="regular" />
        </button>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6 px-[10px] py-5 h-full">
      {/* Logo + app name */}
      <div className="flex items-center gap-[6px] pl-[6px] pr-0 py-1 shrink-0">
        <PerispekLogo size={32} />
        <span className="text-2xl font-medium leading-8 tracking-normal text-foreground whitespace-nowrap">
          Perispek
        </span>
      </div>

      {/* General section */}
      <div className="flex flex-1 flex-col gap-1 min-h-0">
        <div className="pl-2 shrink-0">
          <span className="text-xs font-medium leading-[14px] tracking-[0.04px] text-[#71717a]">
            General
          </span>
        </div>
        <div className="flex flex-col">
          {MAIN_NAV.map(({ href, label, icon }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              icon={icon}
              isActive={pathname === href || pathname.startsWith(href + '/')}
              collapsed={false}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border shrink-0" />

      {/* Settings section */}
      <div className="flex flex-col gap-1 shrink-0">
        <div className="pl-2">
          <span className="text-xs font-medium leading-[14px] tracking-[0.04px] text-[#71717a]">
            Settings
          </span>
        </div>
        <div className="flex flex-col py-1">
          {SETTINGS_NAV.map(({ href, label, icon }) => (
            <NavItem
              key={href}
              href={href}
              label={label}
              icon={icon}
              isActive={pathname === href}
              collapsed={false}
            />
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-border shrink-0" />

      {/* Collapse toggle */}
      <button
        onClick={onToggle}
        className="flex items-center gap-2 p-2 min-h-8 rounded-[12px] text-[#71717a] hover:bg-[rgba(255,255,255,0.04)] hover:text-foreground transition-colors duration-150 shrink-0"
        aria-label="Collapse sidebar"
      >
        <CaretDoubleLeft size={20} weight="regular" />
      </button>
    </div>
  )
}
