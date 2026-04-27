import { useState, useRef, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '../components/ui/Container'
import { Section } from '../components/ui/Section'
import { Body, MetaText, Subheading } from '../components/ui/Typography'
import { ProjectDetailModal } from '../components/ProjectDetailModal'
import { engineeringProjects, designProjects } from '../data/projects'
import type { Project } from '../data/projects'

import { useLanguage } from '../contexts/LanguageContext'

function ProjectCard({ project, showImage = false }: { project: Project; showImage?: boolean }) {
  const { language } = useLanguage()
  const [isHovered, setIsHovered] = useState(false)

  const title = language === 'zh' && project.zh?.title ? project.zh.title : project.title
  const subtitle = language === 'zh' && project.zh?.subtitle ? project.zh.subtitle : project.subtitle
  const description = language === 'zh' && project.zh?.description ? project.zh.description : project.description

  return (
    <a
      href={project.href || undefined}
      target={project.href ? '_blank' : undefined}
      rel={project.href ? 'noreferrer' : undefined}
      className="bento-card bento-card--primary bento-card--interactive project-card project-card--hero"
      style={{ display: 'block', textDecoration: 'none', color: 'inherit', cursor: project.href ? 'pointer' : 'default' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {showImage && (
        <div className="project-hero-image-wrap">
          <motion.img
            src={project.image}
            alt={project.title}
            className="project-hero-image"
            animate={{
              filter: isHovered ? 'blur(0px)' : 'blur(12px)',
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          />
        </div>
      )}
      <div className="project-card-body">
        <MetaText>{language === 'zh' ? '案例研究' : 'Case Study'} · {subtitle}</MetaText>
        <Subheading className="project-hero-title">{title}</Subheading>
        <Body>{description}</Body>
        <div className="project-card-footer">
          <MetaText>{project.stack.map(s => s.toUpperCase()).join(' · ')}</MetaText>
          {project.href && (
            <span className="project-github-link">
              <span className="project-github-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </span>
              {language === 'zh' ? '查看代码' : 'View on GitHub'}
            </span>
          )}
        </div>
      </div>
    </a>
  )
}

// Dashed-border placeholder for the 4th engineering slot
function ComingSoonCard() {
  const { language } = useLanguage()
  return (
    <div className="bento-card project-card project-card--coming-soon">
      <div className="coming-soon-content">
        <div className="coming-soon-dots">
          <span className="coming-soon-dot">.</span>
          <span className="coming-soon-dot">.</span>
          <span className="coming-soon-dot">.</span>
        </div>
        <span className="coming-soon-label">{language === 'zh' ? '敬请期待' : 'COMING SOON'}</span>
      </div>
    </div>
  )
}

export function FeaturedProjectsSection() {
  const { language } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [hoveredId, setHoveredId] = useState<string | null>(null)
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({})

  // Play video on hover, pause and reset on leave
  const handleCardEnter = useCallback((id: string) => {
    setHoveredId(id)
    const video = videoRefs.current[id]
    if (video) {
      video.currentTime = 0
      video.play().catch(() => { })
    }
  }, [])

  const handleCardLeave = useCallback((id: string) => {
    setHoveredId(null)
    const video = videoRefs.current[id]
    if (video) {
      video.pause()
      video.currentTime = 0
    }
  }, [])

  return (
    <Section
      id="work"
      title={language === 'zh' ? '精选作品' : 'Featured work'}
      subtitle={language === 'zh' ? '部分项目展示' : 'Selected projects'}
      className="projects-section"
    >
      <Container>
        {/* Row 1 — Engineering (2x2 grid, first 4 projects) */}
        <div className="projects-row projects-row--engineering">
          {engineeringProjects.slice(0, 4).map((project) =>
            project.kind === 'coming-soon' ? (
              <ComingSoonCard key={project.id} />
            ) : (
              <ProjectCard key={project.id} project={project} showImage />
            )
          )}
        </div>

        {/* Row 2 — 5th project (1x2 grid) */}
        {engineeringProjects.length > 4 && (
          <div className="projects-row projects-row--engineering" style={{ marginTop: '1.6rem' }}>
            {engineeringProjects.slice(4).map((project) =>
              project.kind === 'coming-soon' ? (
                <ComingSoonCard key={project.id} />
              ) : (
                <ProjectCard key={project.id} project={project} showImage />
              )
            )}
          </div>
        )}

        {/* Row 2 — Design & AI Visuals (4 columns) */}
        <div className="projects-row-label">
          <MetaText>{language === 'zh' ? '设计与 AI 视觉' : 'Design & AI Visuals'}</MetaText>
        </div>
        <div className="projects-row projects-row--design">
          {designProjects.map((project) => (
            <div
              key={project.id}
              className="bento-card bento-card--interactive project-card project-card--visual"
              onClick={() => setSelectedProject(project)}
              onMouseEnter={() => project.videoUrl && handleCardEnter(project.id)}
              onMouseLeave={() => project.videoUrl && handleCardLeave(project.id)}
            >
              {/* Media slot — video or image placeholder */}
              <div className="visual-card-image-slot">
                {project.videoUrl ? (
                  <>
                    <video
                      ref={(el) => { videoRefs.current[project.id] = el }}
                      src={project.videoUrl}
                      className="visual-card-video"
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      style={{
                        opacity: hoveredId === project.id ? 1 : 0.85,
                        transition: 'opacity 0.3s ease-out',
                      }}
                    />
                    <span className="visual-card-view-badge">View ↗</span>
                  </>
                ) : project.image ? (
                  <>
                    <img src={project.image} alt={project.title} className="visual-card-image" />
                    <span className="visual-card-view-badge">View ↗</span>
                  </>
                ) : (
                  <span className="visual-card-placeholder-text">Drop image here</span>
                )}
              </div>
              <div className="project-card-body">
                <MetaText>{language === 'zh' && project.zh?.subtitle ? project.zh.subtitle : project.subtitle}</MetaText>
                <Subheading>{language === 'zh' && project.zh?.title ? project.zh.title : project.title}</Subheading>
                <Body>{language === 'zh' && project.zh?.description ? project.zh.description : project.description}</Body>
              </div>
            </div>
          ))}
        </div>
      </Container>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectDetailModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}