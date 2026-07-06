import { ArrowRight, Star } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import ModelViewer from '../ModelViewer'

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-24">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          opacity: 0.6,
        }}
      />

      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/4 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          <div>
            <Badge variant="blue" className="mb-6">
              Digital SAT · New Format · 2025
            </Badge>

            <h1 className="text-5xl lg:text-[3.5rem] font-bold leading-[1.1] tracking-tight text-gray-900 mb-6">
              Score higher on the{' '}
              <span className="text-blue-700">Digital SAT</span>{' '}
              — or your money back.
            </h1>

            <p className="text-lg text-gray-500 leading-relaxed mb-10 max-w-[480px]">
              Realistic Bluebook-style practice tests, an AI tutor that explains every answer, and analytics that show you exactly what to study next.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button variant="primary" size="lg">
                Start practicing free
                <ArrowRight size={20} />
              </Button>
              <Button variant="outline" size="lg">
                See how it works
              </Button>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['PK', 'MW', 'AT', 'JS'].map((initials) => (
                  <div
                    key={initials}
                    className="w-8 h-8 rounded-full bg-blue-100 border-2 border-white flex items-center justify-center text-[10px] font-bold text-blue-700"
                  >
                    {initials}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1,2,3,4,5].map((s) => (
                    <Star key={s} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  <strong className="text-gray-900">50,000+</strong> students improved their score
                </span>
              </div>
            </div>
          </div>

          <ModelViewer />

        </div>
      </div>
    </section>
  )
}