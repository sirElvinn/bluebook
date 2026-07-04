import { HOW_IT_WORKS } from '../../lib/constants'

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
            How it works
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            From sign-up to score improvement
          </h2>
          <p className="text-gray-500 text-lg">
            Most students see measurable improvement within two weeks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {HOW_IT_WORKS.map((step, i) => (
            <div key={step.step} className="relative text-center">
              <div className="inline-flex w-16 h-16 rounded-full bg-blue-700 items-center justify-center mb-6 mx-auto">
                <span className="text-white font-bold text-lg">{i + 1}</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}