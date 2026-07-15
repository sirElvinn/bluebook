import { motion } from 'framer-motion'
import { BookOpenCheck, ChartNoAxesCombined, Sparkles, Trophy } from 'lucide-react'
import { STATS } from '../../lib/constants'

const ICONS = [Trophy, BookOpenCheck, ChartNoAxesCombined, Sparkles]

export const Stats = () => (
  <section className="relative z-20 -mt-7 px-4 sm:px-6 lg:px-8" aria-label="SATitude results">
    <div className="mx-auto max-w-7xl">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat, i) => {
          const Icon = ICONS[i]
          return <motion.div key={stat.value} className="clay-card group px-5 py-5 text-center transition-transform duration-200 hover:-translate-y-1 sm:px-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.08 }}>
            <div className="clay-icon mx-auto mb-3 h-11 w-11 bg-gradient-to-br from-sky-100 via-cyan-50 to-white text-teal-700 transition-transform duration-200 group-hover:rotate-6"><Icon size={21} /></div>
            <div className="mb-1 text-3xl font-extrabold tracking-[-.05em] text-[#167f94] lg:text-4xl">{stat.value}</div>
            <div className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-slate-500">{stat.label}</div>
          </motion.div>
        })}
      </div>
    </div>
  </section>
)
