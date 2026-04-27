import { BentoCard } from '../components/ui/BentoCard'
import { BentoGrid } from '../components/ui/BentoGrid'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { profileData } from '../data/profile'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'

export function AboutSection() {
  const { language } = useLanguage()
  const data = language === 'zh' ? profileData.zh : profileData
  const { now } = data

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' as const },
    },
  }

  return (
    <Section
      id="about"
      title={language === 'zh' ? '关于' : 'About'}
      subtitle={language === 'zh' ? '个人简介' : 'Profile'}
      className="about-section"
    >
      <Container>
        <BentoGrid>
          <BentoCard
            colSpan={{ base: 4, md: 4, lg: 4 }}
            rowSpan={{ base: 1, md: 1, lg: 1 }}
            className="about-now-card"
          >
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              {/* Education */}
              <div className="about-now-section">
                <motion.span variants={itemVariants} className="about-now-label" style={{ display: 'block' }}>
                  {now.education.label}
                </motion.span>
                {now.education.items.map((item, i) => (
                  <motion.div key={i} variants={itemVariants} className="about-edu-row">
                    <div className="about-edu-left">
                      <span className="about-edu-arrow">→</span>
                      <div>
                        <span className="about-edu-school">{item.institution}</span>
                        <span className="about-edu-degree">{item.degree}</span>
                      </div>
                    </div>
                    <span className="about-edu-duration">{item.duration}</span>
                  </motion.div>
                ))}
              </div>

              {/* Languages */}
              <div className="about-now-section">
                <motion.span variants={itemVariants} className="about-now-label" style={{ display: 'block' }}>
                  {now.languages.label}
                </motion.span>
                <ul className="about-now-list">
                  {now.languages.items.map((lang) => (
                    <motion.li key={lang.name} variants={itemVariants} className="about-now-item">
                      <span className="about-lang-name">{lang.name}:</span>{' '}
                      <span className="about-lang-level">{lang.level}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </BentoCard>
        </BentoGrid>
      </Container>
    </Section>
  )
}
