import { ASSETS } from './assets'
import { WORK_ORDERS } from './work-orders'
import { getCurrentCoverageSummary } from './inspections'

export interface DashboardMetrics {
  // Primary metric cards
  overflowAssetCount: number      // IoT assets where currentDRatio > 1.0
  iotMonitoredCount: number       // Total IoT-enabled assets
  avgRiskScore: number            // Mean riskScore across all assets (1 decimal)
  highAndCriticalCount: number    // Assets with riskBand 'high' | 'critical'
  openWorkOrderCount: number      // WOs with status 'open' | 'in-progress'
  highPriorityWorkOrderCount: number // WOs with priority 'high' | 'critical'
  monthlyLinearFeet: number       // getCurrentCoverageSummary().monthly.linearFeetInspected
  monthlyTargetFeet: number       // getCurrentCoverageSummary().monthly.targetLinearFeet
  monthlyPct: number              // 0-100 integer

  // Blockage predictions (from IoT data)
  reactiveCount: number           // dRatio > 1.0 (overflow)
  proactiveCount: number          // dRatio >= warningThreshold && <= 1.0
  allClearCount: number           // dRatio < warningThreshold
  noSignalCount: number           // Hardcoded 0 (all sensors active in seed)

  // Condition changes (from inspection history comparison)
  worsenedCount: number           // Most recent grade > previous grade (higher NASSCO = worse)
  improvedCount: number           // Most recent grade < previous grade
  unchangedCount: number          // Most recent grade === previous grade
  noRecordsCount: number          // Assets with < 2 inspections (can't compare)

  // Asset type and risk distribution (DASH-03, DASH-06)
  pipeCount: number
  manholeCount: number
  stormDrainCount: number
  riskBandCounts: {
    low: number
    medium: number
    high: number
    critical: number
  }
}

export function computeDashboardMetrics(): DashboardMetrics {
  // IoT classification
  const iotAssets = ASSETS.filter(a => a.iot != null)
  const overflowAssets = iotAssets.filter(a => a.iot!.currentDRatio > 1.0)
  const warningAssets = iotAssets.filter(
    a => a.iot!.currentDRatio >= a.iot!.warningThreshold && a.iot!.currentDRatio <= 1.0
  )
  const clearAssets = iotAssets.filter(
    a => a.iot!.currentDRatio < a.iot!.warningThreshold
  )

  // Risk score
  const avgRisk = ASSETS.reduce((sum, a) => sum + a.riskScore, 0) / ASSETS.length

  // Work orders
  const openWOs = WORK_ORDERS.filter(
    wo => wo.status === 'open' || wo.status === 'in-progress'
  )
  const highPriorityWOs = WORK_ORDERS.filter(
    wo => wo.priority === 'high' || wo.priority === 'critical'
  )

  // Inspection coverage — use monthly period
  const coverage = getCurrentCoverageSummary()
  const monthly = coverage.monthly
  const monthlyPct = Math.round((monthly.linearFeetInspected / monthly.targetLinearFeet) * 100)

  // Condition changes — compare inspectionHistory[0] (most recent) vs [1] (previous)
  // Higher NASSCO grade number = worse condition
  let worsened = 0
  let improved = 0
  let unchanged = 0
  let noRecords = 0
  for (const asset of ASSETS) {
    const history = asset.pacp.inspectionHistory
    if (history.length < 2) {
      noRecords++
      continue
    }
    const recent = history[0].grade
    const prev = history[1].grade
    if (recent > prev) worsened++
    else if (recent < prev) improved++
    else unchanged++
  }

  return {
    overflowAssetCount: overflowAssets.length,
    iotMonitoredCount: iotAssets.length,
    avgRiskScore: Math.round(avgRisk * 10) / 10,
    highAndCriticalCount: ASSETS.filter(
      a => a.riskBand === 'high' || a.riskBand === 'critical'
    ).length,
    openWorkOrderCount: openWOs.length,
    highPriorityWorkOrderCount: highPriorityWOs.length,
    monthlyLinearFeet: monthly.linearFeetInspected,
    monthlyTargetFeet: monthly.targetLinearFeet,
    monthlyPct,
    reactiveCount: overflowAssets.length,
    proactiveCount: warningAssets.length,
    allClearCount: clearAssets.length,
    noSignalCount: 0,
    worsenedCount: worsened,
    improvedCount: improved,
    unchangedCount: unchanged,
    noRecordsCount: noRecords,
    pipeCount: ASSETS.filter(a => a.type === 'pipe').length,
    manholeCount: ASSETS.filter(a => a.type === 'manhole').length,
    stormDrainCount: ASSETS.filter(a => a.type === 'storm-drain').length,
    riskBandCounts: {
      low: ASSETS.filter(a => a.riskBand === 'low').length,
      medium: ASSETS.filter(a => a.riskBand === 'medium').length,
      high: ASSETS.filter(a => a.riskBand === 'high').length,
      critical: ASSETS.filter(a => a.riskBand === 'critical').length,
    },
  }
}
