import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import HomePage from './pages/HomePage'
import DestinationsPage from './pages/DestinationsPage'
import PackagesPage from './pages/PackagesPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import PageTransition from './components/PageTransition/PageTransition'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 700)
    return () => window.clearTimeout(timer)
  }, [])

  return (
    <>
      {loading ? <LoadingScreen /> : null}
      <PageTransition>
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="destinations" element={<DestinationsPage />} />
            <Route path="packages" element={<PackagesPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </PageTransition>
    </>
  )
}

export default App
