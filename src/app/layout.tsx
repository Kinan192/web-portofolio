import './globals.css'
import '../styles/navigation.css'
import '../styles/hero.css'
import '../styles/tech-stack.css'
import '../styles/projects.css'
import '../styles/about.css'
import '../styles/contact.css'
import '../styles/footer.css'
import { site } from '@/data/site'

export const metadata = {
  title: `${site.name} — Portfolio`,
  description: site.role,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        {children}
      </body>
    </html>
  )
}
