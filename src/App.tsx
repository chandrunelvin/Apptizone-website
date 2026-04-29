import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Header from './components/Home/Header'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Home/Footer'
import SEO from './components/Services/SEO/SEO'
import SEM from './components/Services/SEM/SEM'
import UIUX from './components/Services/UIUX/UIUX'
import SocialMediaMarketing from './components/Services/SocialMediaMarketing/SocialMediaMarketing'
import WhatsAppMarketing from './components/Services/WhatsAppIntegration/WhatsAppMarketing'
import WhatsAppIntegration from './components/Services/WhatsAppMarketing/WhatsAppIntegration'
import ProjectsPage from './components/Projects/ProjectsPage'
import ContactUs from './components/ContactUs/ContactUs'

const ScrollToTop = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  return null
}

function AppShell() {
  const location = useLocation()

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <ScrollToTop />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="flex-grow"
          initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -16, filter: 'blur(8px)' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/sem" element={<SEM />} />
            <Route path="/services/ui-ux" element={<UIUX />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/whatsapp-marketing" element={<WhatsAppIntegration />} />
            <Route path="/services/whatsapp-integration" element={<WhatsAppMarketing />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppShell />
    </Router>
  )
}

export default App
