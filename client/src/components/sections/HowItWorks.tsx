import { motion } from 'framer-motion'
import { HOW_IT_WORKS } from '../../lib/constants'

export const HowItWorks = () => {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
            How it works
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            From sign-up to score improvement
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Most students see measurable improvement within two weeks.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div
              key={step.step}
              className="clay-card relative p-8 text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="absolute left-[calc(100%-0.5rem)] top-10 hidden h-[2px] w-6 md:block" />
              )}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-[20px] bg-gradient-to-br from-sky-100 via-cyan-50 to-white text-lg font-bold text-sky-700 shadow-[8px_8px_20px_rgba(38,100,158,0.16),-8px_-8px_18px_rgba(255,255,255,0.9)]">
                {i + 1}
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="leading-7 text-slate-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}