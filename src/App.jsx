import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-cookie-cream text-cookie-choco font-serif">
      <Header />
      <Hero />
      <Services />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App
