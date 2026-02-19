import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines clsx conditional class logic with tailwind-merge conflict resolution.
 * Use for every component that conditionally applies Tailwind classes.
 *
 * @example
 * cn('px-4 py-2', isActive && 'bg-surface-active text-primary', className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
