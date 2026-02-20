// src/components/dashboard/MetricStateCard.tsx
// Server Component — no 'use client'
import { cn } from '@/lib/utils/cn'

interface MetricStateCardProps {
  value: string              // e.g. "2" or "0.51"
  label: string              // e.g. "Requires reactive attention"
  labelColor: string         // Tailwind class e.g. 'text-[#ef4444]'
  icon: React.ReactNode      // Pre-rendered icon at size=24
  className?: string
}

export function MetricStateCard({
  value,
  label,
  labelColor,
  icon,
  className,
}: MetricStateCardProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1.5 rounded-[12px] border p-[10px] bg-[#27272a] border-[#3f3f46]',
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-[24px] font-medium text-foreground leading-8">{value}</span>
        {icon}
      </div>
      <span className={cn('text-sm font-normal', labelColor)}>{label}</span>
    </div>
  )
}
