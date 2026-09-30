import { credentials } from '@/data/credentials'
import { projects } from '@/data/projects'

export const projectSlugs = () => projects.map(({ slug }) => ({ slug }))
export const credentialSlugs = () => credentials.filter(({ details }) => details).map(({ slug }) => ({ slug }))

export const projectBySlug = (slug: string) => projects.find(project => project.slug === slug)
export const credentialBySlug = (slug: string) => credentials.find(credential => credential.slug === slug && credential.details)
