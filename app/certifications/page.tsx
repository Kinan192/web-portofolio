import Link from 'next/link'
import { credentials } from '../../data/credentials'

export default function Certifications() {
  return (
    <main className="container py-12">
      <h1 className="text-2xl font-bold">Sertifikasi</h1>
      <ul className="mt-6 space-y-4">
        {credentials.map(credential => (
          <li key={credential.slug} className="p-4 bg-white rounded-lg border">
            {credential.details ? (
              <Link href={`/certifications/${credential.slug}`}>{credential.title} — {credential.issuer}</Link>
            ) : <span>{credential.title} — {credential.issuer}</span>}
          </li>
        ))}
      </ul>
    </main>
  )
}
