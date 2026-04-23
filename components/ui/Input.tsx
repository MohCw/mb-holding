import { cn } from '@/lib/utils/cn'
import type { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
}

export function Input({ label, error, className, id, ...props }: InputProps) {
  return (
    <div className="group flex flex-col gap-1">
      <label
        htmlFor={id}
        className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold group-focus-within:text-primary transition-colors"
      >
        {label}
      </label>
      <input
        id={id}
        className={cn(
          'w-full bg-transparent border-t-0 border-x-0 border-b border-[#acb3b4] focus:border-primary focus:ring-2 focus:ring-primary focus:ring-offset-1 px-0 py-3 text-base font-medium placeholder:text-[#acb3b4] uppercase tracking-wide transition-all outline-none font-body',
          error && 'border-red-400',
          className,
        )}
        {...props}
      />
      {error && (
        <p className="text-[10px] text-red-500 uppercase tracking-wider font-bold">{error}</p>
      )}
    </div>
  )
}
