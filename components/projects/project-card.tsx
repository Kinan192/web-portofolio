import Link from 'next/link'
import type { Project } from '../../data/projects'
import ProjectPreview from './project-preview'

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card panel">
      <div className="project-tags">
        {project.technologies.map(technology => <span key={technology}>{technology}</span>)}
      </div>
      <h3>{project.title}</h3>
      <p>{project.problem}</p>
      <ProjectPreview kind={project.preview} />
      <Link href={`/projects/${project.slug}`}>Lihat Proyek <span aria-hidden="true">→</span></Link>
    </article>
  )
}
