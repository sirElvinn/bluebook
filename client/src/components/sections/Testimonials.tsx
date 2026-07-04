import { TESTIMONIALS } from '../../lib/constants'

export const Testimonials = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real students, real score gains
          </h2>
          <p className="text-gray-500 text-lg">
            Hear from students who improved their SAT scores with Bluebook.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm">
              <p className="text-gray-600 leading-relaxed mb-6">“{testimonial.text}”</p>
              <div className="text-sm font-semibold text-gray-900">{testimonial.name}</div>
              <div className="text-sm text-blue-700">{testimonial.score}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}