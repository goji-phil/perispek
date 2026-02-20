// src/app/dashboard/page.tsx
// Server Component — no 'use client'
import {
  Gauge,
  Drop,
  WarningDiamond,
  Wrench,
  Exam,
  MagnifyingGlass,
  Gear,
  Calendar,
  Export,
} from '@phosphor-icons/react/ssr'
import { computeDashboardMetrics } from '@/lib/data/dashboard'
import { MetricLargeCard } from '@/components/dashboard/MetricLargeCard'
import { MapPlaceholder } from '@/components/dashboard/MapPlaceholder'
import { RightColumn } from '@/components/dashboard/RightColumn'

export default function DashboardPage() {
  const metrics = computeDashboardMetrics()

  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* Top bar — 56px */}
      <div className="flex items-center justify-between h-[56px] shrink-0 px-5 border-b border-[#3f3f46]">
        {/* Left: icon + title */}
        <div className="flex items-center gap-1.5">
          <Gauge size={24} weight="fill" className="text-foreground-muted" />
          <span className="text-[20px] font-medium text-foreground leading-6">
            System Overview Dashboard
          </span>
        </div>
        {/* Right: search + share */}
        <div className="flex items-center gap-[10px]">
          <div className="relative flex items-center w-[334px]">
            <MagnifyingGlass
              size={16}
              className="absolute left-3 text-foreground-muted"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-9 pl-9 pr-[10px] rounded-[8px] bg-transparent border border-[#3f3f46] text-sm text-foreground placeholder:text-foreground-muted outline-none"
              readOnly
            />
          </div>
          <button className="h-9 px-[10px] rounded-[8px] border border-[#3f3f46] text-sm font-medium text-foreground flex items-center gap-1.5">
            <Export size={16} className="text-foreground-muted" />
            Share
          </button>
        </div>
      </div>

      {/* Functions bar — 56px */}
      <div className="flex items-center h-[56px] shrink-0 px-5 gap-[10px] border-b border-[#3f3f46]">
        <div className="relative flex items-center w-[334px]">
          <MagnifyingGlass
            size={16}
            className="absolute left-3 text-foreground-muted"
          />
          <input
            type="text"
            placeholder="Search assets, alerts, work orders..."
            className="w-full h-9 pl-9 pr-[10px] rounded-[8px] bg-transparent border border-[#3f3f46] text-sm text-foreground placeholder:text-foreground-muted outline-none"
            readOnly
          />
        </div>
        <button className="h-9 px-[10px] rounded-[8px] border border-[#3f3f46] text-sm font-medium text-foreground shrink-0 flex items-center gap-1.5">
          <Gear size={16} className="text-foreground-muted" />
          Dashboard settings
        </button>
        <button className="h-9 px-[10px] rounded-[8px] border border-[#3f3f46] text-sm font-medium text-foreground shrink-0 flex items-center gap-1.5">
          <Calendar size={16} className="text-foreground-muted" />
          Year to date
        </button>
        <span className="ml-auto text-sm text-foreground-muted shrink-0">
          Displaying data for Jan 1, 2026 – Feb 12, 2026
        </span>
      </div>

      {/* Metrics area — padded, shrinks to content */}
      <div className="flex flex-col shrink-0 p-5 gap-[10px]">

        {/* Primary metrics row — 4 cards */}
        <div className="flex gap-[10px]">
          <MetricLargeCard
            icon={<Drop size={24} />}
            label="Risk of overflow"
            value={`${metrics.overflowAssetCount} assets`}
            description={`${metrics.iotMonitoredCount} assets monitored`}
            linkText="View assets"
          />
          <MetricLargeCard
            icon={<WarningDiamond size={24} weight="fill" />}
            label="Avg. risk score"
            value={String(metrics.avgRiskScore)}
            description={`${metrics.riskBandCounts.high} high, ${metrics.riskBandCounts.critical} critical`}
            linkText="View high risk scores"
          />
          <MetricLargeCard
            icon={<Wrench size={24} />}
            label="Work orders"
            value={`${metrics.openWorkOrderCount} open`}
            description={`${metrics.highPriorityWorkOrderCount} are high priority`}
            linkText="View work orders"
          />
          <MetricLargeCard
            icon={<Exam size={24} />}
            label="Inspections this month"
            value={`${metrics.monthlyLinearFeet.toLocaleString()} ft`}
            description={`${metrics.monthlyPct}% of consent decree target`}
            linkText="View details"
          />
        </div>

        {/* Asset type summary strip — DASH-03: pipes / manholes / storm drains */}
        <div className="flex items-center gap-[10px] shrink-0 px-1">
          <span className="text-xs text-[#71717a]">
            Asset breakdown:
          </span>
          <span className="text-xs text-[#a1a1aa]">
            <span className="font-medium text-foreground">{metrics.pipeCount}</span> pipes
          </span>
          <span className="text-xs text-[#a1a1aa]">
            <span className="font-medium text-foreground">{metrics.manholeCount}</span> manholes
          </span>
          <span className="text-xs text-[#a1a1aa]">
            <span className="font-medium text-foreground">{metrics.stormDrainCount}</span> storm drains
          </span>
          <span className="ml-auto text-xs text-[#71717a]">
            Risk bands: <span className="text-[#22c55e]">{metrics.riskBandCounts.low} low</span>
            {' · '}
            <span className="text-[#facc15]">{metrics.riskBandCounts.medium} medium</span>
            {' · '}
            <span className="text-[#ef4444]">{metrics.riskBandCounts.high} high</span>
            {' · '}
            <span className="text-[#ef4444] font-medium">{metrics.riskBandCounts.critical} critical</span>
          </span>
        </div>

      </div>

      {/* Below-metrics — full width, no outer padding, fills remaining height */}
      <div className="flex flex-1 gap-0 min-h-0">
        <MapPlaceholder className="flex-1 min-h-0" />
        <RightColumn metrics={metrics} />
      </div>
    </div>
  )
}
