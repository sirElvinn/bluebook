import { motion } from 'framer-motion'
import { ArrowRight, Star } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import ModelViewer from '../ModelViewer'

export const Hero = () => (
  <section className="relative flex min-h-[calc(100svh-80px)] items-center overflow-hidden" aria-labelledby="hero-title">
    <div className="float-slower pointer-events-none absolute left-[48%] top-[18%] h-5 w-5 rounded-full bg-white/80 shadow-[4px_5px_10px_rgba(80,125,131,.16),-3px_-3px_7px_white]" />

    <div className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-12 lg:py-6 xl:py-10">
      <div className="z-10 max-w-2xl lg:pr-8">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Badge variant="blue" className="mb-5">Digital SAT · Bluebook-style practice</Badge>
          <h1 id="hero-title" className="mb-5 text-4xl font-extrabold leading-[0.92] tracking-[-0.055em] text-[#18394d] drop-shadow-[0_3px_0_rgba(255,255,255,.75)] sm:text-5xl lg:text-6xl xl:text-[4.35rem]">
            Make your <span className="text-teal-700">Digital SAT</span> prep feel brilliantly clear.
          </h1>
          <p className="mb-7 max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Realistic Bluebook-style tests, an AI tutor that explains every answer, and analytics that show you exactly what to practice next.
          </p>
          <div className="mb-7 flex flex-col gap-3 sm:flex-row">
            <Button variant="primary" size="lg">Start practicing free <ArrowRight size={20} /></Button>
            <Button variant="secondary" size="lg">See how it works</Button>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2" aria-hidden="true">
              {['PK', 'MW', 'AT', 'JS'].map((initials) => <div key={initials} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-sky-100 to-cyan-50 text-[10px] font-bold text-sky-700 shadow-sm">{initials}</div>)}
            </div>
            <div className="flex items-center gap-1.5" aria-label="Rated five stars by over fifty thousand students">
              <div className="flex" aria-hidden="true">{[1, 2, 3, 4, 5].map((s) => <Star key={s} size={14} className="fill-amber-400 text-amber-400" />)}</div>
              <span className="text-sm text-slate-600"><strong className="font-bold text-slate-900">50,000+</strong> students improved their score</span>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.94 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }} className="relative z-10 ml-4 hidden w-full max-w-[600px] items-center justify-center lg:flex xl:ml-8">
        <div className="absolute inset-0 -z-10 rounded-full bg-sky-200/45 blur-[85px]" />
        <div className="float-soft w-full max-w-[520px] drop-shadow-[0_30px_22px_rgba(33,87,111,.14)]"><ModelViewer /></div>
      </motion.div>
    </div>
  </section>
)
