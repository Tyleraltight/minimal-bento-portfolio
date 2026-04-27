import { Container } from '../components/ui/Container'
import { Button } from '../components/ui/Button'
import { TrustStatement } from '../components/ui/TrustStatement'
import { Magnetic } from '../components/ui/Magnetic'
import { useLanguage } from '../contexts/LanguageContext'

export function HeroSection() {
  const { language } = useLanguage();

  const handleScroll = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero-section">
      <Container>
        <div className="hero-intro">
          <h1 className="hero-heading">
            <span className="hero-heading-main">
              {language === 'zh' 
                ? '我是 Tyler— 资深设计工程师兼创意开发者' 
                : "I'm Tyler— a senior Design Engineer AND Creative Developer"}
            </span>
            <span className="hero-heading-sub">
              <TrustStatement />
            </span>
          </h1>
          <Magnetic intensity={0.15}>
            <Button className="hero-cta" onClick={handleScroll}>
              {language === 'zh' ? '立即查看' : 'Get Started Now'}
              <span className="hero-cta-arrow">↓</span>
            </Button>
          </Magnetic>
        </div>
      </Container>
    </section>
  )
}
