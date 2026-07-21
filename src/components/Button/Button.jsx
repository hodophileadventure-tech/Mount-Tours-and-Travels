import { forwardRef } from 'react'
import { ArrowRight } from 'lucide-react'

const buttonVariants = {
  primary: 'bg-[#d9a84e] text-[#111827] hover:bg-[#c5902f]',
  secondary: 'border border-[#d9a84e] text-[#d9a84e] hover:bg-[#d9a84e]/10',
  ghost: 'text-[#111827] hover:bg-[#f3f4f6]',
}

const Button = forwardRef(function Button(
  { children, variant = 'primary', className = '', icon = false, ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={[
        'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#d9a84e] focus:ring-offset-2',
        buttonVariants[variant] ?? buttonVariants.primary,
        className,
      ].join(' ')}
      {...props}
    >
      <span className="pointer-events-none absolute inset-0 scale-x-0 rounded-full bg-white/15 transition-transform duration-500 group-hover:scale-x-100" />
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon ? <ArrowRight size={18} /> : null}
      </span>
    </button>
  )
})

export default Button
