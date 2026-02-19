// src/lib/data/work-orders.ts
import type { WorkOrder } from '@/types'

export const WORK_ORDERS: WorkOrder[] = [

  // ===================================================================
  // CRITICAL / EMERGENCY WORK ORDERS
  // ===================================================================

  {
    id: 'wo-001',
    assetId: 'pipe-001',           // Main St Trunk Line (overflow, grade 5, riskBand: critical)
    type: 'emergency',
    priority: 'critical',
    status: 'in-progress',
    title: 'Emergency: Overflow Condition — Main St Trunk Line',
    description: 'Pipe-001 reporting d/D ratio of 1.08. Overflow event active. Crew deployed for emergency inspection and bypass pumping. Structural failure confirmed from CCTV. Consent decree violation risk.',
    assignedTo: 'Crew Alpha',
    createdAt: '2026-01-10T08:30:00Z',
    dueDate: '2026-01-17',
  },

  {
    id: 'wo-002',
    assetId: 'pipe-001',           // Main St Trunk Line
    type: 'rehabilitation',
    priority: 'critical',
    status: 'open',
    title: 'CIPP Rehabilitation — Main St Trunk Line',
    description: 'Full 450 LF CIPP lining required. Grade 5 fracture break at joint. Coordinate with emergency bypass. Requires traffic control plan for 36" main on Main St corridor.',
    createdAt: '2026-01-12T10:00:00Z',
    dueDate: '2026-02-28',
  },

  {
    id: 'wo-003',
    assetId: 'pipe-002',           // Troost Ave Interceptor (overflow, grade 5, riskBand: critical)
    type: 'emergency',
    priority: 'critical',
    status: 'in-progress',
    title: 'Emergency CCTV Assessment — Troost Ave Interceptor',
    description: 'Multiple fracture points confirmed. Brick spalling and collapse risk on 1955-era 42" brick interceptor. Emergency CCTV crew deployed. Bypass pumping staged at MH-003.',
    assignedTo: 'Crew Beta',
    createdAt: '2026-01-08T14:00:00Z',
    dueDate: '2026-01-15',
  },

  {
    id: 'wo-004',
    assetId: 'pipe-003',           // Grand Ave Sewer (high risk, grade 4)
    type: 'rehabilitation',
    priority: 'critical',
    status: 'open',
    title: 'Pipe Lining — Grand Ave Sewer (Segment A)',
    description: 'Grade 4 deterioration on 1968 concrete main. Severe root intrusion and longitudinal cracking. CIPP lining specified. Coordination required with Grand Ave road resurfacing project.',
    createdAt: '2026-01-05T09:00:00Z',
    dueDate: '2026-03-15',
  },

  // ===================================================================
  // HIGH PRIORITY — IN PROGRESS
  // ===================================================================

  {
    id: 'wo-005',
    assetId: 'pipe-004',           // Broadway Lateral (high risk)
    type: 'repair',
    priority: 'high',
    status: 'in-progress',
    title: 'Point Repair — Broadway Lateral, Root Intrusion',
    description: 'Severe root intrusion causing 60% blockage. Hydro-jetting completed; point repair scheduled for crown crack at Station 2+45. Traffic control in place.',
    assignedTo: 'Crew Alpha',
    createdAt: '2026-01-03T08:00:00Z',
    dueDate: '2026-01-20',
  },

  {
    id: 'wo-006',
    assetId: 'mh-001',             // Downtown MH-01 (critical condition)
    type: 'repair',
    priority: 'high',
    status: 'in-progress',
    title: 'Manhole Rehabilitation — Downtown MH-01',
    description: 'Active infiltration at bench/trough interface. Step irons missing. Frame and cover settlement causing street hazard. Cementitious liner to be applied to interior walls.',
    assignedTo: 'Inspector R. Johnson',
    createdAt: '2025-12-28T10:30:00Z',
    dueDate: '2026-01-25',
  },

  {
    id: 'wo-007',
    assetId: 'pipe-005',           // 12th St Collector (high risk)
    type: 'inspection',
    priority: 'high',
    status: 'in-progress',
    title: 'CCTV Inspection — 12th St Collector (Priority Segment)',
    description: 'Overdue CCTV inspection for consent decree compliance. Last inspected 2022. High-flow corridor with grade 3 deposition and root intrusion noted in upstream sections.',
    assignedTo: 'CCTV Unit 2',
    createdAt: '2026-01-07T07:00:00Z',
    dueDate: '2026-01-22',
  },

  {
    id: 'wo-008',
    assetId: 'sd-001',             // River Market Storm Drain (high risk)
    type: 'repair',
    priority: 'high',
    status: 'in-progress',
    title: 'Storm Drain Repair — River Market SD-01 Inlet',
    description: 'Concrete inlet structure cracked and undermined by scour. Standing water infiltrating sanitary sewer at cross-connection point. Inlet replacement and cross-connection sealing required.',
    assignedTo: 'Crew Beta',
    createdAt: '2025-12-20T11:00:00Z',
    dueDate: '2026-01-18',
  },

  // ===================================================================
  // HIGH PRIORITY — OPEN
  // ===================================================================

  {
    id: 'wo-009',
    assetId: 'pipe-006',           // Vine St Lateral (high risk)
    type: 'inspection',
    priority: 'high',
    status: 'open',
    title: 'CCTV Inspection — Vine St Lateral (Consent Decree)',
    description: 'Scheduled consent decree inspection overdue by 45 days. Last inspection 2021. Asset rated grade 3 at previous inspection; condition may have deteriorated.',
    createdAt: '2025-12-15T09:00:00Z',
    dueDate: '2026-01-31',
  },

  {
    id: 'wo-010',
    assetId: 'mh-002',             // River Market MH-02
    type: 'repair',
    priority: 'high',
    status: 'open',
    title: 'Frame & Cover Replacement — River Market MH-02',
    description: 'Cast iron frame deteriorated; cover rattling causing noise complaint and safety hazard. Standard frame and cover replacement with traffic-rated assembly.',
    createdAt: '2026-01-02T08:00:00Z',
    dueDate: '2026-01-28',
  },

  {
    id: 'wo-011',
    assetId: 'pipe-007',           // Crossroads Gravity Main
    type: 'repair',
    priority: 'high',
    status: 'open',
    title: 'Root Intrusion Remediation — Crossroads Gravity Main',
    description: 'CCTV footage confirms class 3 root intrusion at multiple joints. Hydro-jetting and root chemical treatment specified. Schedule before spring growth season.',
    createdAt: '2026-01-09T14:00:00Z',
    dueDate: '2026-02-10',
  },

  {
    id: 'wo-012',
    assetId: 'sd-002',             // Crossroads Storm Drain
    type: 'inspection',
    priority: 'high',
    status: 'open',
    title: 'Annual Storm Drain Inspection — Crossroads SD-02',
    description: 'Pre-spring annual inspection of Crossroads district storm drain system. Visual inspection, debris removal, and condition assessment per maintenance schedule.',
    createdAt: '2026-01-14T10:00:00Z',
    dueDate: '2026-02-14',
  },

  // ===================================================================
  // MEDIUM PRIORITY — OPEN
  // ===================================================================

  {
    id: 'wo-013',
    assetId: 'pipe-010',           // Midtown Collector
    type: 'inspection',
    priority: 'medium',
    status: 'open',
    title: 'Scheduled CCTV Inspection — Midtown Collector',
    description: 'Routine 5-year CCTV inspection per asset management program. Last inspection 2021, grade 2. No urgent defects anticipated but required for consent decree compliance record.',
    createdAt: '2026-01-13T09:00:00Z',
    dueDate: '2026-02-20',
  },

  {
    id: 'wo-014',
    assetId: 'mh-008',             // Crossroads MH-08
    type: 'inspection',
    priority: 'medium',
    status: 'open',
    title: 'MACP Inspection — Crossroads MH-08',
    description: 'Standard MACP inspection for manholes in the Crossroads rehabilitation zone. Assess coating condition, step iron integrity, and infiltration.',
    createdAt: '2026-01-11T09:00:00Z',
    dueDate: '2026-02-15',
  },

  {
    id: 'wo-015',
    assetId: 'pipe-015',           // Liberty Memorial Trunk
    type: 'inspection',
    priority: 'medium',
    status: 'open',
    title: 'Scheduled Inspection — Liberty Memorial Trunk',
    description: 'Annual video inspection per consent decree schedule. Asset at mid-life; grade 2 on last inspection. Coordinate with Liberty Memorial events calendar.',
    createdAt: '2026-01-06T08:00:00Z',
    dueDate: '2026-02-28',
  },

  {
    id: 'wo-016',
    assetId: 'sd-005',             // Penn Valley Storm Drain
    type: 'repair',
    priority: 'medium',
    status: 'open',
    title: 'Inlet Cleaning & Minor Repair — Penn Valley SD-05',
    description: 'Debris accumulation blocking 40% of inlet capacity. Jet-vac cleaning and minor mortar repair to cracked headwall. Low urgency — no flooding reported.',
    createdAt: '2026-01-14T13:00:00Z',
    dueDate: '2026-03-01',
  },

  {
    id: 'wo-017',
    assetId: 'pipe-020',           // Westport Lateral
    type: 'repair',
    priority: 'medium',
    status: 'open',
    title: 'Joint Sealing — Westport Lateral',
    description: 'Multiple open joints observed on CCTV. Infiltration estimated at 50 GPD per joint. Chemical grout injection specified for 8 joints along 200 LF segment.',
    createdAt: '2026-01-10T11:00:00Z',
    dueDate: '2026-02-25',
  },

  // ===================================================================
  // MEDIUM PRIORITY — IN PROGRESS
  // ===================================================================

  {
    id: 'wo-018',
    assetId: 'mh-010',             // Midtown MH-10
    type: 'repair',
    priority: 'medium',
    status: 'in-progress',
    title: 'Concrete Lining Repair — Midtown MH-10',
    description: 'H2S corrosion damage to concrete walls. Shotcrete patch applied to lower third; epoxy coating application in progress. Confined space entry permit active.',
    assignedTo: 'Crew Alpha',
    createdAt: '2026-01-06T07:30:00Z',
    dueDate: '2026-01-21',
  },

  // ===================================================================
  // COMPLETED — RECENT (last 90 days)
  // ===================================================================

  {
    id: 'wo-019',
    assetId: 'mh-005',             // Penn Valley MH-05
    type: 'inspection',
    priority: 'medium',
    status: 'completed',
    title: 'Annual MACP Inspection — Penn Valley MH-05',
    description: 'Scheduled annual manhole inspection per consent decree requirements. MACP grade 2 confirmed. Minor efflorescence noted on upper cone; monitor at next inspection.',
    assignedTo: 'Inspector B. Chen',
    createdAt: '2025-10-15T09:00:00Z',
    dueDate: '2025-11-15',
    completedAt: '2025-11-08T14:30:00Z',
  },

  {
    id: 'wo-020',
    assetId: 'pipe-012',           // 18th & Vine Sewer
    type: 'inspection',
    priority: 'medium',
    status: 'completed',
    title: 'CCTV Inspection — 18th & Vine Sewer Main',
    description: 'Consent decree compliance inspection. PACP grade 2 recorded. Light grease accumulation in two sections. Cleaning recommended at next maintenance cycle.',
    assignedTo: 'CCTV Unit 1',
    createdAt: '2025-10-20T08:00:00Z',
    dueDate: '2025-11-20',
    completedAt: '2025-11-14T16:00:00Z',
  },

  {
    id: 'wo-021',
    assetId: 'pipe-008',           // Westport Trunk
    type: 'repair',
    priority: 'high',
    status: 'completed',
    title: 'Hydro-Jetting & Root Removal — Westport Trunk',
    description: 'Hydraulic cleaning completed for 320 LF of trunk main. Root mass removed at two joints. Post-cleaning CCTV confirms clear barrel. Root foaming applied.',
    assignedTo: 'Crew Beta',
    createdAt: '2025-10-01T07:00:00Z',
    dueDate: '2025-10-20',
    completedAt: '2025-10-16T15:30:00Z',
  },

  {
    id: 'wo-022',
    assetId: 'mh-012',             // Liberty Memorial MH-12
    type: 'inspection',
    priority: 'low',
    status: 'completed',
    title: 'Routine Inspection — Liberty Memorial MH-12',
    description: 'Standard annual inspection. Grade 1 — no defects observed. Frame, cover, steps, and cone all in good condition. No action required.',
    assignedTo: 'Inspector R. Johnson',
    createdAt: '2025-09-15T08:00:00Z',
    dueDate: '2025-10-15',
    completedAt: '2025-10-08T11:00:00Z',
  },

  {
    id: 'wo-023',
    assetId: 'sd-008',             // Midtown Storm Drain
    type: 'inspection',
    priority: 'low',
    status: 'completed',
    title: 'Pre-Winter Inspection — Midtown SD-08',
    description: 'Pre-winter storm drain inspection and cleaning. Debris removed. Headwall in good condition. Grade 1 — no structural defects observed.',
    assignedTo: 'Inspector B. Chen',
    createdAt: '2025-10-05T09:00:00Z',
    dueDate: '2025-11-01',
    completedAt: '2025-10-28T14:00:00Z',
  },

  {
    id: 'wo-024',
    assetId: 'pipe-018',           // 18th & Vine Lateral
    type: 'inspection',
    priority: 'low',
    status: 'completed',
    title: 'Routine CCTV — 18th & Vine Lateral',
    description: 'Low-priority CCTV inspection on newer PVC lateral. Grade 1 — no defects. Pipe in excellent condition consistent with 2015 installation date.',
    assignedTo: 'CCTV Unit 2',
    createdAt: '2025-09-10T08:00:00Z',
    dueDate: '2025-10-10',
    completedAt: '2025-10-02T13:00:00Z',
  },

  {
    id: 'wo-025',
    assetId: 'pipe-009',           // River Market Collector
    type: 'repair',
    priority: 'medium',
    status: 'completed',
    title: 'Point Repair — River Market Collector, Crown Crack',
    description: 'Point repair completed on 8-inch crown crack at Station 5+12. Cured-in-place patch installed. Post-repair CCTV confirms full structural integrity restored.',
    assignedTo: 'Crew Alpha',
    createdAt: '2025-11-01T07:30:00Z',
    dueDate: '2025-11-30',
    completedAt: '2025-11-22T16:30:00Z',
  },

  {
    id: 'wo-026',
    assetId: 'mh-015',             // Westport MH-15
    type: 'repair',
    priority: 'medium',
    status: 'completed',
    title: 'Step Iron Replacement — Westport MH-15',
    description: 'Corroded step irons replaced with polypropylene-coated steel steps per OSHA confined space entry requirements. 8 steps replaced. Inspection and sign-off complete.',
    assignedTo: 'Crew Beta',
    createdAt: '2025-11-10T09:00:00Z',
    dueDate: '2025-12-10',
    completedAt: '2025-12-03T15:00:00Z',
  },

  {
    id: 'wo-027',
    assetId: 'sd-010',             // Westport Storm Drain
    type: 'repair',
    priority: 'low',
    status: 'completed',
    title: 'Catch Basin Cleaning — Westport SD-10',
    description: 'Annual catch basin cleaning completed. 0.8 CY of accumulated sediment removed. Outlet pipe clear. No structural defects observed.',
    assignedTo: 'Crew Alpha',
    createdAt: '2025-08-20T08:00:00Z',
    dueDate: '2025-09-20',
    completedAt: '2025-09-12T12:00:00Z',
  },

  {
    id: 'wo-028',
    assetId: 'pipe-025',           // Liberty Blvd Lateral
    type: 'inspection',
    priority: 'low',
    status: 'completed',
    title: 'Routine Inspection — Liberty Blvd Lateral',
    description: 'Routine consent decree compliance inspection. Grade 2 — minor surface deterioration at two joints. No immediate action. Re-inspect in 2 years.',
    assignedTo: 'Inspector R. Johnson',
    createdAt: '2025-07-15T08:00:00Z',
    dueDate: '2025-08-15',
    completedAt: '2025-08-10T14:00:00Z',
  },

  {
    id: 'wo-029',
    assetId: 'mh-020',             // Penn Valley MH-20
    type: 'inspection',
    priority: 'low',
    status: 'completed',
    title: 'MACP Inspection — Penn Valley MH-20',
    description: 'Scheduled annual MACP inspection. Grade 1 — no defects. Relatively new asset (2004 installation). Coating intact, bench clean.',
    assignedTo: 'Inspector B. Chen',
    createdAt: '2025-08-01T09:00:00Z',
    dueDate: '2025-09-01',
    completedAt: '2025-08-27T11:30:00Z',
  },

  {
    id: 'wo-030',
    assetId: 'sd-012',             // 18th & Vine Storm Drain
    type: 'inspection',
    priority: 'low',
    status: 'completed',
    title: 'Annual Inspection — 18th & Vine SD-12',
    description: 'Annual storm drain inspection per consent decree. Grade 2 — minor joint separation at outlet headwall. Seal with hydraulic cement at next maintenance window.',
    assignedTo: 'CCTV Unit 1',
    createdAt: '2025-09-01T08:00:00Z',
    dueDate: '2025-10-01',
    completedAt: '2025-09-24T15:00:00Z',
  },

]
