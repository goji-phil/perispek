// src/lib/data/inspections.ts
import type { InspectionCoverage } from '@/types'

export const INSPECTION_COVERAGE: InspectionCoverage = {
  /**
   * Last 12 weeks ending ~Jan 15 2026 (oldest first).
   * Weekly target: 2,500 LF (consent decree requirement).
   * Story: strong early weeks, holiday slowdown (W48-W50), partial recovery in Jan.
   */
  weekly: [
    { period: '2025-W41', linearFeetInspected: 2750, targetLinearFeet: 2500, onTrack: true },
    { period: '2025-W42', linearFeetInspected: 3100, targetLinearFeet: 2500, onTrack: true },
    { period: '2025-W43', linearFeetInspected: 2200, targetLinearFeet: 2500, onTrack: false },
    { period: '2025-W44', linearFeetInspected: 2800, targetLinearFeet: 2500, onTrack: true },
    { period: '2025-W45', linearFeetInspected: 1950, targetLinearFeet: 2500, onTrack: false }, // Thanksgiving week
    { period: '2025-W46', linearFeetInspected: 2600, targetLinearFeet: 2500, onTrack: true },
    { period: '2025-W47', linearFeetInspected: 2900, targetLinearFeet: 2500, onTrack: true },
    { period: '2025-W48', linearFeetInspected: 1800, targetLinearFeet: 2500, onTrack: false }, // Holiday slowdown begins
    { period: '2025-W49', linearFeetInspected: 1400, targetLinearFeet: 2500, onTrack: false }, // Christmas week
    { period: '2025-W50', linearFeetInspected: 800,  targetLinearFeet: 2500, onTrack: false }, // New Year week
    { period: '2025-W51', linearFeetInspected: 2100, targetLinearFeet: 2500, onTrack: false }, // Recovery in progress
    { period: '2026-W02', linearFeetInspected: 2350, targetLinearFeet: 2500, onTrack: false }, // Still below target
  ],

  /**
   * Last 12 months Feb 2025 – Jan 2026 (oldest first).
   * Monthly target: 10,000 LF (consent decree requirement).
   * Story: strong Q1/Q2 start, summer slowdown in Jul, good recovery Aug–Sep,
   *        then lagging Oct–Jan due to staffing and holidays.
   */
  monthly: [
    { period: '2025-02', linearFeetInspected: 11200, targetLinearFeet: 10000, onTrack: true },
    { period: '2025-03', linearFeetInspected: 13500, targetLinearFeet: 10000, onTrack: true },
    { period: '2025-04', linearFeetInspected: 10800, targetLinearFeet: 10000, onTrack: true },
    { period: '2025-05', linearFeetInspected: 9200,  targetLinearFeet: 10000, onTrack: false },
    { period: '2025-06', linearFeetInspected: 11000, targetLinearFeet: 10000, onTrack: true },
    { period: '2025-07', linearFeetInspected: 8500,  targetLinearFeet: 10000, onTrack: false }, // Summer slowdown
    { period: '2025-08', linearFeetInspected: 12300, targetLinearFeet: 10000, onTrack: true },
    { period: '2025-09', linearFeetInspected: 10200, targetLinearFeet: 10000, onTrack: true },
    { period: '2025-10', linearFeetInspected: 9800,  targetLinearFeet: 10000, onTrack: false }, // Starting to lag
    { period: '2025-11', linearFeetInspected: 8900,  targetLinearFeet: 10000, onTrack: false }, // Continuing lag
    { period: '2025-12', linearFeetInspected: 6200,  targetLinearFeet: 10000, onTrack: false }, // Holiday month
    { period: '2026-01', linearFeetInspected: 4300,  targetLinearFeet: 10000, onTrack: false }, // Month in progress (mid-Jan)
  ],

  /**
   * Last 4 quarters Q1 2025 – Q4 2025 (oldest first).
   * Quarterly target: 30,000 LF (consent decree requirement).
   * Story: Q1 on-track, Q2 slightly below, Q3 recovered, Q4 significantly below (holiday impact).
   */
  quarterly: [
    { period: '2025-Q1', linearFeetInspected: 35500, targetLinearFeet: 30000, onTrack: true },
    { period: '2025-Q2', linearFeetInspected: 29000, targetLinearFeet: 30000, onTrack: false }, // Slightly below
    { period: '2025-Q3', linearFeetInspected: 31200, targetLinearFeet: 30000, onTrack: true },
    { period: '2025-Q4', linearFeetInspected: 24900, targetLinearFeet: 30000, onTrack: false }, // Holiday impact
  ],
}

/**
 * Get the most recent period for each cadence.
 * Used by the Dashboard (Phase 2) to display current-period coverage status.
 */
export function getCurrentCoverageSummary() {
  const weekly = INSPECTION_COVERAGE.weekly[INSPECTION_COVERAGE.weekly.length - 1]
  const monthly = INSPECTION_COVERAGE.monthly[INSPECTION_COVERAGE.monthly.length - 1]
  const quarterly = INSPECTION_COVERAGE.quarterly[INSPECTION_COVERAGE.quarterly.length - 1]
  return { weekly, monthly, quarterly }
}
