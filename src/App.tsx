import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ProblemSection } from './components/ProblemSection'
import { DemoSection } from './components/DemoSection'
import { AuthoritySection } from './components/AuthoritySection'
import { Features } from './components/Features' // Now "Pillars"
import { HowItWorks } from './components/HowItWorks'
import { ImpactSection } from './components/ImpactSection'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { AppShowcase } from './components/AppShowcase'

function App() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />

        <main className="main-content">
          <Hero />
          <AppShowcase />
          <ProblemSection />
          <DemoSection />
          <AuthoritySection />
          <Features />
          <HowItWorks />
          <ImpactSection />
          <Testimonials />
          <FAQ />
          <FinalCTA />
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App
