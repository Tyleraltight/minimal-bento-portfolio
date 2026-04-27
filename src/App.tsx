import './App.css'
import { HeroSection } from './sections/HeroSection'
import { FeaturedProjectsSection } from './sections/FeaturedProjectsSection'
import { AboutSection } from './sections/AboutSection'
import { StyledContactFooter } from './components/StyledContactFooter'
import { BackToTop } from './components/ui/BackToTop'
import { LanguageToggle } from './components/LanguageToggle'
import { useLanguage } from './contexts/LanguageContext'

function App() {
  const { language } = useLanguage();

  return (
    <div className="app-root">
      <main className="app-shell">
        <header className="app-header">
          <div className="app-logo">FOR WORK AND PROGRESS</div>
          <nav className="app-nav" aria-label="Primary">
            <a href="#work" className="app-nav-link">
              {language === 'zh' ? '作品' : 'Work'}
            </a>
            <a href="#about" className="app-nav-link">
              {language === 'zh' ? '关于' : 'About'}
            </a>
            <div style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}>
              <a href="#contact" className="app-nav-link">
                {language === 'zh' ? '联系' : 'Contact'}
              </a>
              <LanguageToggle />
            </div>
          </nav>
        </header>

        <HeroSection />
        <FeaturedProjectsSection />
        <AboutSection />
        <StyledContactFooter />
      </main>
      
      <BackToTop />
    </div>
  )
}

export default App
