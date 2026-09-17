interface TextareaProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  rows?: number
  id: string
  register?: any
}

export function Textarea({ label, placeholder, error, disabled, rows = 4, id, register }: TextareaProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-body font-medium text-[13px] text-muted mb-1.5">
        {label}
      </label>
      <textarea
        id={id}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
        className={`
          w-full bg-panel border rounded-[10px] px-[14px] py-3
          font-body font-normal text-[14px] text-soft
          placeholder:text-ghost
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent-border
          disabled:opacity-40 disabled:cursor-not-allowed
          resize-y
          transition-all duration-150
          ${error ? 'border-red-danger' : 'border-border-soft'}
        `}
      />
      {error && (
        <p className="text-red-danger text-[12px] mt-1">{error}</p>
      )}
    </div>
  )
}