import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { PRICING } from '../../lib/constants'

export const Pricing = () => {
  return (
    <section id="pricing" className="px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          className="mx-auto mb-12 max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em] text-sky-700">
            Pricing
          </span>
          <h2 className="mb-4 text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Start free, upgrade when you’re ready
          </h2>
          <p className="text-lg leading-8 text-slate-600">
            No credit card needed to get started. Cancel Pro anytime.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`clay-card relative flex flex-col overflow-hidden p-8 ${plan.highlighted ? 'border-teal-200 bg-gradient-to-br from-[#197c92] via-[#229eb2] to-[#2264a1] text-white shadow-[16px_18px_36px_rgba(27,104,132,.28),-12px_-12px_28px_rgba(255,255,255,.72),inset_2px_2px_3px_rgba(255,255,255,.3)]' : 'bg-white/70 text-slate-800'}`}
            >
              {plan.highlighted && (
                <span className="mb-5 inline-flex -rotate-2 self-start rounded-full border border-white/50 bg-[#ffbd78] px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#6d3f16] shadow-[3px_4px_0_rgba(90,56,24,.16),inset_1px_1px_1px_rgba(255,255,255,.5)]">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <h3 className={`mb-1 text-2xl font-bold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                  {plan.name}
                </h3>
                <p className={`mb-4 text-sm ${plan.highlighted ? 'text-sky-50' : 'text-slate-600'}`}>
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-1">
                  <span className={`text-5xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-slate-900'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm ${plan.highlighted ? 'text-sky-50' : 'text-slate-600'}`}>
                    / {plan.period}
                  </span>
                </div>
              </div>

              <ul className="mb-8 flex-1 space-y-3 text-sm">
                {plan.features.map((feature: string) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check size={16} className={`mt-0.5 flex-shrink-0 ${plan.highlighted ? 'text-sky-100' : 'text-sky-600'}`} />
                    <span className={plan.highlighted ? 'text-sky-50' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? 'outline-light' : 'secondary'}
                className="w-full justify-center"
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
