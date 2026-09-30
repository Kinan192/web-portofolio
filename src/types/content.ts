export type Project = {
  slug: string
  title: string
  category: string
  problem: string
  contribution: string
  approach: string
  technologies: string[]
  preview: 'forecast' | 'sentiment' | 'telemetry'
  caseStudy?: { context: string }
}

export type Credential = {
  slug: string
  title: string
  issuer: string
  issuedYear: number
  details?: { summary: string; skills: string[] }
}
