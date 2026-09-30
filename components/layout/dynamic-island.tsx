"use client"
import { useEffect, useState } from 'react'
import { site } from '../../data/site'

const links = [
  ['home', 'Home'],
  ['projects', 'Work Gallery'],
  ['about', 'About'],
  ['contact', 'Contact'],
] as const

export default function DynamicIsland() {
  const [active, setActive] = useState('home')
  const [expanded, setExpanded] = useState(false)

  useEffect(() => {
    const updateExpanded = () => setExpanded(window.scrollY > 80)
    updateExpanded()
    window.addEventListener('scroll', updateExpanded, { passive: true })

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }, { rootMargin: '-20% 0px -55% 0px' })
    links.forEach(([id]) => {
      const section = document.getElementById(id)
      if (section) observer.observe(section)
    })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', updateExpanded)
    }
  }, [])

  return (
    <header className={`showcase-nav${expanded ? ' is-expanded' : ''}`}>
      <nav aria-label="Navigasi utama">
        <a className="showcase-brand" href="#home" onClick={() => setActive('home')}>{site.shortName}</a>
        <div className="showcase-links">
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setActive(id)} aria-current={active === id ? 'location' : undefined}>{label}</a>
          ))}
        </div>
        <a className="showcase-contact" href="#contact" onClick={() => setActive('contact')} aria-label="Hire Me: lihat bagian kontak">Hire Me <span aria-hidden="true">↗</span></a>
      </nav>
    </header>
  )
}
