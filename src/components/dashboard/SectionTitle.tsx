// src/components/dashboard/SectionTitle.tsx
// Server Component — no 'use client'
import { ArrowRight } from '@phosphor-icons/react/ssr'
import { cn } from '@/lib/utils/cn'

interface SectionTitleProps {
  icon: React.ReactNode      // Pre-rendered icon at size=24
  title: string              // e.g. "Risk Score"
  linkText?: string          // If provided, renders "View X →" on the right
  className?: string
}

export function SectionTitle({ icon, title, linkText, className }: SectionTitleProps) {
  return (
    <div className={cn('flex items-center gap-3', className)}>
      {icon}
      <span className="flex-1 text-[20px] font-medium text-foreground leading-6">{title}</span>
      {linkText && (
        <div className="flex items-center gap-1 shrink-0">
          <span className="text-base font-medium text-[#3b82f6]">{linkText}</span>
          <ArrowRight size={20} className="text-[#3b82f6]" />
        </div>
      )}
    </div>
  )
}
