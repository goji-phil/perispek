export function TopBar() {
  return (
    <header
      className="flex items-center px-6 border-b border-border bg-surface shrink-0"
      style={{ height: 'var(--topbar-height)' }}
    >
      <span className="text-sm font-medium text-foreground-muted">
        Wastewater Infrastructure Management
      </span>
    </header>
  )
}
