'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, Check, Code2, Download, MapPin, Menu, Moon, Sun, X } from 'lucide-react'
import { experience, projects, skillGroups } from '@/data/portfolio'

const navItems = [['Sobre', '#sobre'], ['Projetos', '#projetos'], ['Experiência', '#experiencia'], ['Habilidades', '#habilidades'], ['Contato', '#contato']]

function SectionHeading({ index, title, subtitle }: { index: string; title: string; subtitle: string }) {
  return <div className="section-heading"><span className="section-index">{index}</span><div><h2>{title}</h2><p>{subtitle}</p></div></div>
}

function ProjectCard({ project, number }: { project: (typeof projects)[number]; number: string }) {
  return <article className="project-card reveal">
    <div className="project-top"><span className="project-number">{number} / 03</span><span className="project-period">{project.period}</span></div>
    <div className="project-title-row"><div><span className="project-eyebrow">{project.eyebrow}</span><h3>{project.title}</h3></div><ArrowDownRight aria-hidden="true" className="project-arrow" /></div>
    <p className="project-description">{project.description}</p>
    <ul className="project-points">{project.points.map((point) => <li key={point}><Check aria-hidden="true" />{point}</li>)}</ul>
    <div className="tag-list">{project.stack.map((item) => <span className="tech-tag" key={item}>{item}</span>)}</div>
    <div className="project-links">{project.repo && <a href={project.repo} target="_blank" rel="noreferrer">Repositório <ArrowUpRight aria-hidden="true" /></a>}{project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Ver demo <ArrowUpRight aria-hidden="true" /></a>}</div>
  </article>
}

function SkillBadge({ children }: { children: string }) { return <span className="skill-badge">{children}</span> }

