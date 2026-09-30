import Link from 'next/link'
import ProjectCard from '@/components/projects/project-card'
import { projects } from '@/data/projects'

export const metadata = {
  title: 'All Projects — Muhammad Rizki Ananda',
  description: 'Kumpulan proyek data, machine learning, dan produk digital Muhammad Rizki Ananda.',
}

export default function ProjectsPage() {
  return (
    <main className="projects-list-page">
      <div className="container">
        <Link className="projects-back" href="/#projects">← Kembali ke Work Gallery</Link>
        <p className="eyebrow">PORTFOLIO / PROJECTS</p>
        <h1>All Projects</h1>
        <p>Jelajahi proyek pilihan dan buka halaman masing-masing untuk melihat pendekatan serta teknologi yang digunakan.</p>
        <div className="projects-grid">
          {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </main>
  )
}
