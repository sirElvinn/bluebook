import { Link } from 'react-router-dom'
import { SignIn } from '@clerk/clerk-react'

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl bg-white ring-1 ring-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="p-10 lg:p-14">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Welcome back</p>
              <h1 className="mt-4 text-3xl font-bold text-slate-950 sm:text-4xl">Sign in to SATitude</h1>
              <p className="mt-4 text-sm leading-6 text-slate-600">Start practicing faster and keep your progress synced across sessions.</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <SignIn routing="path" path="/sign-in" />
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-between bg-blue-700 p-10 text-white">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-blue-200">New to SATitude?</p>
              <h2 className="mt-6 text-3xl font-bold">Create your account</h2>
              <p className="mt-4 text-sm leading-6 text-blue-100">
                Sign up in seconds and access practice tests, analytics, and the AI tutor.
              </p>
            </div>
            <div>
              <Link
                to="/sign-up"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-blue-700 transition hover:bg-slate-100"
              >
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
