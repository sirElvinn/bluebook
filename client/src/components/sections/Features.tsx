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
    <section id="features" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-10 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
            Everything you need
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Built around how the real SAT works
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Not generic test prep. SATitude is built specifically for the digital SAT format — adaptive, section-based, and timed exactly like the real thing.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`clay-card flex flex-col justify-center p-8 transition-all duration-200 hover:-translate-y-1 ${i === 0 ? 'md:col-span-2 md:flex-row md:items-center md:gap-8' : ''}`}
            >
              <div className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-[24px] bg-gradient-to-br from-sky-100 via-cyan-50 to-white text-sky-700 shadow-[8px_8px_20px_rgba(38,100,158,0.16),-8px_-8px_20px_rgba(255,255,255,0.9)] ${i === 0 ? 'mb-0 md:h-20 md:w-20' : 'mb-5'}`}>
                {i === 0 ? <BookOpen size={40} /> : ICONS[feature.icon]}
              </div>
              <div>
                <h3 className={`mb-2 font-bold text-slate-900 ${i === 0 ? 'text-2xl' : 'text-xl'}`}>{feature.title}</h3>
                <p className={`leading-7 text-slate-600 ${i === 0 ? 'text-base' : 'text-sm'}`}>{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}