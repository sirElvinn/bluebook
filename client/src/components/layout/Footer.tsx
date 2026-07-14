import { HackerText } from '../ui/HackerText'

const PRODUCT_LINKS = ['Practice Tests', 'Question Bank', 'AI Tutor', 'Analytics']
const COMPANY_LINKS = ['About', 'Blog', 'Careers', 'Contact']
const LEGAL_LINKS = ['Privacy Policy', 'Terms of Service', 'Cookie Policy']

export const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">

          <div className="col-span-2 md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4 no-underline">
              <img src="/Logo.svg" alt="SATitude Logo" className="h-10 w-auto" />
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              The most realistic digital SAT prep, powered by AI tutoring.
            </p>
          </div>

          <div>
            <HackerText as="h4" text="Product" className="text-white text-sm font-semibold mb-4" />
            <ul className="space-y-3 text-sm">
              {PRODUCT_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="hover:text-white transition-colors">
                    <HackerText text={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <HackerText as="h4" text="Company" className="text-white text-sm font-semibold mb-4" />
            <ul className="space-y-3 text-sm">
              {COMPANY_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="hover:text-white transition-colors">
                    <HackerText text={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <HackerText as="h4" text="Legal" className="text-white text-sm font-semibold mb-4" />
            <ul className="space-y-3 text-sm">
              {LEGAL_LINKS.map((label) => (
                <li key={label}>
                  <a href="#" className="hover:text-white transition-colors">
                    <HackerText text={label} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">© 2026 SATitude. Not affiliated with College Board.</p>
          <p className="text-sm text-gray-600">Built for students, by students.</p>
        </div>
      </div>
    </footer>
  )
}