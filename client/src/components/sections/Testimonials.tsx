import { motion } from 'framer-motion'
import { TESTIMONIALS } from '../../lib/constants'

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real students, real score gains
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from students who improved their SAT scores with Satitude.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div 
              key={testimonial.name} 
              className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <p className="text-gray-600 leading-relaxed mb-6">“{testimonial.text}”</p>
              <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-blue-700">{testimonial.score}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}