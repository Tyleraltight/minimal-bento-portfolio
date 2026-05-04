import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { Magnetic } from './ui/Magnetic'

const navLinks = [
  { id: 'work', labelEn: 'Featured Work', labelZh: '精选作品', isParent: true },
  { id: 'engineering-projects', labelEn: 'Selected Projects', labelZh: '精选项目', isSub: true },
  { id: 'design-visuals', labelEn: 'Design & AI Visuals', labelZh: '设计视觉', isSub: true },
  { id: 'about', labelEn: 'About me', labelZh: '关于我', isParent: true },
  { id: 'contact', labelEn: 'Contact me', labelZh: '联系我', isParent: true },
]

export function ProjectSidebarTOC() {
  const { language } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('work')
  const [scrollProgress, setScrollProgress] = useState(0)
  const isScrolling = useRef(false)

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress for the progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1)
      setScrollProgress(progress)

      const workSection = document.getElementById('work')
      if (!workSection) return

      const rect = workSection.getBoundingClientRect()
      // Show when work section approaches the viewport top area
      setIsVisible(rect.top <= 250)

      if (isScrolling.current) return // Prevent scroll events from jumping the active pill during smooth scroll

      // Determine active section based on scroll position
      const contactEl = document.getElementById('contact')
      const aboutEl = document.getElementById('about')
      const designEl = document.getElementById('design-visuals')
      const engEl = document.getElementById('engineering-projects')

      // Use an offset to trigger earlier when scrolling down
      const triggerOffset = window.innerHeight * 0.4

      if (contactEl && contactEl.getBoundingClientRect().top <= triggerOffset) {
        setActiveSection('contact')
      } else if (aboutEl && aboutEl.getBoundingClientRect().top <= triggerOffset) {
        setActiveSection('about')
      } else if (designEl && designEl.getBoundingClientRect().top <= triggerOffset) {
        setActiveSection('design-visuals')
      } else if (engEl && engEl.getBoundingClientRect().top <= triggerOffset) {
        setActiveSection('engineering-projects')
      } else {
        setActiveSection('work')
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    setActiveSection(id) // Immediately move the pill
    isScrolling.current = true // Lock scroll observer

    const el = document.getElementById(id)
    if (el) {
      const offset = 80 // Adjust based on header height
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }

    // Release the lock after smooth scrolling completes (usually < 800ms)
    setTimeout(() => {
      isScrolling.current = false
    }, 800)
  }

  return (
    <motion.nav
      className="premium-toc"
      aria-label="Premium Page navigation"
      initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -30,
        filter: isVisible ? 'blur(0px)' : 'blur(10px)',
        pointerEvents: isVisible ? 'auto' : 'none',
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }} // smooth apple-like spring
    >
      <div className="premium-toc-inner">
        <div className="premium-toc-header">
          <span className="premium-toc-title">
            {language === 'zh' ? '目录' : 'CONTENTS'}
          </span>
        </div>

        <div className="premium-toc-list">
          {/* Animated Scroll Progress Line */}
          <div className="premium-toc-track">
            <motion.div 
              className="premium-toc-progress" 
              style={{ scaleY: scrollProgress }}
              transition={{ duration: 0.1, ease: 'linear' }}
            />
          </div>

          {navLinks.map((link) => {
            // For parent "work", we only consider it strictly active if we are exactly on it (not on sub-items)
            // Wait, actually, let's keep it exact for cleaner pill animation.
            const isActive = activeSection === link.id

            return (
              <div key={link.id} className={`premium-toc-item ${link.isSub ? 'is-sub' : 'is-parent'}`}>
                <Magnetic intensity={0.15}>
                  <button
                    className={`premium-toc-btn ${isActive ? 'active' : ''}`}
                    onClick={() => scrollTo(link.id)}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-toc-pill"
                        className="premium-toc-active-bg"
                        transition={{
                          type: 'spring',
                          stiffness: 700,
                          damping: 35,
                          mass: 0.4
                        }}
                      />
                    )}
                    <span className="premium-toc-text">
                      {language === 'zh' ? link.labelZh : link.labelEn}
                    </span>
                    
                    {/* Tiny animated dot indicator for sub-items when active */}
                    {link.isSub && isActive && (
                      <motion.div 
                        layoutId="active-toc-dot"
                        className="premium-toc-sub-dot" 
                        transition={{ type: 'spring', stiffness: 700, damping: 35, mass: 0.4 }}
                      />
                    )}
                  </button>
                </Magnetic>
              </div>
            )
          })}
        </div>
      </div>
    </motion.nav>
  )
}
