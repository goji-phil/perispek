// src/lib/data/time-series.ts
import type { IoTReading } from '@/types'

/**
 * Generates 90 days of daily IoT sensor readings ending at the reference date.
 * Produces realistic variation around a baseline d/D ratio with occasional spikes.
 *
 * @param baselineDRatio - Baseline depth-to-diameter ratio (0.0–1.0+)
 * @param baselineFlowMGD - Baseline flow rate in million gallons per day
 * @param days - Number of days to generate (default 90)
 */
export function generateTimeSeries(
  baselineDRatio: number,
  baselineFlowMGD: number,
  days = 90
): IoTReading[] {
  const readings: IoTReading[] = []
  const endDate = new Date('2026-01-15T12:00:00Z') // Fixed reference date for reproducibility

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(endDate)
    date.setDate(date.getDate() - i)

    // Realistic variation: ±10% daily fluctuation + weekly rain event spikes
    const dayOfWeek = date.getDay()
    const isWeekend = dayOfWeek === 0 || dayOfWeek === 6
    const weeklyVariation = isWeekend ? 0.05 : 0 // Weekend uptick from residential use
    const randomNoise = (Math.random() - 0.5) * 0.08

    // Occasional rain event (roughly weekly): +15-25% spike
    const isRainEvent = Math.random() < 0.12
    const rainSpike = isRainEvent ? Math.random() * 0.18 + 0.08 : 0

    const dRatio = Math.max(0.05, baselineDRatio + weeklyVariation + randomNoise + rainSpike)
    const flowRate = Math.max(0.1, baselineFlowMGD * (0.85 + Math.random() * 0.35))

    readings.push({
      timestamp: date.toISOString(),
      dRatio: Math.round(dRatio * 1000) / 1000,
      flowRateMGD: Math.round(flowRate * 100) / 100,
    })
  }

  return readings
}
