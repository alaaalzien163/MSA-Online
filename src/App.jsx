import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import MainLayout from './components/layout/MainLayout.jsx'
import SplashScreen from './components/common/SplashScreen.jsx'
import Home from './pages/Home.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import { ROUTES } from './config/routes.js'
import { useSeo } from './hooks/useSeo.js'

function App() {
  const [showSplash, setShowSplash] = useState(true)

  // Keeps <title>, meta description, canonical, Open Graph and Twitter/X tags
  // in sync with the active route and language.
  useSeo()

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.home} element={<Home />} />
          <Route path={ROUTES.contact} element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
