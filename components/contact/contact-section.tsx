import { site } from '../../data/site'

export default function ContactSection() {
  const { email, linkedin } = site.socials
  return (
    <section className="contact-section container" id="contact">
      <div className="contact-panel panel">
        <p className="eyebrow">Inisiasi Komunikasi</p>
        <h2>Mari Berkolaborasi</h2>
        <p>{site.contact.description}</p>
        {(email || linkedin) ? (
          <div className="contact-actions">
            {email && <a className="button primary" href={`mailto:${email}`}>Kirim Surel Langsung</a>}
            {linkedin && <a className="button secondary" href={linkedin} target="_blank" rel="noopener noreferrer">Terhubung di LinkedIn</a>}
          </div>
        ) : <p className="contact-pending">Tautan kontak akan segera tersedia.</p>}
        {email && <small>{site.contact.responseNote}</small>}
      </div>
    </section>
  )
}
