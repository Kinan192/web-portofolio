import { site } from '../../data/site'
import SocialIcon, { type SocialNetwork } from '../shared/social-icon'

const networks: { key: SocialNetwork; label: string; detail: string }[] = [
  { key: 'github', label: 'GitHub', detail: 'Kode & eksperimen' },
  { key: 'linkedin', label: 'LinkedIn', detail: 'Profil profesional' },
  { key: 'email', label: 'Email', detail: 'Kirim pesan' },
]

export default function SocialLinks() {
  return (
    <div className="showcase-social">
      <p className="social-heading">LET&apos;S CONNECT <span aria-hidden="true">↗</span></p>
      <div className="social-list">
        {networks.map(({ key, label, detail }) => {
          const value = site.socials[key]
          const href = key === 'email' && value ? `mailto:${value}` : value
          const content = <>
            <span className="social-mark"><SocialIcon type={key} /></span>
            <span className="social-copy"><strong>{label}</strong><small>{detail}</small></span>
            <span className="social-arrow" aria-hidden="true">↗</span>
          </>
          return href ? (
            <a className="social-link" href={href} key={key} target={key === 'email' ? undefined : '_blank'} rel={key === 'email' ? undefined : 'noopener noreferrer'}>{content}</a>
          ) : (
            <span className="social-link is-unavailable" key={key} aria-label={`${label}: tautan belum tersedia`}>{content}</span>
          )
        })}
      </div>
    </div>
  )
}
