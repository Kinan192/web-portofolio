"use client"
import { useState, type PointerEvent } from 'react'
import { useMarquee } from './use-marquee'
import { technologies } from '../../data/technologies'

function TechGroup({ hidden = false }: { hidden?: boolean }) {
  return <div className="tech-group" aria-hidden={hidden}>{technologies.map(({ name, icon }) => <div className="tech-item" key={name} data-name={name} role="img" aria-label={name}><img src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${icon}`} alt="" loading="lazy" /><span>{name}</span></div>)}</div>
}

export default function TechStack() {
  const { trackRef, slowRef } = useMarquee()
  const [tooltip, setTooltip] = useState<{ name: string; left: number; top: number } | null>(null)

  const showTooltip = (event: PointerEvent<HTMLElement>) => {
    const item = (event.target as HTMLElement).closest<HTMLElement>('.tech-item')
    slowRef.current = Boolean(item)
    if (!item) { setTooltip(null); return }
    const rail = event.currentTarget.getBoundingClientRect()
    const hero = event.currentTarget.parentElement?.getBoundingClientRect()
    const itemRect = item.getBoundingClientRect()
    if (!hero) return
    setTooltip({
      name: item.dataset.name || '',
      left: window.innerWidth <= 760 ? itemRect.left - hero.left : rail.right - hero.left + 12,
      top: window.innerWidth <= 760 ? rail.top - hero.top - 12 : itemRect.top - hero.top + itemRect.height / 2,
    })
  }

  return <>
    <section className="tech-stack tech-stack--rail" aria-label="Teknologi yang digunakan"
      onPointerOver={showTooltip}
      onPointerMove={showTooltip}
      onPointerLeave={() => { slowRef.current = false; setTooltip(null) }}>
      <div className="tech-track" ref={trackRef}><TechGroup /><TechGroup hidden /></div>
    </section>
    {tooltip && <div className="tech-tooltip" style={{ left: tooltip.left, top: tooltip.top }} role="tooltip">{tooltip.name}</div>}
  </>
}
