// src/components/dashboard/MetricLargeCard.tsx
// Server Component — no 'use client'
import { ArrowRight } from '@phosphor-icons/react/ssr'
import { cn } from '@/lib/utils/cn'

interface MetricLargeCardProps {
  icon: React.ReactNode        // Pre-rendered icon at size=24
  label: string                // e.g. "Risk of overflow"
  value: string                // e.g. "2 assets"
  description: string          // e.g. "35 assets monitored"
  linkText: string             // e.g. "View assets"
  className?: string
}

export function MetricLargeCard({
  icon,
  label,
  value,
  description,
  linkText,
  className,
}: MetricLargeCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col flex-1 rounded-[12px] border bg-[#27272a] border-[#3f3f46]',
        className
      )}
    >
      {/* Top content */}
      <div className="flex flex-col gap-1.5 p-[10px] flex-1">
        <div className="flex items-center gap-1.5">
          {icon}
          <span className="text-base font-medium text-foreground">{label}</span>
        </div>
        <p className="text-[40px] font-medium leading-[46px] tracking-[-0.08px] text-foreground">
          {value}
        </p>
        <p className="text-base font-normal text-[#71717a]">{description}</p>
      </div>
      {/* Divider */}
      <div className="border-t border-[#3f3f46]" />
      {/* Link row */}
      <div className="flex items-center gap-1 px-[10px] py-[10px]">
        <span className="text-base font-medium text-[#3b82f6]">{linkText}</span>
        <ArrowRight size={20} className="text-[#3b82f6]" />
      </div>
    </div>
  )
}
