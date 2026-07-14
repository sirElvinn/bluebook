import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useAuth } from '@clerk/clerk-react'
import Landing from './pages/Landing'
import NotFound from './pages/NotFound'
import SignInPage from './pages/auth/SignIn'
import SignUpPage from './pages/auth/SignUp'
import Dashboard from './pages/Dashboard'
import { ProtectedRoute } from './components/ProtectedRoute'

function App() {
  const { isSignedIn } = useAuth()

  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />

        {/* Auth routes — redirect to dashboard if already signed in */}
        <Route
          path="/sign-in/*"
          element={
            isSignedIn
              ? <Dashboard />
              : <SignInPage />
          }
        />
        <Route
          path="/sign-up/*"
          element={
            isSignedIn
              ? <Dashboard />
              : <SignUpPage />
          }
        />

        {/* Protected routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App