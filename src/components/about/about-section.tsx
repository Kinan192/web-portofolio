import Link from 'next/link'
import { credentials } from '@/data/credentials'
import { site } from '@/data/site'
import { journey } from '@/data/timeline'

export default function AboutSection() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-heading">
          <p className="about-eyebrow">THE PERSON BEHIND THE WORK</p>
          <h2 id="about-title">About Me<span>.</span></h2>
        </div>

        <div className="about-layout">
          <div className="about-copy">
            <p className="about-kicker">{site.role}</p>
            <h3>{site.about.headline}</h3>
            <p className="about-description">{site.about.description}</p>
            <div className="about-actions">
              <a className="about-action-primary" href="/Muhammad-Rizki-Ananda-CV.pdf" download="Muhammad-Rizki-Ananda-CV.pdf">Download CV <span aria-hidden="true">↓</span></a>
              <a className="about-action-secondary" href="#projects">Lihat proyek saya <span aria-hidden="true">↗</span></a>
            </div>
            <div className="about-facts" aria-label="Ringkasan profil">
              <div><strong>S1</strong><span>Informatika UTY</span></div>
              <div><strong>IT</strong><span>Pengalaman support</span></div>
              <div><strong>Data</strong><span>Fokus saat ini</span></div>
            </div>
          </div>
          <div className="about-portrait">
            <img src="/images/rizki-lawu.webp" alt={`${site.name} di Puncak Gunung Lawu`} width="1000" height="1334" />
            <div className="about-portrait-caption"><strong>{site.shortName}</strong><span>Data &amp; Machine Learning</span></div>
          </div>
        </div>

        <div className="about-journey">
          <div className="about-journey-heading">
            <p className="about-eyebrow">JOURNEY &amp; MILESTONES</p>
            <h3>Perjalanan saya<span>.</span></h3>
            <p>Dari fondasi informatika hingga proyek data yang saya tekuni sekarang.</p>
          </div>
          <ol className="about-timeline">
            {journey.map((item, index) => (
              <li key={item.label}>
                <span className="about-timeline-index">0{index + 1}</span>
                <div>
                  <p className="about-timeline-label">{item.label}</p>
                  <h4>{item.title}</h4>
                  <p className="about-timeline-place">{item.place}</p>
                  <p className="about-timeline-description">{item.description}</p>
                  <div className="about-timeline-tags">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="about-credentials">
          <div><p className="about-eyebrow">CONTINUOUS LEARNING</p><strong>Kredensial &amp; pembelajaran</strong><small>{credentials.length} sertifikat dan detail pembelajaran</small></div>
          <Link href="/certifications">Lihat sertifikat <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
  )
}
