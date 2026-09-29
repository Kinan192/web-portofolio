import AboutSection from '../components/about/about-section'
import ContactSection from '../components/contact/contact-section'
import HeroShowcase from '../components/hero/hero-showcase'
import DynamicIsland from '../components/layout/dynamic-island'
import SiteFooter from '../components/layout/site-footer'
import ProjectsSection from '../components/projects/projects-section'

export default function Page() {
  return (
    <>
      <DynamicIsland />
      <main>
        <HeroShowcase />
        <ProjectsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  )
}
