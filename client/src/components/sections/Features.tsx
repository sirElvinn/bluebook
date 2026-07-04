import { BookOpen, BrainCircuit, BarChart3, Target } from 'lucide-react'
import { FEATURES } from '../../lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  exam: <BookOpen size={22} />,
  brain: <BrainCircuit size={22} />,
  chart: <BarChart3 size={22} />,
  target: <Target size={22} />,
}

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
            Everything you need
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built around how the real SAT works
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Not generic test prep. Bluebook is built specifically for the digital SAT format — adaptive, section-based, and timed exactly like the real thing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-blue-200 hover:shadow-md transition-all duration-200"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 mb-5">
                {ICONS[feature.icon]}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}