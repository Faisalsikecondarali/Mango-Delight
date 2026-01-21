import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import { VarietiesSection } from '@/components/VarietiesSection'
import { PricingSection } from '@/components/PricingSection'
import { TestimonialsSlider } from '@/components/TestimonialsSlider'
import { LocationSection } from '@/components/LocationSection'
import Footer from '@/components/Footer'
import { ThemeInit } from '@/components/ThemeInit'
import { SplashScreen } from '@/components/SplashScreen'
import { FallingMangoSlices } from '@/components/FallingMangoSlices'
import layoutStyles from '@/css/Layout.module.css'
import Menu from '@/pages/Menu'
import About from '@/pages/About'
import Contact from '@/pages/Contact'
import PricingEditor from '@/pages/PricingEditor'

function App() {
  return (
    <div className={layoutStyles.appShell}>
      <ThemeInit />
      <SplashScreen />
      <Header />
      <main className={`${layoutStyles.main} container-lg`}>
        <div className="md-page">
          <FallingMangoSlices />
          <Routes>
            <Route
              path="/"
              element={
                <div className="md-home">
                  <Hero />
                  <VarietiesSection />
                  <PricingSection />
                  <TestimonialsSlider />
                  <LocationSection />
                </div>
              }
            />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/pricing-editor" element={<PricingEditor />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
