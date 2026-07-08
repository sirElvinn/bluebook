import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      {/* Main Content */}
      <div className="flex-1 flex items-center justify-between px-8 md:px-16 py-16">
        {/* Left Section */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-8">
            <span className="text-blue-600 font-semibold text-sm tracking-wider">
              ERROR • 404
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-tight">
            Looks Like Your
            <br />
            <span className="text-blue-600">Navigator Took an L</span>
          </h1>

          {/* Description */}
          <p className="text-slate-600 text-lg mb-8 leading-relaxed">
            It looks like this page couldn't score high enough to stay in our
            index! Don't worry, even the sharpest minds lose their way. Let's
            get you back on track for a perfect score.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Link 
              to="/"
              className="inline-block bg-slate-900 hover:bg-slate-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Back to home →
            </Link>
            <Link 
              to="/practice"
              className="inline-block border-2 border-slate-900 text-slate-900 hover:bg-slate-50 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Try a practice test
            </Link>
          </div>
        </div>

        {/* Right Section - Illustration */}
        <div className="flex flex-1 justify-center items-center mt-8 md:mt-0">
          <div className="relative w-[750px] h-[750px] bg-transparent">
            {/* Mascot illustration */}
            <img
              src="/models/404-mascot-updated.png"
              alt="404 Mascot"
              className="w-full h-full object-contain border-none outline-none"
              style={{ border: 'none', outline: 'none', boxShadow: 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-8">
        <div className="flex justify-center items-center gap-8">
          <span className="text-slate-400 text-sm">Follow us on:</span>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium"
            >
              Facebook
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium"
            >
              Twitter
            </a>
            <a
              href="#"
              className="text-slate-400 hover:text-slate-600 transition-colors text-sm font-medium"
            >
              YouTube
            </a>
          </div>
        </div>
        <div className="text-center text-slate-400 text-sm mt-6">
          © 2026 SATitude. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
