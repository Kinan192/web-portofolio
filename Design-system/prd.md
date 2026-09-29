# PRD — Portfolio Muhammad Rizki Ananda

Status: rancangan MVP · Pembaruan: 28 September 2026

## 1. Ringkasan produk

Portofolio dengan **satu landing page utama** untuk memperkenalkan Rizki sebagai lulusan S1 Informatika UTY yang berfokus pada data analytics dan machine learning. Ringkasan karya dan profil berada di landing page, sementara proyek dan sertifikasi yang perlu penjelasan lebih lanjut mendapat halaman detail tersendiri. Sasaran utama adalah recruiter/hiring manager dan calon kolaborator. Semua halaman dibuat statis saat build, dengan interaksi navbar di browser.

## 2. Tujuan dan batasan

**Tujuan:** menunjukkan karya melalui 3 proyek pilihan, menyediakan detail/case study proyek, menyajikan sertifikasi secara ringkas dengan akses ke detailnya, menyediakan jalur kontak yang jelas, dan menjaga pengalaman cepat serta nyaman di mobile.

**Bukan tujuan MVP:** akun, CMS, database, blog, animasi 3D, dashboard data real-time, formulir dengan backend, atau daftar semua riwayat kegiatan.

## 3. Pengguna dan tugas utama

| Pengguna | Kebutuhan | Jalur tercepat |
| --- | --- | --- |
| Recruiter data | Paham identitas dan bukti kemampuan | Hero → Projects → About/Contact |
| Reviewer teknis | Lihat metode, kontribusi, dan tautan karya | Projects → halaman detail → repo/demo bila tersedia |
| Calon kolaborator | Pahami profil dan cara menghubungi | About → Contact |

## 4. Sitemap dan isi

Halaman utama `/` memuat empat anchor `#home`, `#projects`, `#about`, `#contact`. Navbar: **Home · Projects · About · Contact**. Halaman tambahan yang dibuat dari konten saat build: `/projects/[slug]` untuk case study, `/certifications` untuk daftar kredensial, dan `/certifications/[slug]` untuk detailnya. Sertifikasi tetap tidak masuk navbar utama: tautan **View credentials →** berada di About. CV dapat diakses dari About/Contact dan opsional sebagai aksi kontekstual di navbar About jika berkas tersedia.

| Route | Fungsi | Konten awal |
| --- | --- | --- |
| `/` | Landing page dan navigasi utama | Empat section ringkas |
| `/projects/[slug]` | Detail proyek individual | Hanya proyek dengan bahan case study yang sudah siap |
| `/certifications` | Daftar sertifikat relevan | Nama resmi, penerbit, tahun, link detail |
| `/certifications/[slug]` | Detail sertifikat individual | Hanya kredensial yang telah diverifikasi dan punya isi detail |

Ini tetap **situs statis dengan beberapa URL**, bukan aplikasi dengan backend. Menambah proyek atau sertifikat berarti menambah data/halaman, kemudian build dan deploy ulang; tidak perlu membuat layout dari nol.

| Section | Konten MVP | Syarat konten |
| --- | --- | --- |
| Home | Grid latar halus, nama besar, foto pemilik atau fallback netral, tautan sosial | Hero tetap sederhana; peran, bio, dan keahlian disampaikan di About dan Projects |
| Projects | 3 proyek unggulan: prediksi saham LSTM/GRU, analisis sentimen, HELIA | Kartu merangkum proyek; halaman detail menjelaskan masalah, peran Rizki, metode, hasil terverifikasi, dan tautan yang ada |
| About | Latar belakang UTY, stack relevan, pengalaman terpilih, ringkasan sertifikasi | Pengalaman RS Awal Bros Botania dapat ditampilkan sebagai magang IT Support; tidak disamakan dengan pengalaman Data Scientist |
| Contact | Email, GitHub, LinkedIn, CV bila tersedia | Semua URL dan email diperiksa sebelum rilis |

Nama sertifikat, tanggal, URL kredensial, teks bio final, domain, foto, dan berkas CV adalah **input konten yang masih perlu disiapkan**, bukan fakta yang boleh ditebak. Kredensial IBM yang sudah diterbitkan dapat ditampilkan dengan nama resmi dari bukti; PL-300 yang masih direncanakan tidak dimasukkan sebagai sertifikat yang dimiliki.

## 5. Kebutuhan fungsional

- **FR-01** Semua menu mengarah ke anchor yang benar; klik, keyboard, dan tautan hash langsung membawa pengguna ke section tujuan tanpa tertutup navbar.
- **FR-02** Hero hanya menampilkan nama, foto, dan sosial di atas latar grid halus. Semua tautan sosial yang ditampilkan menuju akun/kontak yang benar.
- **FR-03** Dynamic Island menunjukkan section aktif saat scroll dan tetap menyediakan empat menu. Aksi CV kontekstual hanya muncul bila URL CV valid.
- **FR-04** Kartu proyek dengan detail siap menuju `/projects/[slug]`; setiap detail berisi case study yang dapat dibaca mandiri. Tombol repo/demo hanya tampil ketika URL tersedia.
- **FR-05** Tautan sertifikasi pada About membuka `/certifications`; entri dengan detail siap membuka `/certifications/[slug]`. Tautan verifikasi hanya tampil ketika tersedia.
- **FR-06** Tautan Contact berfungsi. Unduh CV memakai file PDF aktual dengan nama yang masuk akal.
- **FR-07** Tampilan menyesuaikan mobile, tablet, dan desktop tanpa tumpang tindih.
- **FR-08** Navbar pada halaman detail kembali ke anchor landing page; tiap detail memiliki tautan kembali yang jelas. Route yang belum punya konten tidak diterbitkan.

## 6. Kebutuhan kualitas dan penerimaan

| Area | Kriteria penerimaan |
| --- | --- |
| Konten | Tidak ada Lorem Ipsum, link `#` palsu, angka performa tanpa bukti, atau sertifikat rencana yang tampil sebagai selesai |
| Aksesibilitas | Navigasi dan tautan antarhalaman dapat digunakan dengan keyboard; fokus terlihat; pengaturan reduced motion dihormati; audit kontras pada desain akhir |
| Kinerja | Gambar terkompresi, font terbatas, JavaScript interaktif hanya pada komponen yang perlu; audit Lighthouse mobile dengan target Performance, Accessibility, Best Practices, SEO ≥ 90 sebagai sasaran, bukan jaminan |
| SEO | Title, description, canonical setelah domain diputuskan, Open Graph, satu H1 per halaman, dan metadata unik untuk proyek/sertifikasi |
| Responsif | Lulus pemeriksaan manual pada lebar 320, 375, 768, dan 1440 px; tidak ada horizontal overflow |
| Build | Ekspor statis berhasil; tautan dan aset bekerja pada hosting statis yang dipilih |

## 7. Urutan pengerjaan

1. Finalkan konten dan aset: bio About, 3 ringkasan proyek, screenshot, foto/fallback hero, repo/demo, kredensial, CV, dan akun sosial.
2. Bangun layout dan design tokens sesuai `design-system.md`.
3. Implementasikan anchor navigation, active state, responsif, template detail, dan reduced motion.
4. Verifikasi konten, semua URL detail dan back link, aksesibilitas, build ekspor statis, serta audit manual mobile.

## 8. Setelah MVP

Penambahan proyek dan sertifikat melalui template yang sama, analitik yang menghormati privasi, dan fitur kontak tambahan dapat dilakukan bila dibutuhkan. Keputusan implementasi berada di `architecture.md`; aturan kerja pengembang/agen berada di `agents.md`.
