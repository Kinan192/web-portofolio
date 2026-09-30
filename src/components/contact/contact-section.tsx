import Link from 'next/link'
import { site } from '@/data/site'

export default function ContactSection() {
  const { email, linkedin } = site.socials
  const hasContact = Boolean(email || linkedin)

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-panel">
            <div className="contact-intro">
              <p className="contact-eyebrow">LET'S CONNECT</p>
              <h2 id="contact-title">Mari terhubung<span>.</span></h2>
              <p>{site.contact.description}</p>
            </div>

            <div className="contact-links">
              {email && <a className="contact-link" href={`mailto:${email}`}><span>Email</span><strong>{email}</strong><span aria-hidden="true">↗</span></a>}
              {linkedin && <a className="contact-link" href={linkedin} target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><strong>Lihat profil profesional</strong><span aria-hidden="true">↗</span></a>}
              {!hasContact && <p className="contact-note">Tautan kontak sedang disiapkan. Sementara itu, kamu bisa melihat karya dan CV saya.</p>}
              <div className="contact-actions">
                <Link href="/projects">Lihat semua proyek <span aria-hidden="true">↗</span></Link>
                <a href="/Muhammad-Rizki-Ananda-CV.pdf" download="Muhammad-Rizki-Ananda-CV.pdf">Download CV <span aria-hidden="true">↓</span></a>
              </div>
            </div>
          </div>
          <aside className="contact-meta" aria-label="Informasi kolaborasi">
            <p className="contact-eyebrow">AVAILABILITY</p>
            <div className="contact-availability"><span aria-hidden="true" /> Terbuka untuk kolaborasi</div>
            <p className="contact-meta-copy">Diskusi seputar data, machine learning, dan ide produk digital.</p>
            <div className="contact-meta-location"><span>LOKASI</span><strong>Indonesia</strong><small>WIB / UTC+7</small></div>
          </aside>
        </div>
      </div>
    </section>
  )
}
