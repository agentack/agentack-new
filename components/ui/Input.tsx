interface InputProps {
  label: string
  placeholder?: string
  error?: string
  disabled?: boolean
  type?: string
  id: string
  register?: any
}

export function Input({ label, placeholder, error, disabled, type = 'text', id, register }: InputProps) {
  return (
    <div>
      <label htmlFor={id} className="block font-body font-medium text-[13px] text-muted mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        {...register}
        className={`
          w-full bg-panel border rounded-[10px] px-[14px] py-3
          font-body font-normal text-[14px] text-soft
          placeholder:text-ghost
          focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent-border
          disabled:opacity-40 disabled:cursor-not-allowed
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