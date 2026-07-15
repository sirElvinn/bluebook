import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../lib/constants'

export const Testimonials = () => {
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
            Testimonials
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Real students, real score gains
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            Hear from students who improved their SAT scores with SATitude.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="clay-card p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="mb-6 text-base leading-8 text-slate-600">“{testimonial.text}”</p>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-100 to-cyan-50 text-sm font-bold text-sky-700 shadow-sm">
                  {testimonial.name
                    .split(' ')
                    .map((name) => name[0])
                    .join('')}
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm font-medium text-sky-700">{testimonial.score}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}