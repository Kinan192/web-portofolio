import type { Credential } from '@/types/content'

export const credentials: Credential[] = [
  {
    slug: 'tf-developer-cert',
    title: 'TensorFlow Developer Certificate',
    issuer: 'Google',
    issuedYear: 2023,
    details: { summary: 'Foundational deep learning and TF usage', skills: ['Neural Networks', 'TF2'] },
  },
  {
    slug: 'gda-analytics',
    title: 'Google Data Analytics Professional',
    issuer: 'Google',
    issuedYear: 2022,
  },
]
