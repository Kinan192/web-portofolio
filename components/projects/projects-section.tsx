"use client"

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { projects } from '../../data/projects'
import ProjectPreview from './project-preview'

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const dragStart = useRef<number | null>(null)
  const suppressClick = useRef(false)
  const activeProject = projects[activeIndex]

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const timer = window.setInterval(() => {
      if (!document.hidden) setActiveIndex(index => (index + 1) % projects.length)
    }, 5000)
    return () => window.clearInterval(timer)
  }, [paused])

  function finishDrag(clientX: number, pointerType: string) {
    if (dragStart.current === null) return
    const distance = clientX - dragStart.current
    dragStart.current = null
    setPaused(pointerType === 'mouse')
    if (Math.abs(distance) < 45) return
    suppressClick.current = true
    setActiveIndex(index => (index + (distance < 0 ? 1 : -1) + projects.length) % projects.length)
    window.setTimeout(() => { suppressClick.current = false }, 0)
  }

  return (
    <section className="projects-section" id="projects" aria-labelledby="work-gallery-title">
      <div className="container">
        <div className="gallery-heading">
          <div>
            <p className="gallery-eyebrow">SELECTED WORK</p>
            <h2 id="work-gallery-title">Work Gallery</h2>
            <p className="gallery-description">Eksplorasi proyek data, machine learning, dan produk digital, termasuk konsep yang sedang dikembangkan.</p>
          </div>
          <Link className="gallery-all" href="/projects">View All Projects <span aria-hidden="true">↗</span></Link>
        </div>

        <div className="gallery-carousel" aria-label="Galeri proyek" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onFocusCapture={() => setPaused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false) }}>
          <div className="gallery-stage" onPointerDown={event => { dragStart.current = event.clientX; setPaused(true) }} onPointerUp={event => finishDrag(event.clientX, event.pointerType)} onPointerCancel={() => { dragStart.current = null; setPaused(false) }} onPointerLeave={event => { if (event.buttons === 0) dragStart.current = null }}>
            {projects.map((project, index) => {
              const forward = (index - activeIndex + projects.length) % projects.length
              const offset = forward <= Math.floor(projects.length / 2) ? forward : forward - projects.length
              const side = offset === 0 ? 'active' : offset === 1 ? 'next' : offset === -1 ? 'previous' : offset > 0 ? 'far-next' : 'far-previous'
              return (
                <div className={`gallery-slide is-${side}`} key={project.slug} role="button" onClick={() => { if (!suppressClick.current) setActiveIndex(index) }} onKeyDown={event => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); setActiveIndex(index) } }} aria-label={`Tampilkan proyek ${project.title}`} aria-pressed={index === activeIndex} tabIndex={index === activeIndex ? -1 : 0}>
                  <span className="gallery-slide-top"><span>{project.category}</span></span>
                  <span className="gallery-slide-title">{project.title}</span>
                  <ProjectPreview kind={project.preview} />
                  <span className="gallery-slide-footer">{project.technologies.slice(0, 2).join(' / ')}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="gallery-detail" aria-live="off">
          <h3>{activeProject.title}</h3>
          <p>{activeProject.problem}</p>
          <Link href={`/projects/${activeProject.slug}`}>View Project <span aria-hidden="true">→</span></Link>
        </div>
      </div>
    </section>
  )
}
