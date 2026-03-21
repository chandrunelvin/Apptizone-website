import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Home/Header'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Home/Footer'
import SEO from './components/Services/SEO/SEO'
import SEM from './components/Services/SEM/SEM'
import UIUX from './components/Services/UIUX/UIUX'
import SocialMediaMarketing from './components/Services/SocialMediaMarketing/SocialMediaMarketing'
import WhatsAppMarketing from './components/Services/WhatsAppMarketing/WhatsAppMarketing'
import WhatsAppIntegration from './components/Services/WhatsAppIntegration/WhatsAppIntegration'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/sem" element={<SEM />} />
            <Route path="/services/ui-ux" element={<UIUX />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketing />} />
            <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketing />} />
            <Route path="/services/whatsapp-integration" element={<WhatsAppIntegration />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
