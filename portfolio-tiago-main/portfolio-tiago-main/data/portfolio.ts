export const projects = [
  {
    title: 'Cardápio SaaS',
    eyebrow: 'Plataforma de cardápios digitais',
    period: '2026 · Em desenvolvimento',
    description: 'Uma plataforma para estabelecimentos criarem e publicarem cardápios digitais com gestão segura em um painel administrativo.',
    points: ['Autenticação Supabase e acesso protegido ao painel', 'Arquitetura multi-tenant com isolamento por RLS', 'Migrations versionadas, Docker e deploy contínuo na Vercel'],
    stack: ['Next.js', 'React Server Components', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/tiagoufcg/cardapio-saas',
    images: [{ src: '/projects/cardapio-saas.png', alt: 'Página inicial do Cardápio SaaS' }],
  },
  {
    title: 'Lava-Jato Gerenciamento',
    eyebrow: 'SaaS web',
    period: '2026',
    description: 'Sistema multi-tenant para gestão de lava-jatos, com visão financeira, operação diária e relatórios.',
    points: ['Dashboard de faturamento, serviços e relatórios mensais', 'JWT, bcrypt, rate limiting e CORS com allowlist', 'Telemetria de erros e logging com rastreamento x-request-id'],
    stack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'JWT'],
    repo: '',
    demo: 'https://lavajato-one.vercel.app',
    images: [
      { src: '/projects/lava-jato-dashboard.png', alt: 'Dashboard do Lava-Jato Gerenciamento' },
    ],
  },
  {
    title: 'Lojinha UFCG',
    eyebrow: 'API REST de e-commerce',
    period: '2026',
    description: 'API de e-commerce com recursos de autenticação, catálogo, estoque, pedidos e gestão de usuários.',
    points: ['Mais de 30 endpoints com controle por perfil cliente/admin', 'MVC e Repository Pattern com seis entidades relacionais', 'Suporte a PostgreSQL e MySQL, com testes unitários em Jest'],
    stack: ['Node.js', 'TypeScript', 'Express', 'Sequelize', 'PostgreSQL', 'MySQL', 'Jest', 'JWT'],
    repo: 'https://github.com/tiagoufcg/WEB2',
    images: [{ src: '/projects/lojinha-ufcg.png', alt: 'Página inicial da Lojinha UFCG' }],
  },
]

export const skillGroups = [
  { name: 'Linguagens', skills: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'HTML', 'CSS'] },
  { name: 'Frontend', skills: ['React', 'Next.js', 'Vite', 'Tailwind CSS'] },
  { name: 'Backend / BaaS', skills: ['Node.js', 'Express.js', 'APIs REST', 'Supabase'] },
  { name: 'Bancos e ORMs', skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Prisma', 'Sequelize'] },
  { name: 'Segurança', skills: ['Bcrypt', 'JWT', 'CORS', 'Rate limiting', 'Row Level Security', 'Validação de dados'] },
  { name: 'Arquitetura', skills: ['MVC', 'Repository Pattern', 'Arquitetura em camadas', 'Multi-tenant'] },
  { name: 'DevOps e ferramentas', skills: ['Git', 'GitHub', 'Docker', 'Docker Compose', 'Postman', 'Vercel', 'Render'] },
  { name: 'Métodos e testes', skills: ['Jest', 'Scrum', 'OKRs', 'KPIs', 'Desenvolvimento ágil'] },
]

export const experience = {
  role: 'Diretor Executivo',
  company: 'CODEX · Empresa júnior de TI da UFCG',
  period: '2023 — 2025',
  location: 'Campina Grande, PB',
  points: [
    'Liderança de mais de 15 pessoas em cinco diretorias, alinhando objetivos técnicos, comerciais e estratégicos.',
    'Coordenação do site institucional da CEEI/UFCG, do planejamento ao deploy.',
    'Implementação de práticas ágeis e acompanhamento por OKRs e KPIs.',
    'Atuação em negociações, parcerias, marketing, captação de clientes e representação institucional.',
  ],
}
