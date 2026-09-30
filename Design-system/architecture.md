# Arsitektur Portofolio

Status: implementasi saat ini

## Struktur sumber

Proyek memakai pola `src/` seperti repo referensi `rique-portofolio`, dengan komponen tetap dikelompokkan per fitur agar UI portofolio ini mudah dipelihara.

```text
src/
  app/             Route App Router dan root layout
  components/      about, contact, hero, layout, projects, ui
  data/            Konten lokal dan konfigurasi situs
  lib/             Pencarian konten serta parameter route statis
  styles/          CSS per fitur
  types/           Tipe konten bersama
```

`src/app/page.tsx` hanya menyusun section. Komponen presentasi tetap Server Components. Komponen yang membutuhkan state browser (`dynamic-island.tsx`, `projects-section.tsx`, `tech-stack.tsx`) memakai `"use client"`. CSS dasar dan token warna ada di `src/app/globals.css`; CSS tiap fitur dimuat oleh root layout dari `src/styles/`. Impor lintas folder memakai alias `@/` yang mengarah ke `src/`.

## Data dan route

`src/data/site.ts` menyimpan identitas, copy, dan URL sosial. Konten proyek, kredensial, perjalanan, keahlian, dan teknologi disimpan di file data terpisah. Bentuk data proyek dan kredensial berada di `src/types/content.ts`.

`src/lib/content.ts` menyediakan pencarian berdasarkan slug dan parameter route statis. Route detail di `src/app/projects/[slug]` dan `src/app/certifications/[slug]` memakai fungsi tersebut saat build. Sertifikasi tanpa isi detail tetap tampil di daftar, tanpa halaman detail kosong.

## Aset dan build

- `public/` adalah sumber aset statis; path di dalamnya menjadi URL langsung pada situs.
- `out/` adalah hasil `npm run build` yang siap di-deploy ke hosting statis.
- `.next/` dan `.next-dev/` adalah cache build production dan server development.
- `Design-system/` adalah referensi desain, bukan kode runtime.

Ekspor statis diatur melalui `output: 'export'` pada `next.config.js`. Palet gelap terinspirasi dari repo referensi, sementara tata letak hero, Work Gallery, About, dan Contact tetap mengikuti desain portofolio ini. Lihat `README.md` untuk perintah menjalankan dan tempat mengubah konten.
