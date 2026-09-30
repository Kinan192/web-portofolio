import { site } from '@/data/site'
import SocialLinks from './social-links'
import TechStack from './tech-stack'

export default function HeroShowcase() {
  return (
    <section className="showcase" id="home">
      <div className="showcase-grid" aria-hidden="true" />
      <div className="showcase-watermark" aria-hidden="true">DATA &amp; MACHINE LEARNING</div>
      <TechStack />
      <div className="showcase-content">
        <div className="showcase-left">
          <div className="showcase-name">
            <span>I&apos;M</span>
            <span>{site.heroName.toUpperCase()}</span>
            <a href="#contact">Let&apos;s Discuss <span aria-hidden="true">↗</span></a>
          </div>
          <p className="showcase-intro">{site.intro}</p>
        </div>
        <div className="showcase-photo">
          <img src="/images/rizki-photo.webp" alt={`${site.name} dalam busana wisuda`} />
        </div>
        <div className="showcase-right">
          <SocialLinks />
          <div className="showcase-role">
            <span className="role-label">WHAT I DO</span>
            <h1>DATA<br />ANALYST <span>&amp;</span><small>ML PRACTITIONER</small></h1>
          </div>
        </div>
      </div>
    </section>
  )
}
