import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { PRICING } from '../../lib/constants'

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
            Pricing
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Start free, upgrade when you're ready
          </h2>
          <p className="text-gray-600 text-lg">
            No credit card needed to get started. Cancel Pro anytime.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`rounded-2xl p-8 border-2 flex flex-col ${
                plan.highlighted
                  ? 'border-blue-700 bg-blue-700 text-white'
                  : 'border-gray-200 bg-white text-gray-900'
              }`}
            >
              {plan.highlighted && (
                <span className="inline-block self-start bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-200' : 'text-gray-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-blue-200' : 'text-gray-600'}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-blue-600'}`} />
                    <span className={plan.highlighted ? 'text-blue-100' : 'text-gray-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'outline' : 'primary'}
                className={plan.highlighted
                  ? 'border-white text-white hover:bg-white hover:text-blue-700 w-full justify-center'
                  : 'w-full justify-center'}
              >
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}