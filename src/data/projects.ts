import voxelImg from '../assets/LOGO.jpg'
import neuralSketchImg from '../assets/Generated Image February 07, 2026 - 5_00PM.png'
import parentsHandbookImg from '../assets/demo1.png'
import dashboardImg from '../assets/dashboard_overview.jpg'
import easyNoteImg from '../assets/mockup1.png'
import antigravityBuddyImg from '../assets/alien-padded.png'
import alineHeroImg from '../assets/aline-hero.png'

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
  zh?: {
    title?: string
    subtitle?: string
    description?: string
    intent?: string
    workflow?: string
    concept?: string
    useCase?: string
  }
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
    zh: {
      title: 'EasyNote',
      subtitle: '极简生产力枢纽',
      description: '一个结合年度目标(Flag)追踪、快速笔记与日历回顾的极简生产力工具，通过 Supabase 实现实时多端同步。'
    }
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
    zh: {
      title: 'ParentsHandbook',
      subtitle: '大语言模型电影内容审计',
      description: '基于LLM的电影内容审计工具，为家长提供四个维度的视觉内容风险评估：色情裸露、暴力、脏话以及惊悚画面。'
    }
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
    zh: {
      title: 'Spotify 数据分析',
      subtitle: '交互式数据可视化',
      description: '通过 Python 和交互式数据可视化技术，将用户的流媒体播放习惯转化为直观的数据洞察。'
    }
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
    zh: {
      title: '反重力机器人',
      subtitle: 'AI 桌面助手',
      description: '一个桌面 AI 伴侣应用，具有支持自然语言交互的悬浮机器人助手，基于 Electron 和现代 AI API 构建。'
    }
  },
  {
    id: 'aline-designer-recruitment',
    category: 'engineering',
    kind: 'case-study',
    title: 'A-Line',
    subtitle: 'Designer Recruitment Platform',
    description:
      'A premium landing page for a top-tier designer recruitment agency, featuring bold typographic hierarchy, geometric bento grid layout, and an uncompromising aesthetic standard.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    href: 'https://tyleraltight.github.io/DesignerApplyment_company/A-Line-landing/index.html',
    image: alineHeroImg,
    zh: {
      title: 'A-Line',
      subtitle: '顶尖设计师选聘平台',
      description: '为顶尖设计师招聘机构打造的高级落地页，采用大胆的排版层级、几何 Bento 布局，以及毫不妥协的美学标准。'
    }
  },
  {
    id: 'coming-soon',
    category: 'engineering',
    kind: 'coming-soon',
    title: 'Coming Soon',
    description: 'Work in Progress',
    stack: [],
    zh: {
      title: '敬请期待',
      description: '正在开发中'
    }
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
    zh: {
      title: '电影级 AI 电影时尚探索',
      subtitle: 'AI 视频生成',
      description: '探索由 AI 生成的高级时尚美学与材质纹理的电影级视觉呈现。',
      concept: '研究 AI 如何在动态影像中精准诠释丝绸与蕾丝等复杂时尚材质。',
      workflow: '使用 Midjourney v6 确立视觉基调，随后通过 Google Veo 进行动态合成。',
      useCase: '为奢侈品牌原型设计数字广告创意。'
    }
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
    zh: {
      title: '影像碎片',
      subtitle: 'Veo3 电影感测试',
      description: '通过动态与光影探索叙事的 AI 生成电影级剧照。',
      intent: '研究文本到视频模型是否能生成具有真正电影语法的静态帧——包括构图、光影比例和隐含运动。',
      workflow: '叙事分镜 → 带有摄像机机位提示的提示词编写 → Veo3 生成 → 帧提取 → 色彩调优。'
    }
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
    zh: {
      title: '体素化品牌重塑：沙盒视觉框架',
      subtitle: '体素艺术',
      description: '一个将企业视觉识别系统转化为沙盒环境的可扩展视觉框架。',
      concept: '通过将 OpenAI 标志重新构想为充满生机的体素景观，建立高科技 AI 品牌与怀旧沙盒创意之间的桥梁。',
      workflow: '通过 Midjourney/Nano-banana 对 2D 标志进行几何体素化，嵌入到具备光线追踪大气合成的 Minecraft 原生场景中。',
      useCase: '适用于企业的实验性品牌建设、交互式元宇宙中心，或针对沙盒建造社区的社交媒体活动。'
    }
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
    zh: {
      title: '神经素描：人形合成',
      subtitle: '美术与生成艺术',
      description: '探索传统手绘线稿与生成式抽象艺术之间的边界，创造出复杂的生命力线框。',
      concept: '利用 Nano Banana 的线条权重能力，在解剖学精度与混沌几何中取得平衡，复现艺术大师速写本上原始且自发的能量。',
      workflow: '通过 Nano Banana 锚定笔触压力和墨水密度风格，对人形剪影进行抽象重组，并注入有机的不完美感以模拟木炭和石墨纹理。',
      useCase: '数字艺术装置、科技哲学期刊的社论插图，或面向极简创意平台的实验性 UI 背景。'
    }
  },
]
