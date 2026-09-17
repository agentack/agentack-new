interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  company: string
  avatar?: string
}

export function TestimonialCard({ quote, name, role, company, avatar }: TestimonialCardProps) {
  return (
    <div className="relative rounded-card bg-panel border border-border-soft border-l-2 border-l-accent p-6 shadow-card">
      <div className="font-display text-[44px] leading-none text-accent opacity-25 absolute top-3 left-5 select-none">
        &ldquo;
      </div>

      <p className="font-body font-normal text-[16px] leading-[1.7] text-soft relative z-10">
        {quote}
      </p>

      <div className="mt-5 flex items-center gap-3">
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            className="w-9 h-9 rounded-full object-cover border border-accent-border-soft"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-accent-tint border border-accent-border-soft flex items-center justify-center text-accent font-display font-medium text-[14px]">
            {name.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <div className="font-body font-medium text-[14px] text-bright">
            {name}
          </div>
          <div className="font-body font-normal text-[13px] text-muted">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  )
}