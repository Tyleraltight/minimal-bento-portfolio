import { useEffect } from 'react'
import { motion } from 'framer-motion'
import type { Project } from '../data/projects'
import { Body, MetaText } from './ui/Typography'
import { useLanguage } from '../contexts/LanguageContext'

type Props = {
    project: Project
    onClose: () => void
}

const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: 'spring' as const, damping: 28, stiffness: 320 },
    },
    exit: {
        opacity: 0,
        y: 30,
        scale: 0.97,
        transition: { duration: 0.2, ease: 'easeIn' as const },
    },
}

export function ProjectDetailModal({ project, onClose }: Props) {
    const { language } = useLanguage()
    
    // Resolve localized strings
    const title = language === 'zh' && project.zh?.title ? project.zh.title : project.title
    const subtitle = language === 'zh' && project.zh?.subtitle ? project.zh.subtitle : project.subtitle
    const description = language === 'zh' && project.zh?.description ? project.zh.description : project.description
    const concept = language === 'zh' && project.zh?.concept ? project.zh.concept : project.concept
    const workflow = language === 'zh' && project.zh?.workflow ? project.zh.workflow : project.workflow
    const useCase = language === 'zh' && project.zh?.useCase ? project.zh.useCase : project.useCase
    const intent = language === 'zh' && project.zh?.intent ? project.zh.intent : project.intent

    const hasVideo = !!project.videoUrl
    const hasImage = !!project.image
    const hasMedia = hasVideo || hasImage
    const hasCaseStudy = !!(concept || workflow || useCase)
    const hasLegacyCaseStudy = !!(intent || workflow || project.toolsUsed)

    // Lock body scroll when modal is open
    useEffect(() => {
        const prev = document.body.style.overflow
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = prev
        }
    }, [])

    // Close on Escape key
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handler)
        return () => window.removeEventListener('keydown', handler)
    }, [onClose])

    return (
        <motion.div
            className="modal-backdrop"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.25 }}
            onClick={onClose}
        >
            <motion.div
                className={`modal-card ${hasMedia ? 'modal-card--video' : ''}`}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close button */}
                <button className="modal-close" onClick={onClose} aria-label="Close">
                    ✕
                </button>

                {hasMedia ? (
                    <>
                        {/* Media slot — side-by-side layout */}
                        <div className="modal-video-slot">
                            {hasVideo ? (
                                <video
                                    src={project.videoUrl}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="modal-video"
                                />
                            ) : (
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="modal-media-image"
                                />
                            )}
                        </div>

                        <div className="modal-body">
                            <MetaText>
                                {subtitle} · {language === 'zh' ? 'AI 视觉' : 'AI Visual'}
                            </MetaText>
                            <h2 className="modal-title">{title}</h2>
                            <Body>{description}</Body>

                            {hasCaseStudy && (
                                <div className="modal-case-study">
                                    <MetaText className="modal-case-study-label">{language === 'zh' ? '案例研究' : 'Case Study'}</MetaText>

                                    {concept && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '核心概念' : 'Concept'}</span>
                                            <Body>{concept}</Body>
                                        </div>
                                    )}

                                    {workflow && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '工作流' : 'Workflow'}</span>
                                            <Body>{workflow}</Body>
                                        </div>
                                    )}

                                    {useCase && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '应用场景' : 'Use Case'}</span>
                                            <Body>{useCase}</Body>
                                        </div>
                                    )}

                                    {project.tags && project.tags.length > 0 && (
                                        <div className="modal-tool-tags">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="modal-tool-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        {/* Image modal — original stacked layout */}
                        <div className="modal-image-slot">
                            {project.image ? (
                                <img src={project.image} alt={project.title} />
                            ) : (
                                <span className="modal-image-placeholder">Image preview</span>
                            )}
                        </div>

                        <div className="modal-body">
                            <MetaText>
                                {subtitle} · {project.kind === 'ai-visual' ? (language === 'zh' ? 'AI 视觉' : 'AI Visual') : (language === 'zh' ? '项目' : 'Project')}
                            </MetaText>
                            <h2 className="modal-title">{title}</h2>
                            <Body>{description}</Body>

                            {/* Case study fields (concept/workflow/useCase) */}
                            {hasCaseStudy && (
                                <div className="modal-case-study">
                                    <MetaText className="modal-case-study-label">{language === 'zh' ? '案例研究' : 'Case Study'}</MetaText>

                                    {concept && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '核心概念' : 'Concept'}</span>
                                            <Body>{concept}</Body>
                                        </div>
                                    )}

                                    {workflow && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '工作流' : 'Workflow'}</span>
                                            <Body>{workflow}</Body>
                                        </div>
                                    )}

                                    {useCase && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '应用场景' : 'Use Case'}</span>
                                            <Body>{useCase}</Body>
                                        </div>
                                    )}

                                    {project.tags && project.tags.length > 0 && (
                                        <div className="modal-tool-tags">
                                            {project.tags.map((tag) => (
                                                <span key={tag} className="modal-tool-tag">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* Legacy case study fields (intent/toolsUsed) */}
                            {!hasCaseStudy && hasLegacyCaseStudy && (
                                <div className="modal-case-study">
                                    <MetaText className="modal-case-study-label">{language === 'zh' ? '案例研究' : 'Case Study'}</MetaText>

                                    {intent && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '目标' : 'Intent'}</span>
                                            <Body>{intent}</Body>
                                        </div>
                                    )}

                                    {workflow && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '工作流' : 'Workflow'}</span>
                                            <Body>{workflow}</Body>
                                        </div>
                                    )}

                                    {project.toolsUsed && project.toolsUsed.length > 0 && (
                                        <div className="modal-field">
                                            <span className="modal-field-label">{language === 'zh' ? '使用工具' : 'Tools'}</span>
                                            <div className="modal-tool-tags">
                                                {project.toolsUsed.map((tool) => (
                                                    <span key={tool} className="modal-tool-tag">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </>
                )}
            </motion.div>
        </motion.div>
    )
}
