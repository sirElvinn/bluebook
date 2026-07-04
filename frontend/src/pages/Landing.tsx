import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { Hero } from '../components/sections/Hero'
import { Stats } from '../components/sections/Stats'
import { Features } from '../components/sections/Features'
import { HowItWorks } from '../components/sections/HowItWorks'
import { Testimonials } from '../components/sections/Testimonials'
import { Pricing } from '../components/sections/Pricing'
import { CTA } from '../components/sections/CTA'

const Landing = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default Landing