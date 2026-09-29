import { notFound } from 'next/navigation'
import { credentials } from '../../../data/credentials'

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return credentials.filter(credential => credential.details).map(credential => ({ slug: credential.slug }))
}

export default function CredentialPage({ params }: Props) {
  const credential = credentials.find(item => item.slug === params.slug)
  if (!credential?.details) notFound()

  return (
    <main className="container py-12">
      <h1 className="text-2xl font-bold">{credential.title}</h1>
      <p className="mt-2 text-muted">{credential.issuer} — {credential.issuedYear}</p>
      <section className="mt-6"><p>{credential.details.summary}</p></section>
    </main>
  )
}
