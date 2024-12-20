import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import CalorieTracker from './pages/CalorieTracker'
import './App.css'
import Login from './pages/Login';
import Signup from './pages/Signup';
import ForgotPassword from './pages/ForgotPassword';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import ProfileSetup from './pages/ProfileSetup';
import Workouts from './pages/Workouts';
import Favorites from './pages/Favorites';
import TrackingPage from './pages/TrackingPage';
import TrendsPage from './pages/TrendsPage';
import WorkoutLogging from './pages/WorkoutLogging';
import Settings from './pages/Settings';
import WorkoutPlans from './pages/WorkoutPlans';
import NotFound from './pages/NotFound';
import EmailVerification from './pages/EmailVerification';
import EmailVerified from './pages/EmailVerified'
import AdminDashboard from './admin/pages/AdminDashboard';
import UserManagement from './admin/pages/UserManagement';
import ContentModeration from './admin/pages/ContentModeration';
import WorkoutModeration from './admin/pages/WorkoutModeration';
import NutritionModeration from './admin/pages/NutritionModeration';
import SystemAnalytics from './admin/pages/SystemAnalytics';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/about" element={<About />} />
            <Route path="/verify-email" element={<EmailVerification />} />
            <Route path="/email-verified" element={<EmailVerified />} />
            <Route path="*" element={<NotFound />} />

            {/* Protected Routes */}
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/calorietracker" 
              element={
                <ProtectedRoute>
                  <CalorieTracker />
                </ProtectedRoute>
              } 
            />
            <Route
              path="/profile-setup"
              element={
                <ProtectedRoute>
                  <ProfileSetup />
                </ProtectedRoute>
              }
            />
            <Route
              path="/workouts"
              element={
                <ProtectedRoute>
                  <Workouts />
                </ProtectedRoute>
              }
            />
            <Route
              path="/favorites"
              element={
                <ProtectedRoute>
                  <Favorites />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tracking"
              element={
                <ProtectedRoute>
                  <TrackingPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/trends"
              element={
                <ProtectedRoute>
                  <TrendsPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/workout-logging"
              element={
                <ProtectedRoute>
                  <WorkoutLogging />
                </ProtectedRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <ProtectedRoute>
                  <Settings />
                </ProtectedRoute>
              }
            />  
            <Route
              path="/workout-plans"
              element={
                <ProtectedRoute>
                  <WorkoutPlans />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <AdminDashboard />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/users" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <UserManagement />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/content" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <ContentModeration />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/workouts" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <WorkoutModeration />
                </ProtectedRoute>
              } 
            />
            <Route 
              path="/admin/analytics" 
              element={
                <ProtectedRoute adminOnly={true}>
                  <SystemAnalytics />
                </ProtectedRoute>
              } 
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
