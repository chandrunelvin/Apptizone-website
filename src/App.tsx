import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Home/Header'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Home/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            {/* You can add more routes here for other components like Contact */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
