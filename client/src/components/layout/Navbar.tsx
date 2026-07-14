import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { HackerText } from '../ui/HackerText'
import { NAV_LINKS } from '../../lib/constants'


export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

        <a href="/" className="flex items-center gap-2 no-underline">
          <img src="/Logo.svg" alt="SATitude Logo" className="h-14 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-600 hover:text-blue-700 transition-colors"
            >
              <HackerText text={link.label} />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/sign-in">
            <Button variant="ghost" size="sm"><HackerText text="Log in" /></Button>
          </Link>
          <Link to="/sign-up">
            <Button variant="primary" size="sm"><HackerText text="Start for free" /></Button>
          </Link>
        </div>

        <button
          className="md:hidden p-2 text-gray-600 hover:text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-gray-700 hover:text-blue-700 py-1"
              onClick={() => setMenuOpen(false)}
            >
              <HackerText text={link.label} />
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-gray-100">
            <Link to="/sign-in">
              <Button variant="outline" size="sm"><HackerText text="Log in" /></Button>
            </Link>
            <Link to="/sign-up">
              <Button variant="primary" size="sm"><HackerText text="Start for free" /></Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}