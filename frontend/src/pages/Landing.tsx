import { Button } from '../components/Button';

const Landing = () => {
  return (
    <div className="bg-[#f8f9fa] text-[#191c1d] min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white sticky top-0 z-50 border-b">
        <nav className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-[#003f87]">SAT Prep Pro</div>
          
          <div className="hidden md:flex gap-8">
            <a href="#" className="font-medium text-[#003f87] border-b-2 border-[#003f87]">Practice Tests</a>
            <a href="#" className="hover:text-[#003f87]">Question Bank</a>
            <a href="#" className="hover:text-[#003f87]">AI Tutor</a>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:block">Log In</button>
            <Button>Start Practicing</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-24 academic-grid">
        <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm mb-6">
              New Digital Format Ready
            </span>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-[#003f87] mb-6">
              Master the Digital SAT with Confidence.
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              The most realistic practice experience, powered by AI tutoring and official Bluebook-style testing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button>Start Practicing for Free</Button>
              <Button variant="outline">Explore Curriculum</Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-3">
                {/* You can add avatar images later */}
              </div>
              <span>Join 50,000+ successful students</span>
            </div>
          </div>

          <div>
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgF_WreHKzVch0J3G84ZwZ34SrHvV4S1RVFqcQxuy7To932VwuHsFmAHvpbuSoIwpI4OL9JyM4U3C-5cu6twcJgGzlBp9MN979h9MIFoQ7ACNXT7piUeHekSD6m6e5kzoVzRrzbto-I7vIESQttvfxMGh52yZg5bkPLCBQ2XNyEIE8OHq0aPGHIN_rzYQs1f2Np2S1I2mUrRanIvBSA8JDXMbOx9kMAUENhyPUm1SJMr5Q14JItUIp" 
              alt="SAT Practice"
              className="rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* More sections coming in next message if you want */}
      {/* For now, this gets you started */}
    </div>
  );
};

export default Landing;