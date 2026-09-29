import { projects } from '../../data/projects'
import ProjectCard from './project-card'

export default function ProjectsSection() {
  return (
    <section className="projects-section container" id="projects">
      <div className="section-heading">
        <div><p className="eyebrow">Katalog Rekayasa <span className="status-dot" /></p><h2>Proyek Pilihan</h2></div>
        <p>Penyelesaian tantangan riil melalui analisis deret waktu, komputasi bahasa alami, serta arsitektur platform telemetri prediktif.</p>
      </div>
      <div className="projects-grid">
        {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
      </div>
    </section>
  )
}