export default function Portfolio() {
  const [dark, setDark] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  return <main>
    <header className="site-header"><a className="brand" href="#inicio" aria-label="Tiago Sales, início"><span className="brand-mark">TS</span><span>tiago<span className="brand-dot">.</span>dev</span></a>
      <nav className={menuOpen ? 'main-nav nav-open' : 'main-nav'} aria-label="Navegação principal">{navItems.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}</nav>
      <div className="header-actions"><button className="theme-toggle" onClick={() => setDark(!dark)} aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}>{dark ? <Sun /> : <Moon />}</button><a className="header-contact" href="#contato">Vamos conversar <ArrowUpRight /></a><button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}>{menuOpen ? <X /> : <Menu />}</button></div>
    </header>

    <section className="hero page-width" id="inicio"><div className="hero-copy"><div className="availability"><span className="availability-dot" /> Aberto a oportunidades remotas</div><p className="hero-kicker">Olá, eu sou</p><h1>Tiago Sales<br /><span>dos Santos.</span></h1><p className="hero-role">Desenvolvedor Full Stack <span>—</span> construindo para a web.</p><p className="hero-description">Construo aplicações web e APIs REST com React, Next.js, TypeScript, Node.js e PostgreSQL. Foco em SaaS multi-tenant, segurança e deploy em produção.</p><div className="hero-location"><MapPin aria-hidden="true" /> Campina Grande, PB <span className="location-divider">·</span> Disponível para trabalho remoto</div><div className="hero-actions"><a className="button-primary" href="#projetos">Ver projetos <ArrowDown /></a><a className="button-link" href="https://github.com/tiagoufcg" target="_blank" rel="noreferrer"><Code2 /> GitHub <ArrowUpRight /></a><a className="button-link" href="https://linkedin.com/in/tiago-sales-dos-santos" target="_blank" rel="noreferrer"><span className="linkedin-glyph">in</span> LinkedIn <ArrowUpRight /></a><a className="button-link resume-link" href="/curriculo.pdf" target="_blank" rel="noreferrer"><Download /> Currículo <ArrowUpRight /></a></div></div>
      <div className="hero-visual" aria-label="Bloco de código decorativo"><div className="code-window"><div className="code-top"><div className="window-dots"><i /><i /><i /></div><span>tiago.ts</span><Code2 /></div><div className="code-body"><div className="code-line"><span className="line-number">01</span><span><b>const</b> developer = {'{'}</span></div><div className="code-line indent"><span className="line-number">02</span><span>name: <em>&quot;Tiago Sales&quot;</em>,</span></div><div className="code-line indent"><span className="line-number">03</span><span>role: <em>&quot;Full Stack Dev&quot;</em>,</span></div><div className="code-line indent"><span className="line-number">04</span><span>location: <em>&quot;Brazil&quot;</em>,</span></div><div className="code-line indent"><span className="line-number">05</span><span>focus: [</span></div><div className="code-line indent-more"><span className="line-number">06</span><span><em>&quot;SaaS&quot;</em>, <em>&quot;security&quot;</em>,</span></div><div className="code-line indent-more"><span className="line-number">07</span><span><em>&quot;great UX&quot;</em></span></div><div className="code-line indent"><span className="line-number">08</span><span>],</span></div><div className="code-line"><span className="line-number">09</span><span>{'}'}</span></div><div className="code-line code-comment"><span className="line-number">10</span><span>// sempre aprendendo<span className="cursor">▍</span></span></div></div><div className="code-footer"><span><span className="footer-dot" /> disponível para novos desafios</span><span>UTF-8</span></div></div><div className="hero-float float-stack"><span className="float-icon">{'</>'}</span><span><b>Stack moderna</b><small>do front ao banco</small></span></div><div className="hero-float float-location"><span className="location-pin"><MapPin /></span><span><b>Brasil</b><small>remoto · global</small></span></div></div>
      <a className="scroll-cue" href="#sobre"><span>Role para explorar</span><ArrowDown /></a></section>

    <section className="section page-width" id="sobre"><SectionHeading index="01" title="Sobre mim" subtitle="Um pouco da minha trajetória e do que me move."/><div className="about-grid"><div className="about-copy reveal"><p>Sou desenvolvedor Full Stack com experiência prática em aplicações web e APIs REST. Trabalho com autenticação e autorização, arquitetura em camadas, modelagem de dados, Row Level Security, aplicações multi-tenant e deploy em produção.</p><p>Fui Diretor Executivo da CODEX, empresa júnior de TI da UFCG, onde desenvolvi também minha experiência em liderança, gestão de projetos e metodologias ágeis. Gosto de transformar problemas reais em software bem construído, seguro e fácil de usar.</p><a href="#experiencia" className="text-link">Mais sobre minha trajetória <ArrowRight /></a></div><div className="stats-grid">{[['03', 'SaaS / APIs em 2026'], ['15+', 'pessoas lideradas'], ['30+', 'endpoints de API'], ['SFC', 'Scrum certificado']].map(([value, label]) => <div className="stat-card reveal" key={label}><strong>{value}</strong><span>{label}</span></div>)}</div></div></section>

    <section className="section page-width projects-section" id="projetos"><SectionHeading index="02" title="Projetos em destaque" subtitle="Produtos e sistemas construídos com propósito e atenção aos detalhes."/><div className="projects-grid">{projects.map((project, index) => <ProjectCard project={project} number={`0${index + 1}`} key={project.title} />)}</div></section>

    <section className="section page-width" id="experiencia"><SectionHeading index="03" title="Experiência" subtitle="Liderança, colaboração e entrega de ponta a ponta."/><div className="timeline"><div className="timeline-marker"><span /></div><article className="timeline-item reveal"><div className="timeline-meta"><span>{experience.period}</span><span>{experience.location}</span></div><h3>{experience.role}</h3><p className="timeline-company">{experience.company}</p><ul className="timeline-points">{experience.points.map((point) => <li key={point}>{point}</li>)}</ul></article></div></section>

    <section className="section page-width education-section" id="formacao"><SectionHeading index="04" title="Formação & certificações" subtitle="Aprendizado contínuo, dentro e fora da sala de aula."/><div className="education-grid"><article className="education-card reveal"><span className="card-label">FORMAÇÃO</span><div className="education-item"><span className="education-year">2026 — 2027 · previsto</span><h3>Análise e Desenvolvimento de Sistemas</h3><p>UEPB · Tecnólogo</p><small>Bolsista do Programa Limite do Visível (SECTIES/FAPESQ-PB)</small></div><div className="education-item"><span className="education-year">Ingresso em 2023</span><h3>Ciência da Computação</h3><p>UFCG · Curso trancado</p></div></article><article className="education-card reveal"><span className="card-label">CERTIFICAÇÃO & IDIOMAS</span><div className="education-item"><span className="education-year">NOV · 2023</span><h3>Scrum Fundamentals Certified</h3><p>SCRUMstudy · SFC™</p></div><div className="language-row"><span>Português</span><b>Nativo</b></div><div className="language-row"><span>Inglês</span><b>Intermediário · leitura e escrita técnica</b></div></article></div></section>

    <section className="section page-width skills-section" id="habilidades"><SectionHeading index="05" title="Habilidades" subtitle="Ferramentas e práticas que uso para entregar software de qualidade."/><div className="skills-grid">{skillGroups.map((group) => <article className="skill-group reveal" key={group.name}><h3>{group.name}</h3><div className="skill-list">{group.skills.map((skill) => <SkillBadge key={skill}>{skill}</SkillBadge>)}</div></article>)}</div></section>

    <section className="contact-section" id="contato"><div className="page-width contact-inner"><div className="contact-copy reveal"><span className="section-index">06 · CONTATO</span><h2>Vamos conversar<span>?</span></h2><p>Busco oportunidades como Desenvolvedor Full Stack, especialmente em times que valorizam produto, qualidade e colaboração. Remoto, do Brasil para o mundo.</p><a className="contact-email" href="mailto:thiagosales812@gmail.com">thiagosales812@gmail.com <ArrowUpRight /></a></div><div className="contact-links reveal"><a href="mailto:thiagosales812@gmail.com"><span className="social-icon"><span>@</span></span><span><b>E-mail</b><small>Vamos trocar uma ideia</small></span><ArrowUpRight /></a><a href="https://linkedin.com/in/tiago-sales-dos-santos" target="_blank" rel="noreferrer"><span className="social-icon"><span className="linkedin-glyph">in</span></span><span><b>LinkedIn</b><small>Conecte-se comigo</small></span><ArrowUpRight /></a><a href="https://github.com/tiagoufcg" target="_blank" rel="noreferrer"><span className="social-icon"><Code2 /></span><span><b>GitHub</b><small>Veja o que estou construindo</small></span><ArrowUpRight /></a></div></div></section>
    <footer className="site-footer page-width"><a className="brand" href="#inicio"><span className="brand-mark">TS</span><span>tiago<span className="brand-dot">.</span>dev</span></a><span>© 2026 Tiago Sales dos Santos</span><div className="footer-socials"><a href="https://github.com/tiagoufcg" target="_blank" rel="noreferrer" aria-label="GitHub"><Code2 /></a><a href="https://linkedin.com/in/tiago-sales-dos-santos" target="_blank" rel="noreferrer" aria-label="LinkedIn"><span className="linkedin-glyph">in</span></a><a href="mailto:thiagosales812@gmail.com" aria-label="E-mail">@</a></div></footer>
  </main>
}
