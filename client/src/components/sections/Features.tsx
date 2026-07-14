import { motion } from 'framer-motion'
import { BookOpen, BrainCircuit, BarChart3, Target } from 'lucide-react'
import { FEATURES } from '../../lib/constants'

const ICONS: Record<string, React.ReactNode> = {
  exam: <BookOpen size={32} />,
  brain: <BrainCircuit size={32} />,
  chart: <BarChart3 size={32} />,
  target: <Target size={32} />,
}

export const Features = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
            Everything you need
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Built around how the real SAT works
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Not generic test prep. Satitude is built specifically for the digital SAT format — adaptive, section-based, and timed exactly like the real thing.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl p-8 border border-gray-200 border-l-4 border-l-transparent hover:border-blue-200 hover:border-l-blue-600 hover:shadow-md transition-all duration-200 flex flex-col justify-center ${i === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-8' : ''}`}
            >
              <div className={`rounded-xl bg-blue-50 flex items-center justify-center text-blue-700 shrink-0 ${i === 0 ? 'w-20 h-20 mb-0' : 'w-14 h-14 mb-5'}`}>
                {i === 0 ? <BookOpen size={40} /> : ICONS[feature.icon]}
              </div>
              <div>
                <h3 className={`font-semibold text-gray-900 mb-2 ${i === 0 ? 'text-2xl' : 'text-lg'}`}>{feature.title}</h3>
                <p className={`text-gray-600 leading-relaxed ${i === 0 ? 'text-base' : 'text-sm'}`}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}