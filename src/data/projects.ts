import voxelImg from '../assets/LOGO.jpg'
import neuralSketchImg from '../assets/Generated Image February 07, 2026 - 5_00PM.png'
import parentsHandbookImg from '../assets/demo1.png'
import dashboardImg from '../assets/dashboard_overview.jpg'
import easyNoteImg from '../assets/mockup1.png'
import antigravityBuddyImg from '../assets/antigravity_bot.png'

export type ProjectCategory = 'engineering' | 'design'

export type Project = {
  id: string
  category: ProjectCategory
  kind: 'case-study' | 'experimental' | 'tooling' | 'ai-visual' | 'coming-soon'
  title: string
  subtitle?: string
  description: string
  stack: string[]
  href?: string
  image?: string
  // Case study fields for design projects
  intent?: string
  workflow?: string
  toolsUsed?: string[]
  videoUrl?: string
  tags?: string[]
  concept?: string
  useCase?: string
}

// Row 1 — Engineering / Code Projects (2x2 grid)
export const engineeringProjects: Project[] = [
  {
    id: 'easynote',
    category: 'engineering',
    kind: 'case-study',
    title: 'EasyNote',
    subtitle: 'Minimalist Productivity Hub',
    description:
      'A minimalist productivity hub combining annual goal (Flag) tracking, rapid note-taking, and calendar retrospection, featuring real-time multi-device sync via Supabase.',
    stack: ['React', 'Supabase', 'TypeScript', 'Tailwind'],
    href: 'https://github.com/Tyleraltight/EasyNote',
    image: easyNoteImg,
  },
  {
    id: 'parents-handbook',
    category: 'engineering',
    kind: 'case-study',
    title: 'ParentsHandbook',
    subtitle: 'LLM-powered Movie Audit',
    description:
      'An LLM-based movie content audit tool providing parents with visual content risk assessments across four dimensions: Sex & Nudity, Violence, Profanity, and Frightening scenes.',
    stack: ['FastAPI', 'Gemini', 'Redis', 'Vercel'],
    href: 'https://github.com/Tyleraltight/ParentsHandbook',
    image: parentsHandbookImg,
  },
  {
    id: 'spotify-analysis',
    category: 'engineering',
    kind: 'case-study',
    title: 'Spotify Analysis',
    subtitle: 'Data Visualization',
    description:
      'Translating user streaming habits into actionable insights through Python and interactive data visualization.',
    stack: ['Python', 'Streamlit', 'Plotly', 'Pandas'],
    href: 'https://github.com/Tyleraltight/Spotify-Analysis',
    image: dashboardImg,
  },
  {
    id: 'antigravity-buddy',
    category: 'engineering',
    kind: 'case-study',
    title: 'Antigravity Buddy',
    subtitle: 'AI Desktop Companion',
    description:
      'A desktop AI companion app featuring a floating robot assistant with natural language interaction, built with Electron and modern AI APIs.',
    stack: ['Rust', 'CSS', 'TypeScript', 'Node.js'],
    href: 'https://github.com/Tyleraltight/antigravity-buddy',
    image: antigravityBuddyImg,
  },
  {
    id: 'coming-soon',
    category: 'engineering',
    kind: 'coming-soon',
    title: 'Coming Soon',
    description: 'Work in Progress',
    stack: [],
  },
]

// Row 2 — Design & AI Visuals
export const designProjects: Project[] = [
  {
    id: 'ai-fashion-video',
    category: 'design',
    kind: 'ai-visual',
    title: 'Cinematic AI Fashion Exploration',
    subtitle: 'AI Video',
    description:
      'A cinematic exploration of AI-generated high-fashion aesthetics and material textures.',
    stack: ['Midjourney v6', 'Google Veo'],
    tags: ['AI Video', 'Midjourney', 'Veo'],
    concept:
      'Investigating how AI can interpret complex fashion textures like silk and lace in motion.',
    workflow:
      'Prompt engineering in Midjourney v6 to establish the visual key, followed by motion synthesis in Veo.',
    useCase: 'Prototyping digital advertising for luxury brands.',
  },
  {
    id: 'veo3-cinema',
    category: 'design',
    kind: 'ai-visual',
    title: 'Cinematic Fragments',
    subtitle: 'Veo3',
    description:
      'AI-generated cinematic stills exploring narrative through motion and light.',
    stack: ['Google Veo3'],
    intent:
      'Investigating whether text-to-video models can produce stills with genuine cinematic grammar — composition, lighting ratios, and implied motion.',
    workflow:
      'Narrative storyboarding → Prompt scripting with camera direction cues → Veo3 generation → Frame extraction → Color grading.',
    toolsUsed: ['Google Veo3', 'DaVinci Resolve', 'After Effects'],
  },
  {
    id: 'voxel-openai-branding',
    category: 'design',
    kind: 'ai-visual',
    title: 'Voxel Brand Reimagining: A Sandbox Framework',
    subtitle: 'Voxel Art',
    description:
      'A scalable visual framework for translating corporate identities into sandbox-style environments.',
    stack: ['Voxel Art', 'Branding', 'AI Generation', 'World Building'],
    image: voxelImg,
    tags: ['Voxel Art', 'Branding', 'AI Generation', 'World Building'],
    concept:
      'Bridging high-tech AI branding and nostalgic sandbox creativity by reimagining the OpenAI logo as a living voxel landscape.',
    workflow:
      'Geometric voxelization of 2D logos via Midjourney/Nano-banana, embedded into a Minecraft-native scene with ray-traced atmospheric synthesis.',
    useCase:
      'Experimental branding for companies, interactive metaverse hubs, or social media campaigns engaging build-culture communities.',
  },
  {
    id: 'neural-sketch',
    category: 'design',
    kind: 'ai-visual',
    title: 'Neural Sketch: Humanoid Synthesis',
    subtitle: 'Fine Art',
    description:
      'An exploration of the boundary between traditional hand-drawn line art and generative abstraction, creating complex living wireframes.',
    stack: ['Nano Banana', 'Fine Art', 'Generative AI'],
    image: neuralSketchImg,
    tags: ['Fine Art', 'Nano Banana', 'Minimalism', 'Line Art'],
    concept:
      'Replicating the raw, spontaneous energy of a master artist\'s sketchpad by utilizing Nano Banana\'s line-weight capabilities to balance anatomical precision with chaotic, explosive geometry.',
    workflow:
      'Style anchoring via Nano Banana for stroke pressure and ink density, abstract compositional clustering of humanoid silhouettes, and organic imperfection injection to simulate charcoal and graphite textures.',
    useCase:
      'Digital art installations, editorial illustrations for tech-philosophy journals, or experimental UI backgrounds for minimalist creative platforms.',
  },
]
