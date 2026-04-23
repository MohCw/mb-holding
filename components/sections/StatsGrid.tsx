interface Stat {
  valeur: string
  label: string
}

interface StatsGridProps {
  stats: Stat[]
}

export function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#acb3b4]/20">
      {stats.map((stat) => (
        <div key={stat.label}>
          <p className="text-3xl font-black text-primary font-headline">{stat.valeur}</p>
          <p className="text-[10px] uppercase tracking-widest text-[#44475f] mt-1 font-body">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  )
}
