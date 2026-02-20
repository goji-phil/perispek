// src/components/dashboard/RightColumn.tsx
// Server Component — no 'use client'
import {
  Prohibit,
  XCircle,
  Warning,
  CheckCircle,
  CellSignalX,
  SecurityCamera,
  TrendDown,
  FileDashed,
  TrendUp,
  Minus,
  Umbrella,
} from '@phosphor-icons/react/ssr'
import type { DashboardMetrics } from '@/lib/data/dashboard'
import { MetricStateCard } from './MetricStateCard'
import { SectionTitle } from './SectionTitle'
import { cn } from '@/lib/utils/cn'

interface RightColumnProps {
  metrics: DashboardMetrics
  className?: string
}

export function RightColumn({ metrics, className }: RightColumnProps) {
  return (
    <div
      className={cn(
        'flex flex-col w-[544px] shrink-0 rounded-[12px] border border-[#3f3f46] bg-[#27272a] overflow-hidden min-h-0',
        className
      )}
    >
      {/* 1. Blockage Predictions */}
      <div className="flex flex-col gap-[10px] p-5">
        <SectionTitle
          icon={<Prohibit size={24} className="text-foreground-muted" />}
          title="Blockage Predictions"
          linkText="View predictions"
        />
        <div className="grid grid-cols-2 gap-[10px]">
          <MetricStateCard
            value={String(metrics.reactiveCount)}
            label="Requires reactive attention"
            labelColor="text-[#ef4444]"
            icon={<XCircle size={24} className="text-[#ef4444]" />}
          />
          <MetricStateCard
            value={String(metrics.proactiveCount)}
            label="Needs proactive attention"
            labelColor="text-[#facc15]"
            icon={<Warning size={24} className="text-[#facc15]" />}
          />
          <MetricStateCard
            value={String(metrics.allClearCount)}
            label="All clear"
            labelColor="text-[#22c55e]"
            icon={<CheckCircle size={24} className="text-[#22c55e]" />}
          />
          <MetricStateCard
            value={String(metrics.noSignalCount)}
            label="Sensors not responding"
            labelColor="text-[#a1a1aa]"
            icon={<CellSignalX size={24} className="text-[#a1a1aa]" />}
          />
        </div>
        <p className="text-sm text-[#71717a]">
          {metrics.iotMonitoredCount} assets monitored by IoT devices
        </p>
      </div>

      {/* 2. Condition Changes */}
      <div className="flex flex-col gap-[10px] p-5 border-t border-[#3f3f46]">
        <SectionTitle
          icon={<SecurityCamera size={24} className="text-foreground-muted" />}
          title="Condition Changes"
          linkText="View changes"
        />
        <div className="grid grid-cols-2 gap-[10px]">
          <MetricStateCard
            value={String(metrics.worsenedCount)}
            label="Worsened since last inspection"
            labelColor="text-[#ef4444]"
            icon={<TrendDown size={24} className="text-[#ef4444]" />}
          />
          <MetricStateCard
            value={String(metrics.noRecordsCount)}
            label="Needs maintenance records"
            labelColor="text-[#a1a1aa]"
            icon={<FileDashed size={24} className="text-[#a1a1aa]" />}
          />
          <MetricStateCard
            value={String(metrics.improvedCount)}
            label="Improved since last inspection"
            labelColor="text-[#22c55e]"
            icon={<TrendUp size={24} className="text-[#22c55e]" />}
          />
          <MetricStateCard
            value={String(metrics.unchangedCount)}
            label="No significant change"
            labelColor="text-[#3b82f6]"
            icon={<Minus size={24} className="text-[#3b82f6]" />}
          />
        </div>
        <p className="text-sm text-[#71717a]">
          Showing data from inspections completed this year to date
        </p>
      </div>

      {/* 3. Today's Rainfall */}
      <div className="flex flex-col gap-[10px] p-5 border-t border-[#3f3f46]">
        <SectionTitle
          icon={<Umbrella size={24} className="text-foreground-muted" />}
          title="Today's Rainfall"
        />
        <div className="flex gap-[10px]">
          <MetricStateCard
            value="0.51"
            label="Total rain (in)"
            labelColor="text-[#3b82f6]"
            icon={<span />}
            className="flex-1"
          />
          <MetricStateCard
            value="0.05"
            label="Intensity avg. (in/hr)"
            labelColor="text-[#3b82f6]"
            icon={<span />}
            className="flex-1"
          />
          <MetricStateCard
            value="0.17"
            label="Year avg. (in/hr)"
            labelColor="text-[#3b82f6]"
            icon={<span />}
            className="flex-1"
          />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-[#71717a]">Feb 19, 2026 — data current as of 08:00</p>
          <p className="text-[10px] font-medium italic text-[#71717a]">
            Source: NOAA National Weather Service
          </p>
        </div>
      </div>
    </div>
  )
}
