import { cn } from '@/lib/utils/cn'
import type { ButtonHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
}

const variantClasses: Record<Variant, string> = {
  primary:   'bg-primary text-white hover:bg-[#4a4f7a] active:scale-95',
  secondary: 'border border-primary text-primary hover:bg-primary hover:text-white active:scale-95',
  ghost:     'text-primary hover:bg-primary/10 active:scale-95',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-6 py-3 text-[10px]',
  md: 'px-10 py-5 text-[10px]',
  lg: 'px-14 py-6 text-xs',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'font-bold uppercase tracking-widest transition-all duration-200 font-headline disabled:opacity-50 disabled:cursor-not-allowed',
        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  )
}
