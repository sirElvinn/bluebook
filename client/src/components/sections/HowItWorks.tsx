import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { HOW_IT_WORKS } from '../../lib/constants'

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
            How it works
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From sign-up to score improvement
          </h2>
          <p className="text-gray-600 text-lg">
            Most students see measurable improvement within two weeks.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {HOW_IT_WORKS.map((step, i) => (
            <motion.div 
              key={step.step} 
              className="relative text-left group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {i < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[3.5rem] w-[calc(100%-3.5rem+2rem)] h-[2px] border-t-2 border-dashed border-gray-200 -z-10" />
              )}
              <div className="inline-flex w-12 h-12 rounded-xl bg-blue-50 items-center justify-center mb-6 border border-blue-100 group-hover:bg-blue-600 group-hover:border-blue-600 transition-colors shadow-sm">
                <span className="text-blue-700 font-bold text-lg group-hover:hidden">{i + 1}</span>
                <Check className="hidden group-hover:block text-white" size={20} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}