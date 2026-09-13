import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Ikon Vektor SVG Khusus (Menyelaras dengan mega menu dan app/DESIGN.md)
function IconSparkle() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="m12 1 2.8 6.7L21.5 10l-5.3 4.6 1.7 7.4-5.9-3.7-5.9 3.7 1.7-7.4L2.5 10l6.7-2.3L12 1Z" />
    </svg>
  );
}

function IconArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 10h12m-6-6 6 6-6 6" />
    </svg>
  );
}

function IconExternal() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L8 12.586l7.293-7.293a1 1 0 0 1 1.414 0Z" clipRule="evenodd" />
    </svg>
  );
}

function IconBook({width = 24, height = 24, className}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      <path d="M8 7h8m-8 4h5" />
    </svg>
  );
}

function IconTerminal({width = 16, height = 16, className}) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  );
}

function IconPetaPeran({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 3h6v6H3V3Zm8 0h6v6h-6V3ZM3 11h6v6H3v-6Zm8 0h6v6h-6v-6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M5 5h2v2H5V5Zm8 8h2v2h-2v-2Z" fill="currentColor" />
    </svg>
  );
}

function IconKartuDesa({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M2.5 8h15M5.5 11.5h5M5.5 13.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconJalurEkonomi({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="4" cy="5" r="1.8" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="16" cy="5" r="1.8" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="15" r="2.2" fill="currentColor" />
      <path d="M4.9 6.6 9 13m6.1-6.4L11 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconDesaKembar({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="7.5" cy="10" r="5" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="12.5" cy="10" r="5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function IconCitraPotensi({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M3 12.5c2.5-3 5-3 7 0s4.5 3 7 0" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="13" cy="7" r="1.6" fill="currentColor" />
    </svg>
  );
}

function IconAsisten({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M17 9.5c0 3.04-3.13 5.5-7 5.5-.83 0-1.63-.11-2.36-.32L4 16l.9-2.6C3.7 12.36 3 11 3 9.5 3 6.46 6.13 4 10 4s7 2.46 7 5.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M7.5 9.5h5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconAIInsight({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M10 2.5 11.8 7l4.7 1.8-4.7 1.8L10 15.1l-1.8-4.5L3.5 8.8l4.7-1.8L10 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M14.5 13.5 15.5 16l2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1 1-2.5Z" fill="currentColor" />
    </svg>
  );
}

function IconBerita({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M4 4.5h9v11H5.5A1.5 1.5 0 0 1 4 14V4.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M13 7h2.5A1.5 1.5 0 0 1 17 8.5V14a1.5 1.5 0 0 1-1.5 1.5H13" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M6.5 7h4M6.5 9.5h4M6.5 12h2.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function IconLaporan({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5 3.5h6L15 7.5V16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 16V3.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M11 3.5v4h4M7.5 11h5M7.5 13.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconAdmin({width = 20, height = 20, className}) {
  return (
    <svg width={width} height={height} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <circle cx="7" cy="6" r="1.8" fill="currentColor" />
      <circle cx="13" cy="10" r="1.8" fill="currentColor" />
      <circle cx="8.5" cy="14" r="1.8" fill="currentColor" />
    </svg>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  const urlPortal = siteConfig.customFields?.urlPortal || '/docs/intro';

  return (
    <Layout
      title="Dokumentasi SIMPUL DESA - Pusat Dokumentasi Resmi"
      description="Pusat Dokumentasi Resmi SIMPUL DESA: Panduan analitik dasbor dan rujukan REST APIs terintegrasi untuk 17.467 desa."
    >
      <div className={styles.pageContainer}>
        {/* ==================================================================
            1. Hero Header
            ================================================================== */}
        <header className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.heroContent}>
            {/* <div className={styles.heroBadge}>
              <span className={styles.heroBadgeIcon}><IconSparkle /></span>
              <span>Platform Intelijen &amp; Analitik Ekonomi Desa</span>
            </div> */}

            <Heading as="h1" className={styles.heroTitle} style={{ paddingTop: '40px' }}>
              Satu Pintu Menemukenali Potensi Ekonomi{' '}
              <span className={styles.heroHighlight}>Desa se-Indonesia</span>
            </Heading>

            <p className={styles.heroSubtitle}>
            SIMPUL DESA (Sistem Intelijen Potensi dan Kesiapan Ekonomi Desa) memetakan profil potensi dan kesiapan ekonomi setiap desa secara otomatis dari data resmi pemerintah dan turunan analisis geospasial.
            </p>

            <div className={styles.heroActions}>
              <Link className={styles.btnPrimary} to="/docs/intro">
                <span>Baca Panduan</span>
                <IconArrowRight />
              </Link>
              <Link className={styles.btnSecondary} to="/api/intro">
                <IconTerminal width={16} height={16} />
                <span>Rujukan REST APIs</span>
              </Link>
              {urlPortal && (
                <a
                  className={styles.btnGhost}
                  href={urlPortal}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Kembali ke Portal SIMPUL DESA</span>
                  <IconExternal />
                </a>
              )}
            </div>
          </div>
        </header>

        {/* ==================================================================
            2. Live Stats Bar
            ================================================================== */}
        <section className={styles.statsBar} aria-label="Ringkasan Cakupan Sistem">
          <div className={styles.statItem}>
            <div className={styles.statValue}>17.467</div>
            <div className={styles.statLabel}>Desa &amp; Kelurahan</div>
            <div className={styles.statSub}>Cakupan Penuh 100%</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>97</div>
            <div className={styles.statLabel}>Kabupaten</div>
            <div className={styles.statSub}>dari 5 Provinsi Piloting</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>18</div>
            <div className={styles.statLabel}>Sumber Data Resmi</div>
            <div className={styles.statSub}>BPS, IDM, Kemenpar, KKP</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>28</div>
            <div className={styles.statLabel}>Endpoint REST APIs</div>
            <div className={styles.statSub}>OpenAPI 3.1 &amp; Supabase Auth</div>
          </div>
          <div className={styles.statItem}>
            <div className={styles.statValue}>0</div>
            <div className={styles.statLabel}>Formulir Mandiri</div>
            <div className={styles.statSub}>Pendekatan 100% Proaktif</div>
          </div>
        </section>

        {/* ==================================================================
            3. Dua Jalur Navigasi Utama (Tracks)
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Dua Jalur Dokumentasi</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Pilih Pendekatan yang Anda Butuhkan
            </Heading>
            <p className={styles.sectionDescription}>
              Dokumentasi terbagi menjadi panduan operasional dasbor untuk perumus kebijakan dan referensi teknis REST APIs untuk integrasi sistem.
            </p>
          </div>

          <div className={styles.trackGrid}>
            {/* Jalur Panduan */}
            <div className={styles.trackCard}>
              <div>
                <div className={styles.trackHeader}>
                  <div className={styles.trackIconBox}>
                    <IconBook />
                  </div>
                  <span className={styles.trackCategory}>Untuk Kebijakan &amp; Pengguna</span>
                </div>
                <Heading as="h3" className={styles.trackTitle}>
                  Panduan Aplikasi &amp; Analisis
                </Heading>
                <p className={styles.trackDesc}>
                  Ditujukan bagi pengambil kebijakan pemerintah daerah/pusat, pendamping desa, dan perencana pembangunan untuk menavigasi dasbor analitik.
                </p>
                <ul className={styles.trackList}>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>Klasifikasi 4 zona intervensi pada <strong>Peta Peran</strong></span>
                  </li>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>Pembacaan profil 360° dan 8 sub-skor pada <strong>Kartu Ekonomi</strong></span>
                  </li>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>Perencanaan koridor klaster kerja sama <strong>Jalur Ekonomi</strong></span>
                  </li>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>Matriks hak akses peran pengguna (Tamu, Swasta, Pemerintah)</span>
                  </li>
                </ul>
              </div>
              <Link className={styles.trackCta} to="/docs/intro">
                <span>Mulai Membaca Panduan</span>
                <IconArrowRight />
              </Link>
            </div>

            {/* Jalur API */}
            <div className={styles.trackCard}>
              <div>
                <div className={styles.trackHeader}>
                  <div className={styles.trackIconBox}>
                    <IconTerminal width={26} height={26} />
                  </div>
                  <span className={styles.trackCategory}>Untuk Pengembang &amp; Data</span>
                </div>
                <Heading as="h3" className={styles.trackTitle}>
                  Spesifikasi &amp; Integrasi REST APIs
                </Heading>
                <p className={styles.trackDesc}>
                  Ditujukan bagi *software engineer*, analis data, dan arsitek sistem yang ingin mengintegrasikan data SIMPUL DESA ke dalam platform kementerian atau pemda.
                </p>
                <ul className={styles.trackList}>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>28 endpoint terstruktur dan berkas skema OpenAPI resmi</span>
                  </li>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>Autentikasi terproteksi Supabase Auth dengan Bearer Token</span>
                  </li>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>Struktur amplop respons JSON seragam dan katalog 19 kode galat</span>
                  </li>
                  <li className={styles.trackItem}>
                    <span className={styles.trackCheck}><IconCheck /></span>
                    <span>Geometri batas desa berformat GeoJSON dengan kompresi gzip</span>
                  </li>
                </ul>
              </div>
              <Link className={styles.trackCta} to="/api/intro">
                <span>Buka Rujukan REST APIs</span>
                <IconArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* ==================================================================
            4. Lima Modul Analitik Utama
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Lensa Analitik Utama</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Lima Modul Pendukung Keputusan
            </Heading>
            <p className={styles.sectionDescription}>
              Seluruh desa dinilai melalui lima sudut pandang terukur, mengubah data mentah menjadi rekomendasi intervensi ekonomi yang presisi.
            </p>
          </div>

          <div className={styles.featureGrid}>
            {/* 1. Peta Peran */}
            <div className={styles.featureCard}>
              <div>
                <div className={styles.featureHeader}>
                  <div className={styles.featureIcon}><IconPetaPeran /></div>
                  <span className={styles.featureBadge}>Zonasi Wilayah</span>
                </div>
                <Heading as="h3" className={styles.featureTitle}>Peta Peran</Heading>
                <div className={styles.featureTagline}>Empat Zona Penanganan</div>
                <p className={styles.featureDesc}>
                  Memetakan desa ke dalam 4 kuadran analitik (Pusat Pertumbuhan, Penyangga Cepat, Potensi Tersembunyi, Tertinggal Kritis) berdasarkan kombinasi skor potensi dan ketahanan.
                </p>
              </div>
              <div className={styles.featureFooter}>
                <Link className={styles.featureLinkDoc} to="/docs/fitur/peta-peran/pengenalan">
                  <span>Panduan</span> <IconArrowRight />
                </Link>
                <Link className={styles.featureLinkApi} to="/api/endpoint/peta-peran">
                  <span>API Spec</span>
                </Link>
              </div>
            </div>

            {/* 2. Kartu Ekonomi Desa */}
            <div className={styles.featureCard}>
              <div>
                <div className={styles.featureHeader}>
                  <div className={styles.featureIcon}><IconKartuDesa /></div>
                  <span className={styles.featureBadge}>Profil 360°</span>
                </div>
                <Heading as="h3" className={styles.featureTitle}>Kartu Ekonomi Desa</Heading>
                <div className={styles.featureTagline}>Profil Lengkap Tanpa Formulir</div>
                <p className={styles.featureDesc}>
                  Menghimpun identitas, demografi, potensi dominan, sarana ekonomi, dan 8 sub-skor indikator desa secara proaktif dari basis data terpadu tanpa kuesioner mandiri.
                </p>
              </div>
              <div className={styles.featureFooter}>
                <Link className={styles.featureLinkDoc} to="/docs/fitur/kartu-ekonomi-desa/pengenalan">
                  <span>Panduan</span> <IconArrowRight />
                </Link>
                <Link className={styles.featureLinkApi} to="/api/endpoint/kartu-ekonomi-desa">
                  <span>API Spec</span>
                </Link>
              </div>
            </div>

            {/* 3. Jalur Ekonomi */}
            <div className={styles.featureCard}>
              <div>
                <div className={styles.featureHeader}>
                  <div className={styles.featureIcon}><IconJalurEkonomi /></div>
                  <span className={styles.featureBadge}>Rantai Pasok</span>
                </div>
                <Heading as="h3" className={styles.featureTitle}>Jalur Ekonomi</Heading>
                <div className={styles.featureTagline}>Koridor Kerja Sama Antar-Desa</div>
                <p className={styles.featureDesc}>
                  Mengidentifikasi peluang integrasi aset dan rantai nilai antar-desa bertetangga melalui 4 varian koridor ekonomi terpadu untuk efisiensi skala kawasan.
                </p>
              </div>
              <div className={styles.featureFooter}>
                <Link className={styles.featureLinkDoc} to="/docs/fitur/jalur-ekonomi/pengenalan">
                  <span>Panduan</span> <IconArrowRight />
                </Link>
                <Link className={styles.featureLinkApi} to="/api/endpoint/jalur-ekonomi">
                  <span>API Spec</span>
                </Link>
              </div>
            </div>

            {/* 4. Desa Kembar */}
            <div className={styles.featureCard}>
              <div>
                <div className={styles.featureHeader}>
                  <div className={styles.featureIcon}><IconDesaKembar /></div>
                  <span className={styles.featureBadge}>Benchmarking</span>
                </div>
                <Heading as="h3" className={styles.featureTitle}>Desa Kembar</Heading>
                <div className={styles.featureTagline}>Pencocokan Profil Serupa</div>
                <p className={styles.featureDesc}>
                  Algoritma pencocokan kemiripan karakteristik desa terdekat untuk menemukan pola keberhasilan dan memfasilitasi replikasi program intervensi secara terarah.
                </p>
              </div>
              <div className={styles.featureFooter}>
                <Link className={styles.featureLinkDoc} to="/docs/fitur/desa-kembar/pengenalan">
                  <span>Panduan</span> <IconArrowRight />
                </Link>
                <Link className={styles.featureLinkApi} to="/api/endpoint/desa-kembar">
                  <span>API Spec</span>
                </Link>
              </div>
            </div>

            {/* 5. Citra Potensi Desa */}
            <div className={styles.featureCard}>
              <div>
                <div className={styles.featureHeader}>
                  <div className={styles.featureIcon}><IconCitraPotensi /></div>
                  <span className={styles.featureBadge}>Geospasial Mikro</span>
                </div>
                <Heading as="h3" className={styles.featureTitle}>Citra Potensi Desa</Heading>
                <div className={styles.featureTagline}>Deteksi Spasial Berbasis Satelit</div>
                <p className={styles.featureDesc}>
                  Memanfaatkan analisis tutupan lahan dan citra satelit pada resolusi petak sel spasial mikro untuk memvalidasi sentra komoditas unggulan pertanian dan perkebunan.
                </p>
              </div>
              <div className={styles.featureFooter}>
                <Link className={styles.featureLinkDoc} to="/docs/fitur/citra-potensi-desa/pengenalan">
                  <span>Panduan</span> <IconArrowRight />
                </Link>
                <Link className={styles.featureLinkApi} to="/api/endpoint/citra-potensi-desa">
                  <span>API Spec</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            5. Fitur Fungsional Tambahan (Addons)
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionTag}>Layanan Fungsional</span>
            <Heading as="h2" className={styles.sectionTitle}>
              Fitur Pendukung &amp; Tata Kelola
            </Heading>
            <p className={styles.sectionDescription}>
              Fasilitas pelengkap untuk memperdalam pemahaman dinamika lokal dan mempermudah operasional birokrasi.
            </p>
          </div>

          <div className={styles.addonsGrid}>
            <Link className={styles.addonCard} to="/docs/fitur/asisten-desa/pengenalan">
              <div className={styles.addonIcon}><IconAsisten /></div>
              <Heading as="h3" className={styles.addonTitle}>Asisten Desa</Heading>
              <p className={styles.addonDesc}>
                Tanya-jawab analitik interaktif berbasis AI (RAG) yang menjawab langsung dari data desa Anda.
              </p>
            </Link>

            <Link className={styles.addonCard} to="/docs/fitur/ai-insight/pengenalan">
              <div className={styles.addonIcon}><IconAIInsight /></div>
              <Heading as="h3" className={styles.addonTitle}>AI Insight</Heading>
              <p className={styles.addonDesc}>
                Analisis naratif kondisi ekonomi dan rekomendasi aksi aktor pembangunan berbasis LLM.
              </p>
            </Link>

            <Link className={styles.addonCard} to="/docs/fitur/berita-desa/pengenalan">
              <div className={styles.addonIcon}><IconBerita /></div>
              <Heading as="h3" className={styles.addonTitle}>Berita Desa</Heading>
              <p className={styles.addonDesc}>
                Pemantauan dinamika dan kurasi berita lokal desa secara otomatis dan terkini.
              </p>
            </Link>

            <Link className={styles.addonCard} to="/docs/fitur/laporan-desa/pengenalan">
              <div className={styles.addonIcon}><IconLaporan /></div>
              <Heading as="h3" className={styles.addonTitle}>Laporan Desa</Heading>
              <p className={styles.addonDesc}>
                Pembuatan berkas ringkasan eksekutif berformat PDF siap cetak untuk pelaporan pimpinan.
              </p>
            </Link>

            <Link className={styles.addonCard} to="/docs/fitur/halaman-admin/pengenalan">
              <div className={styles.addonIcon}><IconAdmin /></div>
              <Heading as="h3" className={styles.addonTitle}>Halaman Admin</Heading>
              <p className={styles.addonDesc}>
                Pengelolaan akun, kenaikan peran pengguna, audit sinkronisasi data, dan telemetri sistem.
              </p>
            </Link>
          </div>
        </section>

        {/* ==================================================================
            6. Developer Experience & Code Preview
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.codeSectionGrid}>
            <div className={styles.codeContent}>
              <span className={styles.sectionTag}>Pengalaman Pengembang</span>
              <Heading as="h2" className={styles.codeTitle}>
                Arsitektur API Cepat &amp; Terstandarisasi
              </Heading>
              <p className={styles.codeDesc}>
                Seluruh endpoint publik dan berotentikasi mengembalikan format amplop JSON yang seragam. Dilengkapi dengan caching cerdas berbasis <code>ETag</code> untuk respon instan dan penghematan lalu lintas data.
              </p>
              <div className={styles.codePills}>
                <span className={styles.codePill}>FastAPI Core</span>
                <span className={styles.codePill}>OpenAPI 3.1</span>
                <span className={styles.codePill}>Supabase Auth</span>
                <span className={styles.codePill}>ETag 304 Caching</span>
                <span className={styles.codePill}>GeoJSON Gzip</span>
              </div>
            </div>

            <div className={styles.codeTerminal}>
              <div className={styles.terminalHeader}>
                <div className={styles.terminalDots}>
                  <span className={`${styles.terminalDot} ${styles.terminalDotRed}`} />
                  <span className={`${styles.terminalDot} ${styles.terminalDotYellow}`} />
                  <span className={`${styles.terminalDot} ${styles.terminalDotGreen}`} />
                </div>
                <div className={styles.terminalTitle}>bash — curl request &amp; JSON response</div>
              </div>
              <div className={styles.terminalBody}>
                <div><span className={styles.cComment}># 1. Panggil profil ekonomi satu desa (akses publik)</span></div>
                <div>
                  <span className={styles.cPrompt}>$ </span>
                  <span className={styles.cCmd}>curl</span> <span className={styles.cFlag}>-s</span> <span className={styles.cUrl}>"https://api-simpul-desa.up.railway.app/api/model/kartu/3201010001"</span>
                </div>
                <br />
                <div><span className={styles.cComment}># 2. Respons standar amplop JSON terstruktur</span></div>
                <div><span className={styles.cPunct}>{`{`}</span></div>
                <div>  <span className={styles.cKey}>"sukses"</span><span className={styles.cPunct}>: </span><span className={styles.cBool}>true</span><span className={styles.cPunct}>,</span></div>
                <div>  <span className={styles.cKey}>"data"</span><span className={styles.cPunct}>: </span><span className={styles.cPunct}>{`{`}</span></div>
                <div>    <span className={styles.cKey}>"iddesa"</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"3201010001"</span><span className={styles.cPunct}>,</span></div>
                <div>    <span className={styles.cKey}>"nama_desa"</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"PABUARAN"</span><span className={styles.cPunct}>,</span></div>
                <div>    <span className={styles.cKey}>"nama_kabupaten"</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"KAB. BOGOR"</span><span className={styles.cPunct}>,</span></div>
                <div>    <span className={styles.cKey}>"zona"</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"PUSAT_PERTUMBUHAN"</span><span className={styles.cPunct}>,</span></div>
                <div>    <span className={styles.cKey}>"skor_potensi"</span><span className={styles.cPunct}>: </span><span className={styles.cNum}>81.4</span><span className={styles.cPunct}>,</span></div>
                <div>    <span className={styles.cKey}>"skor_ketahanan"</span><span className={styles.cPunct}>: </span><span className={styles.cNum}>76.8</span><span className={styles.cPunct}>,</span></div>
                <div>    <span className={styles.cKey}>"potensi_dominan"</span><span className={styles.cPunct}>: </span><span className={styles.cStr}>"PERTANIAN"</span></div>
                <div>  <span className={styles.cPunct}>{`}`}</span><span className={styles.cPunct}>,</span></div>
                <div>  <span className={styles.cKey}>"galat"</span><span className={styles.cPunct}>: </span><span className={styles.cNull}>null</span></div>
                <div><span className={styles.cPunct}>{`}`}</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            7. Bottom Call to Action Banner
            ================================================================== */}
        <section className={styles.ctaBanner}>
          <Heading as="h2" className={styles.ctaTitle}>
            Siap Mengoptimalkan Potensi Ekonomi Desa?
          </Heading>
          <p className={styles.ctaDesc}>
            Jelajahi panduan penggunaan untuk memahami setiap indikator analitik atau langsung integrasikan data SIMPUL DESA ke dalam platform Anda.
          </p>
          <div className={styles.ctaActions}>
            <Link className={styles.btnPrimary} to="/docs/intro">
              <span>Baca Panduan</span>
              <IconArrowRight />
            </Link>
            <Link className={styles.btnSecondary} to="/api/intro">
              <IconTerminal width={16} height={16} />
              <span>Jelajahi REST APIs</span>
            </Link>
          </div>
        </section>
      </div>
    </Layout>
  );
}

