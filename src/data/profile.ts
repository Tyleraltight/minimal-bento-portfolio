export type Profile = {
  name: string
  role: string
  location: string
  tagline: string
  now: string
  availability: string
}

export const profile: Profile = {
  name: 'Tyler',
  role: 'Frontend Engineer',
  location: 'Remote',
  tagline: 'Designing minimal, interaction-rich web experiences.',
  now: 'Exploring Bento layouts, motion systems, and calm design for the web.',
  availability: 'Available for selected collaborations.',
}

export const profileData = {
  about: {
    title: 'WHO',
    content:
      "Hi. I'm Tyler, A curious and detail-oriented design & engineering student. I focus on using AI as a force multiplier to turn complex ideas into tangible products—fast. I care about the details that compound into trust: typography, rhythm, motion, and responsiveness.",
  },
  now: {
    title: 'NOW',
    education: {
      label: 'Education',
      items: [
        {
          institution: "Xi'an University of Science and Technology",
          degree: 'Bachelor Degree – Computer Science',
          duration: '2023–2026',
        },
        {
          institution: 'Victoria University of Wellington',
          degree: 'Bachelor Degree – Computer Science',
          duration: '2026–2027',
        },
      ],
    },
    languages: {
      label: 'Languages',
      items: [
        { name: 'Chinese', level: 'Native language' },
        { name: 'English', level: 'TOEIC C1 level' },
      ],
    },
  },
  zh: {
    about: {
      title: '关于我',
      content:
        "你好，我是 Tyler，一名充满好奇心、注重细节的设计工程专业学生。我专注于将 AI 作为力量倍增器，将复杂的想法快速转化为有形的产品。我专注于那些能建立起信任的细节：排版、节奏、动效和响应式体验。",
    },
    now: {
      title: '近况',
      education: {
        label: '教育背景',
        items: [
          {
            institution: "西安科技大学",
            degree: '学士学位 – 计算机科学',
            duration: '2023–2026',
          },
          {
            institution: '惠灵顿维多利亚大学',
            degree: '学士学位 – 计算机科学',
            duration: '2026–2027',
          },
        ],
      },
      languages: {
        label: '语言能力',
        items: [
          { name: '中文', level: '母语' },
          { name: '英文', level: 'TOEIC C1 级别' },
        ],
      },
    }
  }
}
