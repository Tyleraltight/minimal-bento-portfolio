import voxelImg from '../assets/LOGO.jpg'
import neuralSketchImg from '../assets/Generated Image February 07, 2026 - 5_00PM.png'
import parentsHandbookImg from '../assets/demo1.png'
import dashboardImg from '../assets/dashboard_overview.jpg'
import easyNoteImg from '../assets/mockup1.png'
import antigravityBuddyImg from '../assets/alien-padded.png'
import alineHeroImg from '../assets/aline-hero.png'
import rainbowByteImg from '../assets/rainbow-byte.png'
import englishImg from '../assets/english.png'
import apocalypticBehemothImg from '../assets/apocalyptic-behemoth.png'

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
    id: 'rainbow-byte-mascot',
    category: 'design',
    kind: 'case-study',
    title: 'Rainbow Byte: Pixel Joy',
    subtitle: 'Mascot Branding',
    description:
      'An IP expansion of the "buddy" mascot from my Antigravity Bot project, bringing the pixel character to life through vibrant merchandising and emotes.',
    stack: ['Pixel Art', 'Character Design', 'Merchandising'],
    image: rainbowByteImg,
    tags: ['Pixel Art', 'Mascot', 'Branding', 'Plush Design'],
    concept:
      'Translating a digital companion into a tangible brand. Rainbow Byte takes the core identity of Antigravity Bot and expands it into a playful, standalone IP.',
    workflow:
      'Character evolution from UI mascot to a fully realized IP, including comprehensive expression sheets, turnaround designs, and physical product prototyping.',
    useCase: 'Plush toys, keychains, digital emote packs, and lifestyle merchandising.',
    zh: {
      title: '彩虹小比特 (Rainbow Byte)',
      subtitle: 'IP 形象设计',
      description: '基于我的 Antigravity Bot 项目中的 "buddy" 助手形象衍生的独立 IP，通过丰富的文创周边和表情包赋予像素角色全新的生命力。',
      concept: '将数字伴侣转化为实体品牌。Rainbow Byte 提取了 Antigravity Bot 的核心视觉基因，将其扩展为一个充满趣味的独立 IP。',
      workflow: '从 UI 界面吉祥物到成熟 IP 的角色演进，涵盖全套表情包绘制、三视图设计以及实体文创产品的打样与转化。',
      useCase: '毛绒公仔、亚克力挂件、数字表情包及生活方式周边产品。'
    }
  },
  {
    id: 'english-learning-cards',
    category: 'design',
    kind: 'case-study',
    title: 'Visual English Flashcards',
    subtitle: 'UI/UX & Education',
    description:
      'IMAGE-2: Visually engaging educational flashcards combining vivid imagery and typography to enhance memory retention.',
    stack: ['UI Design', 'Illustration', 'Typography'],
    image: englishImg,
    tags: ['Education', 'UI/UX', 'Flashcards', 'Visual Design'],
    concept:
      'Transforming mundane vocabulary learning into a delightful visual experience through strong mnemonic associations.',
    workflow:
      'Information architecture mapping, establishing a consistent visual language, grid layout design, and batch illustration processing.',
    useCase: 'Educational apps, language learning platforms, and digital or physical flashcard decks.',
    zh: {
      title: 'IMAGE-2 英语学习卡片',
      subtitle: 'UI/UX 教育产品设计',
      description: 'IMAGE-2: 充满视觉吸引力的教育学习卡片，将生动的插图与精美的排版相结合，从而增强用户的记忆力。',
      concept: '通过强有力的视觉记忆联想，将原本枯燥的词汇学习过程转化为令人愉悦的视觉体验。',
      workflow: '信息架构梳理、建立一致的视觉语言规范、网格布局设计，以及批量插画资源的优化处理。',
      useCase: '教育类应用程序、语言学习平台，以及数字或实体学习闪卡。'
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
    id: 'apocalyptic-behemoth-ip',
    category: 'design',
    kind: 'case-study',
    title: 'Apocalyptic Behemoth: IP Concept',
    subtitle: 'Character Design & 2D Animation',
    description:
      'An original apocalyptic behemoth character concept, designed for 2D animation, featuring intricate organic armor and imposing scale.',
    stack: ['Clip Studio Paint', 'Photoshop', '2D Illustration'],
    image: apocalypticBehemothImg,
    tags: ['Animation', 'Character Design', 'Creature Concept', '2D Art'],
    concept:
      'Exploring the terrifying beauty of post-apocalyptic apex predators through sharp silhouettes and bio-mechanical aesthetics.',
    workflow:
      'Initial rough sketching and silhouette blocking, followed by detailed line art and layered digital painting in professional 2D illustration software.',
    useCase: 'Concept art for animated series, video game boss design, and collectible art prints.',
    zh: {
      title: '末日巨兽：动画 IP 设定',
      subtitle: '角色设计与 2D 插画',
      description: '原创的末日巨兽角色设定，专为动画制作设计，具有错综复杂的有机生物装甲和极具压迫感的体型。',
      concept: '通过凌厉的剪影与生物机械美学，探索末日世界顶级掠食者的恐怖之美。',
      workflow: '使用 2D 绘图软件进行初期草图绘制、剪影构建、精细线稿刻画以及分层数字上色。',
      useCase: '动画剧集概念设计、电子游戏 Boss 设定以及艺术收藏版画。'
    }
  },
]
