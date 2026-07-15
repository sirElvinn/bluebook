import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '../ui/Button'
import { HackerText } from '../ui/HackerText'
import { NAV_LINKS } from '../../lib/constants'

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-transparent px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="clay-nav mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2 no-underline">
          <img src="/Logo.svg" alt="SATitude Logo" className="h-12 w-auto sm:h-14" />
        </a>

        <div className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-sky-700"
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
          className="rounded-full p-2 text-slate-600 transition-colors hover:bg-white/70 hover:text-sky-700 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="clay-card mx-auto mt-3 flex flex-col gap-4 px-6 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-semibold text-slate-700 transition-colors hover:text-sky-700"
              onClick={() => setMenuOpen(false)}
            >
              <HackerText text={link.label} />
            </a>
          ))}
          <div className="flex flex-col gap-3 border-t border-white/70 pt-2">
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
