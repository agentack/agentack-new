// Run with: npx ts-node --compiler-options '{"module":"commonjs"}' scripts/seed-gaming-animation.ts
// Or copy-paste into Sanity Studio's Vision tool as a mutation.

import { createClient } from 'next-sanity'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-03-20',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

const doc = {
  _type: 'gamingAnimation',
  _id: 'gamingAnimation',
  name: 'Gaming & Animation',
  heroHeadline: 'Game Development & Creative Production',
  heroSubtitle:
    'We design and build games, 2D & 3D animations, interactive experiences, and digital assets for startups, studios, brands, and enterprises.',
  heroPrimaryCta: 'Discuss Your Project',
  heroSecondaryCta: 'View Our Work',
  services: [
    {
      title: 'Game Development',
      description: 'Custom game development across platforms using industry-leading engines.',
      icon: 'Gamepad2',
      items: [
        'Unity Development',
        'Unreal Engine Development',
        'Mobile Games',
        'PC Games',
        'Multiplayer Games',
        'Educational Games',
        'Serious Games',
      ],
    },
    {
      title: 'Animation',
      description: 'High-quality 2D and 3D animation for games, marketing, and storytelling.',
      icon: 'Palette',
      items: [
        '2D Animation',
        '3D Animation',
        'Motion Graphics',
        'Explainer Videos',
        'Product Animation',
        'Cinematics',
      ],
    },
    {
      title: '3D Art & Modeling',
      description: 'Production-ready 3D assets for games, visualization, and interactive experiences.',
      icon: 'Box',
      items: [
        'Character Modeling',
        'Environment Design',
        'Props & Vehicles',
        'Product Visualization',
        'Game Assets',
      ],
    },
    {
      title: 'Character Design & Rigging',
      description: 'Custom characters with professional rigging for seamless animation.',
      icon: 'Shirt',
      items: [
        'Character Design',
        'Rigging',
        'Facial Rigging',
        'Animation Ready Characters',
      ],
    },
    {
      title: 'Cinematics & Trailers',
      description: 'Cinematic sequences and promotional content that captivate audiences.',
      icon: 'Video',
      items: [
        'Game Trailers',
        'Launch Videos',
        'Cutscenes',
        'Promotional Videos',
      ],
    },
  ],
  industries: [
    'Gaming Studios',
    'Startups',
    'Brands',
    'Advertising Agencies',
    'Animation Studios',
    'Educational Organizations',
  ],
  toolsTitle: 'Technologies & Creative Tools',
  toolGroups: [
    {
      groupName: 'Game Engines',
      tools: ['Unity', 'Unreal Engine'],
    },
    {
      groupName: '3D',
      tools: ['Autodesk Maya', 'Blender', 'ZBrush', 'Substance Painter'],
    },
    {
      groupName: 'Design',
      tools: ['Illustrator', 'Photoshop', 'Figma'],
    },
    {
      groupName: 'Animation',
      tools: ['After Effects', 'Premiere Pro', 'Cinema 4D'],
    },
  ],
  processTitle: 'Our Development Process',
  processSteps: [
    'Discovery',
    'Concept & Planning',
    'Design & Asset Creation',
    'Development',
    'Animation',
    'Testing & QA',
    'Launch & Support',
  ],
  whyTitle: 'Why Choose Agentack',
  whyItems: [
    'Experienced Game Developers',
    'Skilled 2D & 3D Artists',
    'Production-Ready Assets',
    'Modern Development Pipeline',
    'Collaborative Process',
  ],
  faqs: [
    {
      question: 'Can you build games from scratch?',
      answer:
        'Yes. We handle full-cycle game development from concept and design to development, animation, testing, and launch across mobile, PC, and console platforms.',
    },
    {
      question: 'Do you use Unity or Unreal?',
      answer:
        'We work with both Unity and Unreal Engine. Our team chooses the best engine for your project based on requirements, target platform, and performance needs.',
    },
    {
      question: 'Can you work with our existing assets?',
      answer:
        'Absolutely. We can integrate our pipeline with your existing assets, art style, and codebase. We also offer asset optimization and pipeline consulting.',
    },
    {
      question: 'Do you create game-ready 3D models?',
      answer:
        'Yes. All our 3D models are built with game-ready topology, UV mapping, and texturing — optimized for real-time rendering in any engine.',
    },
    {
      question: 'Can you animate products?',
      answer:
        'Yes. We create product animations and visualizations for marketing, presentations, and ecommerce, including 3D product tours and explainer videos.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer:
        'Yes. We offer ongoing support, updates, bug fixes, and content additions post-launch to keep your project running smoothly.',
    },
  ],
  bridgeHeadline: 'Looking for AI instead?',
  bridgeText:
    'Agentack also engineers custom AI systems for businesses, including intelligent automation, AI agents, and workflow optimization. Our teams collaborate to deliver projects that combine intelligent software with high-quality interactive experiences.',
  ctaHeadline: 'Have a game or animation project in mind?',
  ctaSubtext: "Let's discuss your idea and turn it into reality.",
  ctaLabel: 'Start Your Project',
}

async function seed() {
  await client.createOrReplace(doc)
  console.log('Gaming & Animation document seeded successfully!')
}

seed().catch(console.error)
