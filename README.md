# Portofolio Muhammad Rizki Ananda

Situs portofolio statis berbasis Next.js App Router, TypeScript, dan CSS. Semua halaman dihasilkan saat build; animasi navbar dan marquee berjalan di browser.

## Menjalankan

```bash
npm install
npm run dev
```

Untuk membuat dan melihat hasil statis:

```bash
npm run build
npm run preview
```

`preview` menyajikan folder `out/` di `http://localhost:3000`. Gunakan isi `out/` saat deploy ke hosting statis.

## Struktur

```text
src/app/         Route, root layout, dan CSS dasar
src/components/  UI per fitur; komponen umum berada di ui/
src/data/        Konten lokal untuk halaman dan komponen
src/lib/         Fungsi pencarian konten dan parameter route statis
src/types/       Tipe konten bersama
src/styles/      CSS per fitur
public/images/   Aset gambar sumber yang tersedia di URL /images/...
Design-system/   Referensi desain dan spesifikasi; tidak dipakai saat runtime
out/             Hasil ekspor statis dari npm run build (generated)
.next/           Cache build production (generated)
.next-dev/       Cache server development (generated)
```

`public/` berisi aset sumber yang disalin apa adanya ke root situs. Contohnya, `public/images/rizki-photo.webp` tersedia sebagai `/images/rizki-photo.webp`. `out/` adalah hasil build siap deploy dan akan dibuat ulang oleh `npm run build`; jangan mengedit file di dalamnya. Folder generated diabaikan oleh `.gitignore`.

Ubah identitas, teks profil, dan tautan sosial di `src/data/site.ts`; daftar proyek di `src/data/projects.ts`; sertifikasi di `src/data/credentials.ts`; perjalanan profil di `src/data/timeline.ts`; keahlian di `src/data/skills.ts`; dan logo marquee di `src/data/technologies.ts`. Tautan sosial yang belum diisi tidak menjadi tautan aktif.

Impor lintas folder memakai alias `@/` yang mengarah ke `src/`. Struktur ini mengambil pemisahan `app`, `components`, `data`, `lib`, dan `types` dari repo referensi [rique-portofolio](https://github.com/xvrique/rique-portofolio), sambil mempertahankan ekspor statis dan UI portofolio ini.
