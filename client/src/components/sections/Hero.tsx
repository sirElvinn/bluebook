import { ArrowRight, Star } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'

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

          <div className="relative">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">

              <div className="bg-blue-700 px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white/20 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">B</span>
                  </div>
                  <span className="text-white font-semibold text-sm">Digital SAT Practice Test</span>
                </div>
                <span className="text-blue-200 text-sm font-medium">32:14 remaining</span>
              </div>

              <div className="p-6">
                <div className="mb-5">
                  <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Question 12 of 27 · Math</span>
                  <p className="mt-3 text-gray-800 leading-relaxed text-sm">
                    A store sells notebooks for $3.50 each and pens for $1.25 each. Maya buys a total of 8 items and spends $19.00. How many notebooks did she buy?
                  </p>
                </div>

                <div className="space-y-2.5 mb-5">
                  {['2', '3', '4', '5'].map((opt, i) => (
                    <div
                      key={opt}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border text-sm cursor-pointer transition-all ${
                        i === 1
                          ? 'border-blue-600 bg-blue-50 text-blue-700 font-medium'
                          : 'border-gray-200 text-gray-700 hover:border-blue-300'
                      }`}
                    >
                      <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                        i === 1 ? 'border-blue-600 bg-blue-600' : 'border-gray-300'
                      }`}>
                        {i === 1 && <div className="w-2 h-2 rounded-full bg-white" />}
                      </div>
                      {opt}
                    </div>
                  ))}
                </div>

                <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-blue-800 mb-1">AI Tutor</p>
                      <p className="text-xs text-blue-700 leading-relaxed">
                        Try setting up a system of two equations. Let <em>n</em> = notebooks and <em>p</em> = pens. You know <em>n + p = 8</em> and <em>3.5n + 1.25p = 19</em>...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl border border-gray-200 shadow-lg px-4 py-3">
              <p className="text-xs text-gray-500 mb-0.5">Score prediction</p>
              <p className="text-2xl font-bold text-blue-700">1490</p>
              <p className="text-xs text-green-600 font-medium">↑ +80 from last test</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}