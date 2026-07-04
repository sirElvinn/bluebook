import { STATS } from '../../lib/constants'

export const Stats = () => {
  return (
    <section className="bg-blue-700 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}