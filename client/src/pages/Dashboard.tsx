import { useUser, useClerk } from '@clerk/clerk-react'
import { useSync } from '../hooks/useSync'
import { BookOpen, BarChart3, BrainCircuit, Target, LogOut, ChevronRight, Flame } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Dashboard() {
  useSync()

  const { user } = useUser()
  const { signOut } = useClerk()

  const firstName = user?.firstName || 'there'

  const stats = [
    { label: 'Tests Taken', value: '0', icon: BookOpen, color: 'bg-blue-50 text-blue-700' },
    { label: 'Questions Answered', value: '0', icon: Target, color: 'bg-purple-50 text-purple-700' },
    { label: 'Current Streak', value: '0d', icon: Flame, color: 'bg-orange-50 text-orange-700' },
    { label: 'Avg. Score', value: '—', icon: BarChart3, color: 'bg-green-50 text-green-700' },
  ]

  const quickActions = [
    {
      title: 'Take a Practice Test',
      description: 'Full-length Bluebook-style exam with adaptive difficulty.',
      icon: BookOpen,
      href: '/practice/test',
      accent: 'border-l-blue-600',
    },
    {
      title: 'Question Bank',
      description: 'Drill specific topics, skills, and difficulty levels.',
      icon: Target,
      href: '/practice/questions',
      accent: 'border-l-purple-600',
    },
    {
      title: 'AI Tutor',
      description: 'Ask anything about a concept or get a question explained.',
      icon: BrainCircuit,
      href: '/tutor',
      accent: 'border-l-indigo-600',
    },
    {
      title: 'My Analytics',
      description: 'See your score trends and find your weak spots.',
      icon: BarChart3,
      href: '/analytics',
      accent: 'border-l-green-600',
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Nav */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-blue-700">SAT</span>
            <span className="text-xl font-bold text-gray-900">itude</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600 hidden sm:block">
              {user?.primaryEmailAddress?.emailAddress}
            </span>
            <button
              onClick={() => signOut({ redirectUrl: '/' })}
              className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              <LogOut size={16} />
              <span className="hidden sm:inline">Sign out</span>
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-10">
        {/* Welcome */}
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {firstName} 👋
          </h1>
          <p className="mt-2 text-gray-500">
            Ready to practice? Let's get your score moving.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {stats.map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="bg-white rounded-2xl border border-gray-200 p-5 flex items-start gap-4"
            >
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${color}`}>
                <Icon size={20} />
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">{value}</p>
                <p className="text-xs text-gray-500 mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          What would you like to do?
        </h2>
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {quickActions.map(({ title, description, icon: Icon, href, accent }) => (
            <Link
              key={title}
              to={href}
              className={`bg-white rounded-2xl border border-gray-200 border-l-4 ${accent} p-6 flex items-center gap-5 hover:shadow-md hover:border-gray-300 transition-all duration-200 group`}
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-700 shrink-0 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                <Icon size={22} />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500 mt-0.5">{description}</p>
              </div>
              <ChevronRight size={18} className="text-gray-400 group-hover:text-blue-600 transition-colors shrink-0" />
            </Link>
          ))}
        </div>

        {/* Getting Started Banner */}
        <div className="bg-blue-700 rounded-2xl p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-blue-200 text-sm font-semibold uppercase tracking-widest mb-2">
              Get Started
            </p>
            <h3 className="text-2xl font-bold text-white">
              Take your first practice test
            </h3>
            <p className="text-blue-200 mt-2 text-sm max-w-md">
              Your diagnostic test sets your baseline score and creates a personalised study plan.
            </p>
          </div>
          <Link
            to="/practice/test"
            className="shrink-0 inline-flex items-center gap-2 bg-white text-blue-700 px-6 py-3 rounded-full font-semibold text-sm hover:bg-blue-50 transition-colors"
          >
            Start test
            <ChevronRight size={16} />
          </Link>
        </div>
      </main>
    </div>
  )
}
