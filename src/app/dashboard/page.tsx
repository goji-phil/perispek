// src/app/dashboard/page.tsx
// Server Component — no 'use client'
import {
  Compass,
  Drop,
  WarningDiamond,
  Wrench,
  Exam,
  MagnifyingGlass,
} from '@phosphor-icons/react/ssr'
import { computeDashboardMetrics } from '@/lib/data/dashboard'
import { MetricLargeCard } from '@/components/dashboard/MetricLargeCard'
import { MapPlaceholder } from '@/components/dashboard/MapPlaceholder'
import { RightColumn } from '@/components/dashboard/RightColumn'

export default function DashboardPage() {
  const metrics = computeDashboardMetrics()

  return (
    <div className="flex flex-col h-full overflow-hidden">

      {/* Top bar — 80px */}
      <div className="flex items-center justify-between h-[80px] shrink-0 px-5 py-5 border-b border-[#3f3f46]">
        {/* Left: icon + title */}
        <div className="flex items-center gap-2">
          <Compass size={24} className="text-foreground-muted" />
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
              className="w-full h-9 pl-9 pr-3 rounded-[8px] bg-transparent border border-[#3f3f46] text-sm text-foreground placeholder:text-foreground-muted outline-none"
              readOnly
            />
          </div>
          <button className="h-9 px-4 rounded-[8px] border border-[#3f3f46] text-sm font-medium text-foreground">
            Share
          </button>
        </div>
      </div>

      {/* Functions bar — 80px */}
      <div className="flex items-center h-[80px] shrink-0 px-5 py-5 gap-[10px] border-b border-[#3f3f46]">
        <div className="relative flex items-center w-[334px]">
          <MagnifyingGlass
            size={16}
            className="absolute left-3 text-foreground-muted"
          />
          <input
            type="text"
            placeholder="Search assets, alerts, work orders..."
            className="w-full h-9 pl-9 pr-3 rounded-[8px] bg-transparent border border-[#3f3f46] text-sm text-foreground placeholder:text-foreground-muted outline-none"
            readOnly
          />
        </div>
        <button className="h-9 px-4 rounded-[8px] border border-[#3f3f46] text-sm font-medium text-foreground shrink-0">
          Dashboard settings
        </button>
        <button className="h-9 px-4 rounded-[8px] border border-[#3f3f46] text-sm font-medium text-foreground shrink-0">
          Year to date
        </button>
        <span className="ml-auto text-sm text-foreground-muted shrink-0">
          Displaying data for Jan 1, 2026 – Feb 12, 2026
        </span>
      </div>

      {/* Main content area — flex-1, no overflow */}
      <div className="flex flex-col flex-1 min-h-0 px-5 pb-5 pt-[10px] gap-[10px]">

        {/* Primary metrics row — 4 cards, fixed height 170px */}
        <div className="flex gap-[10px] h-[170px] shrink-0">
          <MetricLargeCard
            icon={<Drop size={24} className="text-foreground-muted" />}
            label="Risk of overflow"
            value={`${metrics.overflowAssetCount} assets`}
            description={`${metrics.iotMonitoredCount} assets monitored`}
            linkText="View assets"
          />
          <MetricLargeCard
            icon={<WarningDiamond size={24} className="text-foreground-muted" />}
            label="Avg. risk score"
            value={String(metrics.avgRiskScore)}
            description={`${metrics.riskBandCounts.high} high, ${metrics.riskBandCounts.critical} critical`}
            linkText="View high risk scores"
          />
          <MetricLargeCard
            icon={<Wrench size={24} className="text-foreground-muted" />}
            label="Work orders"
            value={`${metrics.openWorkOrderCount} open`}
            description={`${metrics.highPriorityWorkOrderCount} are high priority`}
            linkText="View work orders"
          />
          <MetricLargeCard
            icon={<Exam size={24} className="text-foreground-muted" />}
            label="Inspections this month"
            value={`${metrics.monthlyLinearFeet.toLocaleString()} ft`}
            description={`${metrics.monthlyPct}% of consent decree target`}
            linkText="View details"
          />
        </div>

        {/* Asset type summary strip — DASH-03: pipes / manholes / storm drains */}
        <div className="flex items-center gap-4 shrink-0 px-1">
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

        {/* Below-metrics: map (left) + right column */}
        <div className="flex flex-1 gap-[10px] min-h-0">
          <MapPlaceholder className="flex-1 min-h-0" />
          <RightColumn metrics={metrics} />
        </div>

      </div>
    </div>
  )
}
