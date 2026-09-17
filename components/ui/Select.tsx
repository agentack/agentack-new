import { ChevronDown } from 'lucide-react'

interface SelectProps {
  label: string
  options: readonly string[]
  placeholder?: string
  error?: string
  disabled?: boolean
  id: string
  register?: any
}

export function Select({ label, options, placeholder, error, disabled, id, register }: SelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-body font-medium text-[13px] text-muted mb-1.5">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          disabled={disabled}
          defaultValue=""
          {...register}
          className={`
            appearance-none w-full bg-panel border rounded-[10px] px-[14px] py-3 pr-10
            font-body font-normal text-[14px] text-soft
            focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent-border
            disabled:opacity-40 disabled:cursor-not-allowed
            cursor-pointer transition-all duration-150
            ${error ? 'border-red-danger' : 'border-border-soft'}
          `}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option} value={option} className="bg-panel text-soft">
              {option}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ghost" />
      </div>
      {error && (
        <p className="text-red-danger text-[12px] mt-1">{error}</p>
      )}
    </div>
  )
}