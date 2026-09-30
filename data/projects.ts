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

export const projects: Project[] = [
  {
    slug: 'prediksi-harga-saham',
    title: 'Prediksi Harga Saham & Tren Pasar',
    category: 'Analytics',
    problem: 'Analisis time series dan model LSTM multivariat untuk peramalan harga saham.',
    contribution: 'Modeling, evaluation, deployment notes',
    approach: 'LSTM multivariat',
    technologies: ['Python', 'TensorFlow', 'Pandas'],
    preview: 'forecast',
    caseStudy: { context: 'Studi kasus prediksi harga saham menggunakan LSTM.' },
  },
  {
    slug: 'analisis-sentimen',
    title: 'Analisis Sentimen Opini Publik Media Sosial',
    category: 'Machine Learning',
    problem: 'Pipeline NLP untuk ekstraksi polaritas ulasan multibahasa',
    contribution: 'Pipeline design, evaluation',
    approach: 'Transformer-based classification',
    technologies: ['PyTorch', 'BERT', 'Scikit-Learn'],
    preview: 'sentiment',
  },
  {
    slug: 'helia-monitoring',
    title: 'HELIA — Monitoring Kesehatan Cerdas',
    category: 'Product',
    problem: 'Platform analitik telemetri biometrik untuk deteksi anomali real-time',
    contribution: 'Architecture, data pipeline',
    approach: 'Time-series anomaly detection',
    technologies: ['Next.js', 'FastAPI', 'Postgres'],
    preview: 'telemetry',
  },
  {
    slug: 'dashboard-penjualan-demo',
    title: 'Dashboard Penjualan Interaktif',
    category: 'Demo Project',
    problem: 'Contoh dashboard untuk menjelajahi tren penjualan, kategori produk, dan perubahan permintaan.',
    contribution: 'Konsep visualisasi dan eksplorasi data',
    approach: 'Exploratory data analysis',
    technologies: ['Python', 'Power BI', 'Pandas'],
    preview: 'forecast',
    caseStudy: { context: 'Proyek dummy untuk pratinjau tata letak portofolio. Detail dan hasil nyata akan ditambahkan nanti.' },
  },
  {
    slug: 'rekomendasi-produk-demo',
    title: 'Sistem Rekomendasi Produk',
    category: 'Demo Project',
    problem: 'Contoh konsep rekomendasi produk berdasarkan kemiripan preferensi dan interaksi pengguna.',
    contribution: 'Konsep pemodelan dan evaluasi rekomendasi',
    approach: 'Content-based filtering',
    technologies: ['Python', 'Scikit-Learn', 'Pandas'],
    preview: 'sentiment',
    caseStudy: { context: 'Proyek dummy untuk pratinjau tata letak portofolio. Detail dan hasil nyata akan ditambahkan nanti.' },
  },
]
