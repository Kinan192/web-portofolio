# Arsitektur Portofolio

Status: implementasi saat ini

## Alur halaman

`app/page.tsx` hanya menyusun section. Tiap section berada di folder fitur sendiri:

```text
components/
  layout/    dynamic-island.tsx, site-footer.tsx
  hero/      hero-showcase.tsx, social-links.tsx, tech-stack.tsx, use-marquee.ts
  projects/  projects-section.tsx, project-card.tsx, project-preview.tsx
  about/     about-section.tsx
  contact/   contact-section.tsx
  shared/    social-icon.tsx
```

Komponen presentasi tetap Server Components. Hanya `dynamic-island.tsx` dan `tech-stack.tsx` yang memakai `"use client"` untuk scroll state, IntersectionObserver, pointer interaction, dan animasi browser. Loop marquee dipisahkan ke hook `use-marquee.ts`. CSS dasar ada di `app/globals.css`; CSS tiap fitur ada di `styles/` dan dimuat oleh root layout.

## Data dan route

`data/site.ts` menyimpan identitas, copy, dan URL sosial. `data/projects.ts`, `data/credentials.ts`, `data/skills.ts`, dan `data/technologies.ts` menyimpan konten koleksi. Komponen menerima data melalui props atau mengimpor koleksi fitur terkait. `ProjectPreview` memilih visual berdasarkan `project.preview`, bukan urutan kartu. Visual proyek bersifat ilustratif dan tidak menampilkan angka hasil yang belum diverifikasi.

Route detail di `app/projects/[slug]` dan `app/certifications/[slug]` dibangkitkan dari data lokal saat build. Sertifikasi tanpa deskripsi detail tetap tampil di daftar, tanpa tautan ke halaman kosong. Ekspor statis diatur melalui `output: 'export'` pada `next.config.js`.

## Folder aset dan build

- `public/` adalah sumber aset statis; path di dalamnya menjadi URL langsung pada situs.
- `out/` adalah hasil `npm run build`, berisi HTML, JavaScript, CSS, dan salinan aset `public/` untuk deploy. Folder ini bisa dibuat ulang dan tidak perlu diedit.
- `.next/` serta `.next-dev/` adalah cache Next.js. Keduanya terpisah agar build production tidak menimpa cache server development.
- `Design-system/` menyimpan referensi desain, bukan kode runtime.

Lihat `README.md` untuk perintah menjalankan dan tempat mengubah konten.
