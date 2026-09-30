import { notFound } from 'next/navigation'
import { projectBySlug, projectSlugs } from '@/lib/content'

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return projectSlugs()
}

export default function ProjectPage({ params }: Props) {
  const project = projectBySlug(params.slug)
  if (!project) notFound()

  return (
    <main className="container py-12">
      <h1 className="text-3xl font-bold">{project.title}</h1>
      <p className="mt-4 text-muted">{project.problem}</p>
      <section className="mt-8">
        <h2 className="text-xl font-semibold">Case Study</h2>
        <p className="mt-2">{project.caseStudy?.context ?? project.approach}</p>
      </section>
    </main>
  )
}
