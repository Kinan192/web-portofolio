import Link from 'next/link'
import { credentials } from '../../data/credentials'
import { site } from '../../data/site'

const focusAreas = [
  { label: '01', title: 'Data Analytics', detail: 'Mengolah data menjadi insight yang dapat digunakan.' },
  { label: '02', title: 'Machine Learning', detail: 'Mengeksplorasi model prediktif dan evaluasinya.' },
  { label: '03', title: 'Visualisasi', detail: 'Menyampaikan temuan secara jelas dan terarah.' },
]

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-heading">
          <p className="about-eyebrow">THE PERSON BEHIND THE WORK</p>
          <h2 id="about-title">About Me<span>.</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-portrait">
            <img src="/images/rizki-lawu.webp" alt={`${site.name} di Puncak Gunung Lawu`} width="1000" height="1334" />
            <div className="about-portrait-caption"><strong>{site.shortName}</strong><span>Data &amp; Machine Learning</span></div>
          </div>
          <div className="about-copy">
            <p className="about-kicker">{site.role}</p>
            <h3>{site.about.headline}</h3>
            <p className="about-description">{site.about.description}</p>
            <div className="about-actions">
              <a className="about-action-primary" href="/Muhammad-Rizki-Ananda-CV.pdf" download="Muhammad-Rizki-Ananda-CV.pdf">Download CV <span aria-hidden="true">↓</span></a>
              <a className="about-action-secondary" href="#projects">Lihat proyek saya <span aria-hidden="true">↗</span></a>
            </div>

            <div className="about-focus" aria-label="Bidang fokus">
              {focusAreas.map(area => (
                <div key={area.label}>
                  <span>{area.label}</span>
                  <strong>{area.title}</strong>
                  <small>{area.detail}</small>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="about-credentials">
          <div><p className="about-eyebrow">CONTINUOUS LEARNING</p><strong>Kredensial &amp; pembelajaran</strong><small>{credentials.length} sertifikat dan detail pembelajaran</small></div>
          <Link href="/certifications">Lihat sertifikat <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}
