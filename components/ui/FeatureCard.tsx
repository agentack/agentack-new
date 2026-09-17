interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  accent?: 'green' | 'teal'
}

export function FeatureCard({ icon, title, description, accent = 'teal' }: FeatureCardProps) {
  const iconBg = accent === 'green'
    ? 'bg-[rgba(90,58,216,0.12)] text-accent-strong border-[rgba(90,58,216,0.24)]'
    : 'bg-[rgba(244,199,90,0.08)] text-teal-primary border-[rgba(244,199,90,0.2)]'
  const iconColor = accent === 'green' ? 'text-accent-strong' : 'text-teal-primary'

  return (
    <div className="group h-full bg-panel border border-border-soft rounded-card p-6 shadow-card transition-all duration-200 hover:border-accent-border-soft hover:bg-lifted">
      <div className={`w-9 h-9 rounded-[10px] border flex items-center justify-center ${iconBg} transition-transform duration-200 group-hover:scale-105`}>
        <span className={iconColor}>{icon}</span>
      </div>
      <h3 className="font-body font-medium text-[15px] text-bright mt-4">
        {title}
      </h3>
      <p className="font-body font-normal text-[14px] leading-[1.65] text-muted mt-1.5">
        {description}
      </p>
    </div>
  )
}