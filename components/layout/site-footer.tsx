import { site } from '../../data/site'
import SocialIcon from '../shared/social-icon'

export default function SiteFooter() {
  const { email, github, linkedin } = site.socials
  return (
    <footer>
      <div className="container footer-inner">
        <div><strong>{site.name}</strong><span>·</span><span>© {new Date().getFullYear()}. Data Science &amp; Quantitative Analytics.</span></div>
        <div className="footer-icons">
          {email && <a href={`mailto:${email}`} aria-label="Email"><SocialIcon type="email" /></a>}
          {github && <a href={github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><SocialIcon type="github" /></a>}
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>}
        </div>
      </div>
    </footer>
  )
}
