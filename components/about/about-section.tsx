import Link from 'next/link'
import { credentials } from '../../data/credentials'
import { site } from '../../data/site'
import { skills } from '../../data/skills'

export default function AboutSection() {
  return (
    <section className="about-section container" id="about">
      <div className="section-heading">
        <div><p className="eyebrow">Latar Belakang &amp; Kapabilitas <span className="status-dot" /></p><h2>Tentang Saya</h2></div>
      </div>
      <div className="about-grid">
        <div className="about-left">
          <article className="panel bio">
            <h3>{site.about.headline}</h3>
            <p>{site.about.description}</p>
          </article>
          <article className="panel skills">
            <p className="overline">Keahlian Teknologi Terpilih</p>
            <div className="skills-grid">
              {skills.map(skill => <div key={skill.name}><strong>{skill.name}</strong><small>{skill.detail}</small></div>)}
            </div>
          </article>
        </div>
        <article className="panel credentials">
          <div className="credential-head"><p className="overline">Kredensial Terverifikasi</p><span aria-hidden="true">✧</span></div>
          {credentials.map(credential => (
            <div className="credential" key={credential.slug}>
              <div><strong>{credential.title}</strong><span>{credential.issuedYear}</span></div>
              <small>{credential.issuer}</small>
              <Link href="/certifications">Lihat Kredensial ↗</Link>
            </div>
          ))}
        </article>
      </div>
    </section>
  )
}
