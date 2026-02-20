// src/components/dashboard/MapPlaceholder.tsx
// Server Component — no 'use client'
import {
  Diamond,
  MagnifyingGlass,
  ArrowsOut,
  Minus,
  Plus,
  NavigationArrow,
} from '@phosphor-icons/react/ssr'
import { SectionTitle } from './SectionTitle'
import { cn } from '@/lib/utils/cn'

interface MapPlaceholderProps {
  className?: string
}

export function MapPlaceholder({ className }: MapPlaceholderProps) {
  return (
    <div className={cn('flex flex-col gap-[10px] min-h-0', className)}>
      {/* Section title */}
      <SectionTitle
        icon={<Diamond size={24} className="text-foreground-muted" />}
        title="Risk Score"
        linkText="View full map"
      />
      {/* Map placeholder card — fills remaining height */}
      <div className="relative flex flex-1 min-h-0 rounded-[12px] bg-[#1c1c1e] border border-[#3f3f46] overflow-hidden">
        {/* Left toolbar chrome */}
        <div className="absolute left-3 top-1/2 -translate-y-1/2 flex flex-col gap-1.5">
          <button className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-[#27272a] border border-[#3f3f46] text-foreground-muted">
            <MagnifyingGlass size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-[#27272a] border border-[#3f3f46] text-foreground-muted">
            <ArrowsOut size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-[#27272a] border border-[#3f3f46] text-foreground-muted">
            <Plus size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-[#27272a] border border-[#3f3f46] text-foreground-muted">
            <Minus size={16} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-[8px] bg-[#27272a] border border-[#3f3f46] text-foreground-muted">
            <NavigationArrow size={16} />
          </button>
        </div>
        {/* Map content area — placeholder text */}
        <div className="flex flex-1 items-center justify-center">
          <p className="text-sm text-foreground-muted">Interactive map — Phase 3</p>
        </div>
        {/* Bottom-right feedback note */}
        <div className="absolute bottom-3 right-3 rounded-[8px] bg-[#27272a] border border-[#3f3f46] px-[10px] py-1.5">
          <p className="text-xs text-foreground-muted">Map feedback</p>
        </div>
      </div>
    </div>
  )
}
