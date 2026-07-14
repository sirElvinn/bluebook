import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'

export const CTA = () => {
  return (
    <section className="py-24 bg-blue-700">
      <motion.div 
        className="max-w-3xl mx-auto px-6 text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Your SAT is coming up. Start today.
        </h2>
        <p className="text-blue-200 text-lg mb-10 leading-relaxed">
          Most students improve by 80–150 points with 4 weeks of consistent practice. The sooner you start, the more time you have.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
          <Link to="/sign-up">
            <Button
              variant="secondary"
              size="lg"
              className="group shadow-lg hover:shadow-xl transition-all"
            >
              Start for free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
          <Button
            variant="outline-light"
            size="lg"
            className="transition-all"
          >
            View pricing
          </Button>
        </div>
        <p className="mt-6 text-blue-300 text-sm">
          No credit card required · Cancel anytime · 7-day free trial on Pro
        </p>
      </motion.div>
    </section>
  )
}