// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

// Memuat `.env` di akar folder ini ke `process.env`. Harus di atas konstanta
// URL di bawah. Env var yang sudah ada di shell menang atas isi `.env`.
import 'dotenv/config';

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

// Dua URL yang berbeda antar lingkungan, jadi keduanya dibaca dari env var
// saat build. Nilai di bawah adalah bawaannya kalau env var itu tidak diisi.
//
// SIMPUL_URL_PORTAL — dasbor SIMPUL DESA. Bawaannya `/docs/intro` karena
//   dasbor itu belum punya URL terbit; isi env var-nya begitu ia terbit.
// SIMPUL_URL_API — API yang sudah ter-deploy, dipakai di halaman /api/intro.
// SIMPUL_URL_DOKUMENTASI — situs ini. Bawaannya `/`, jadi tautannya benar di
//   lokal maupun produksi; isi env var-nya kalau kelak situs ini punya domain
//   sendiri yang perlu disebut absolut.
//
// Cara mengisinya: sunting `.env` di akar folder ini (salin dari
// `.env.contoh` kalau belum ada). `.env` tidak ikut ter-commit. Bisa juga
// ditaruh di depan perintah, dan yang itu menang atas isi `.env`:
//   SIMPUL_URL_PORTAL=https://portal.contoh.id npm run build
const URL_PORTAL = process.env.SIMPUL_URL_PORTAL || '/docs/intro';
const URL_API =
  process.env.SIMPUL_URL_API ||
  'https://simpul-desa-api-production.up.railway.app';
const URL_DOKUMENTASI = process.env.SIMPUL_URL_DOKUMENTASI || '/';

// Menu bertingkat Fitur. Nama fitur ditulis persis seperti di GLOSSARY.md
// akar — termasuk yang di sana masuk kolom "Jangan pakai": bukan "Kartu
// Potensi Desa", bukan "Asisten Desa AI", bukan "Reporting".
//
// Tata letaknya diketok user 9 September 2026: lima fitur utama sebagai petak
// kartu berikon di kiri, empat fitur tambahan sebagai daftar tegak berikon di
// kanan. Ikon di sini SENGAJA sama bentuk dengan ikon kartu di
// `docs/intro.mdx` — satu fitur, satu tanda, di mana pun ia muncul.
//
// Butir `type: 'html'` menerima HTML polos, bukan JSX: `class`, bukan
// `className`.
const featureMegaMenu = `
<div class="sd-mega">
  <div class="sd-mega__main">
    <h3 class="sd-mega__heading">Fitur utama</h3>
    <span class="sd-mega__sub">Lima lensa dasbor</span>
    <div class="sd-mega__grid">
      <a class="sd-mega__card" href="/docs/fitur/peta-peran/pengenalan">
        <span class="sd-mega__card-icon">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path d="M3 3h6v6H3V3Zm8 0h6v6h-6V3ZM3 11h6v6H3v-6Zm8 0h6v6h-6v-6Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
            <path d="M5 5h2v2H5V5Zm8 8h2v2h-2v-2Z" fill="currentColor"/>
          </svg>
        </span>
        <span class="sd-mega__card-title">Peta Peran</span>
        <span class="sd-mega__card-text">Empat zona penanganan</span>
      </a>
      <a class="sd-mega__card" href="/docs/fitur/kartu-ekonomi-desa/pengenalan">
        <span class="sd-mega__card-icon">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" stroke-width="1.2"/>
            <path d="M2.5 8h15M5.5 11.5h5M5.5 13.5h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="sd-mega__card-title">Kartu Ekonomi Desa</span>
        <span class="sd-mega__card-text">Profil ekonomi tanpa formulir</span>
      </a>
      <a class="sd-mega__card" href="/docs/fitur/jalur-ekonomi/pengenalan">
        <span class="sd-mega__card-icon">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="4" cy="5" r="1.8" stroke="currentColor" stroke-width="1.2"/>
            <circle cx="16" cy="5" r="1.8" stroke="currentColor" stroke-width="1.2"/>
            <circle cx="10" cy="15" r="2.2" fill="currentColor"/>
            <path d="M4.9 6.6 9 13m6.1-6.4L11 13" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          </svg>
        </span>
        <span class="sd-mega__card-title">Jalur Ekonomi</span>
        <span class="sd-mega__card-text">Aset bersama antar desa</span>
      </a>
      <a class="sd-mega__card" href="/docs/fitur/desa-kembar/pengenalan">
        <span class="sd-mega__card-icon">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <circle cx="7.5" cy="10" r="5" stroke="currentColor" stroke-width="1.2"/>
            <circle cx="12.5" cy="10" r="5" stroke="currentColor" stroke-width="1.2"/>
          </svg>
        </span>
        <span class="sd-mega__card-title">Desa Kembar</span>
        <span class="sd-mega__card-text">Profil paling mirip</span>
      </a>
      <a class="sd-mega__card" href="/docs/fitur/citra-potensi-desa/pengenalan">
        <span class="sd-mega__card-icon">
          <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" stroke-width="1.2"/>
            <path d="M3 12.5c2.5-3 5-3 7 0s4.5 3 7 0" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
            <circle cx="13" cy="7" r="1.6" fill="currentColor"/>
          </svg>
        </span>
        <span class="sd-mega__card-title">Citra Potensi Desa</span>
        <span class="sd-mega__card-text">Sentra komoditas dari citra</span>
      </a>
    </div>
  </div>
  <div class="sd-mega__side">
    <h3 class="sd-mega__heading">Fitur tambahan</h3>
    <span class="sd-mega__sub">Di luar lima lensa</span>
    <a class="sd-mega__row" href="/docs/fitur/asisten-desa/pengenalan">
      <span class="sd-mega__row-icon">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M17 9.5c0 3.04-3.13 5.5-7 5.5-.83 0-1.63-.11-2.36-.32L4 16l.9-2.6C3.7 12.36 3 11 3 9.5 3 6.46 6.13 4 10 4s7 2.46 7 5.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M7.5 9.5h5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </span>
      <span class="sd-mega__row-body">
        <span class="sd-mega__row-title">Asisten Desa</span>
        <span class="sd-mega__row-text">Tanya jawab dari data sendiri</span>
      </span>
    </a>
    <a class="sd-mega__row" href="/docs/fitur/berita-desa/pengenalan">
      <span class="sd-mega__row-icon">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 4.5h9v11H5.5A1.5 1.5 0 0 1 4 14V4.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M13 7h2.5A1.5 1.5 0 0 1 17 8.5V14a1.5 1.5 0 0 1-1.5 1.5H13" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M6.5 7h4M6.5 9.5h4M6.5 12h2.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
        </svg>
      </span>
      <span class="sd-mega__row-body">
        <span class="sd-mega__row-title">Berita Desa</span>
        <span class="sd-mega__row-text">Panen otomatis per desa</span>
      </span>
    </a>
    <a class="sd-mega__row" href="/docs/fitur/laporan-desa/pengenalan">
      <span class="sd-mega__row-icon">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M5 3.5h6L15 7.5V16a.5.5 0 0 1-.5.5h-9A.5.5 0 0 1 5 16V3.5Z" stroke="currentColor" stroke-width="1.2" stroke-linejoin="round"/>
          <path d="M11 3.5v4h4M7.5 11h5M7.5 13.5h3" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <span class="sd-mega__row-body">
        <span class="sd-mega__row-title">Laporan Desa</span>
        <span class="sd-mega__row-text">PDF satu desa, saat diminta</span>
      </span>
    </a>
    <a class="sd-mega__row" href="/docs/fitur/halaman-admin/pengenalan">
      <span class="sd-mega__row-icon">
        <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
          <circle cx="7" cy="6" r="1.8" fill="currentColor"/>
          <circle cx="13" cy="10" r="1.8" fill="currentColor"/>
          <circle cx="8.5" cy="14" r="1.8" fill="currentColor"/>
        </svg>
      </span>
      <span class="sd-mega__row-body">
        <span class="sd-mega__row-title">Halaman Admin</span>
        <span class="sd-mega__row-text">Kelola sistem dan peran</span>
      </span>
    </a>
  </div>
</div>`;

// Menu Sumber Daya: baris berikon, pola sama dengan menu Resources
// docs.dyte.io (rujukan visual yang dipakai user, 9 September 2026).
//
// URL keempat repo GitHub diketok user 9 September 2026 (ADR-0016 di
// `../docs/adr/`) dan terverifikasi hidup: Portal (`app/`) di
// `Simpul-Desa/portal`, API di `Simpul-Desa/api`, situs ini di
// `Simpul-Desa/docs`, Data (`data/`) di `Simpul-Desa/data` — nama repo
// tidak sama dengan nama folder untuk `portal` dan `docs`, jangan mengarang
// URL dari nama folder. Butir Data menggantikan "Google Drive — Pengolahan
// Data" atas keputusan user 9 September 2026. Satu butir tersisa masih `#`
// karena URL-nya belum diberikan: Video. Jangan mengarangnya — tautan luar
// tidak divalidasi `onBrokenLinks`, jadi 404 di situs publik lolos build
// tanpa peringatan.
const ikonGithub = `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.075-.612-3.25-1.175-.1-.25-.525-1.025-.9-1.238-.312-.162-.75-.562-.012-.575.7-.012 1.2.65 1.362.925.788 1.325 2.05.938 2.55.7.075-.563.313-.938.575-1.15-2.225-.25-3.65-1.125-3.65-3.213 0-1.362.487-2.437 1.275-3.275-.088-.213-.238-1.063.312-2.188 0 0 1.087-.35 3.512 1.362.7-.187 1.462-.287 2.238-.287.775 0 1.537.1 2.237.287 2.426-1.712 3.513-1.362 3.513-1.362.55 1.125.4 1.975.238 2.238.787.838 1.275 1.9 1.275 3.275 0 2.087-1.425 2.962-3.65 3.212.412.35.687.938.687 1.85 0 1.075-.012 1.988-.012 2.263 0 .262.187.575.687.475A9.997 9.997 0 0 0 22 12c0-5.525-4.475-10-10-10Z"/>
        </svg>`;

const resourceMenu = `
<div class="sd-res">
  <a class="sd-res__row" href="https://github.com/Simpul-Desa/portal">
    <span class="sd-res__icon">${ikonGithub}</span>
    <span class="sd-res__label">Repo GitHub — Portal</span>
  </a>
  <a class="sd-res__row" href="https://github.com/Simpul-Desa/api">
    <span class="sd-res__icon">${ikonGithub}</span>
    <span class="sd-res__label">Repo GitHub — API</span>
  </a>
  <a class="sd-res__row" href="https://github.com/Simpul-Desa/docs">
    <span class="sd-res__icon">${ikonGithub}</span>
    <span class="sd-res__label">Repo GitHub — Dokumentasi</span>
  </a>
  <a class="sd-res__row" href="https://github.com/Simpul-Desa/data">
    <span class="sd-res__icon">${ikonGithub}</span>
    <span class="sd-res__label">Repo GitHub — Data</span>
  </a>
  <a class="sd-res__row" href="#">
    <span class="sd-res__icon">
      <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <rect x="2.5" y="4" width="15" height="12" rx="2.5" stroke="currentColor" stroke-width="1.2"/>
        <path d="M8.75 7.75 12.75 10l-4 2.25v-4.5Z" fill="currentColor"/>
      </svg>
    </span>
    <span class="sd-res__label">Video</span>
  </a>
</div>`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Simpul Desa',
  tagline: 'Dokumentasi proyek Simpul Desa',
  // Tanpa `favicon` dan tanpa `themeConfig.image`: seluruh gambar bawaan
  // generator (logo dino, favicon, kartu sosial) sudah dibuang, dan proyek
  // ini belum punya penggantinya. Isi keduanya begitu marka itu ada.

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Situs ini belum punya alamat terbit; nilai di bawah PLACEHOLDER dan perlu
  // diketok saat hostingnya ditentukan. Keduanya hanya dipakai untuk sitemap
  // dan URL kanonis, jadi `npm run build`, `npm run start`, dan `npm run
  // serve` tidak terpengaruh. Kalau nanti dilayani dari subjalur — GitHub
  // Pages repo `docs`, misalnya — `baseUrl` harus ikut diubah.
  url: 'https://simpul-desa.github.io',
  baseUrl: '/',

  // Organisasi dan repo GitHub situs ini. Nama repo TIDAK sama dengan nama
  // foldernya.
  organizationName: 'Simpul-Desa',
  projectName: 'docs',

  onBrokenLinks: 'throw',

  // Docusaurus menolak field yang tak dikenal, jadi nilai yang perlu dibaca
  // sisi klien (halaman /api/intro) dititipkan di sini.
  customFields: {
    urlPortal: URL_PORTAL,
    urlApi: URL_API,
    urlDokumentasi: URL_DOKUMENTASI,
  },

  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400..700&family=Plus+Jakarta+Sans:wght@400..800&family=Fira+Code:wght@400..600&display=swap',
  ],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'id',
    locales: ['id'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      ({
        id: 'api',
        path: 'docs-api',
        routeBasePath: 'api',
        sidebarPath: './sidebarsApi.js',
        // Wajib supaya halaman hasil bangkitan memakai tata letak tiga kolom
        // milik `docusaurus-theme-openapi-docs`, bukan halaman docs biasa.
        docItemComponent: '@theme/ApiItem',
      }),
    ],
    // Tema OpenAPI menulis gayanya dalam Sass; tanpa plugin ini `npm run build`
    // berhenti di berkas `.scss` pertama yang diimpornya.
    'docusaurus-plugin-sass',
    [
      'docusaurus-plugin-openapi-docs',
      {
        id: 'openapi',
        // Menunjuk instance plugin docs `id: 'api'` di atas, bukan preset.
        docsPluginId: 'api',
        config: {
          // Kunci ini adalah argumen `gen-api-docs`/`clean-api-docs`
          // (lihat skrip `api:bangkit` dan `api:bersih` di package.json).
          'simpul-desa': {
            // Snapshot ter-commit, bukan panggilan langsung ke `api/` — build
            // situs tetap Node-only. Regenerasi: `npm run openapi:ambil`.
            specPath: 'static/openapi/simpul-desa.json',
            // Sengaja SATU TINGKAT di bawah `docs-api/`, bukan `docs-api/`
            // itu sendiri: `npm run api:bersih` menyapu folder ini, dan
            // `docs-api/intro.mdx` yang ditulis tangan tidak boleh ikut
            // tersapu.
            outputDir: 'docs-api/endpoint',
            downloadUrl: '/openapi/simpul-desa.json',
            // Dokumentasi baca saja: tidak ada permintaan yang keluar dari
            // halaman ini, jadi tidak ada kolom token bearer di situs publik.
            hideSendButton: true,
            // Mayoritas endpoint model beramplop `dict[str, Any]`, jadi
            // halaman skema akan hampir kosong.
            showSchemas: false,
            // Halaman pengantar ditulis tangan di `docs-api/intro.mdx`;
            // halaman info bawaan hanya akan menjadi pengantar kedua.
            showInfoPage: false,
            sidebarOptions: {
              groupPathsBy: 'tag',
              categoryLinkSource: 'tag',
            },
          },
        },
      },
    ],
  ],

  themes: [
    'docusaurus-theme-openapi-docs',
    [
      // Pencarian LOKAL: indeks lunr dibangun saat `npm run build` dan
      // disajikan sebagai berkas statis. Tidak ada layanan luar, tidak ada
      // akun, tidak ada crawler — situs ini bisa dibangun dan dicari di mana
      // pun ia di-host. Algolia DocSearch ditolak karena butuh pendaftaran
      // dan kredensial yang tidak dimiliki proyek ini.
      '@easyops-cn/docusaurus-search-local',
      {
        // Kedua instance docs diindeks. Tanpa bentuk array di dua opsi ini
        // hanya `docs/` yang terindeks, dan 40 halaman rujukan REST API
        // tidak akan pernah muncul di hasil.
        docsDir: ['docs', 'docs-api'],
        docsRouteBasePath: ['docs', 'api'],
        indexBlog: false,
        // Halaman di `src/pages/` sengaja tidak diindeks: yang ada hanya
        // halaman depan, dan isinya sudah ada di navigasi.
        indexPages: false,
        hashed: true,
        // `lunr-languages` tidak punya stemmer bahasa Indonesia. Bawaan `en`
        // dipertahankan karena transformasinya diterapkan SAMA ke indeks dan
        // ke kueri, jadi padanannya tetap konsisten. Yang dibuang penyaring
        // stop word-nya: daftar stop word Inggris tidak menggambarkan kata
        // umum bahasa Indonesia, jadi ia hanya bisa membuang token yang
        // sebenarnya berarti di sini.
        language: ['en'],
        removeDefaultStopWordFilter: true,
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchBarPosition: 'right',
        searchResultLimits: 8,
        highlightSearchTermsOnTargetPage: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Bahasa contoh kode di halaman rujukan API, beserta urutannya. Tanpa
      // ini tema menampilkan SELURUH 21 bahasa yang dikenal
      // `postman-code-generators` menurut urutannya sendiri — tab pertamanya
      // C#, yang tidak dipakai siapa pun di proyek ini. cURL lebih dulu,
      // lalu Fetch (dasbor `app/`) dan Requests (pipeline `data/`).
      languageTabs: [
        {language: 'curl', variant: 'cURL', logoClass: 'curl'},
        {language: 'javascript', variant: 'Fetch', logoClass: 'javascript'},
        {language: 'python', variant: 'Requests', logoClass: 'python'},
        {language: 'http', variant: 'HTTP', logoClass: 'http'},
      ],
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Simpul Desa',
        hideOnScroll: false,
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'panduanSidebar',
            position: 'left',
            label: 'Panduan',
            className: 'navbar-boxed',
          },
          {
            type: 'dropdown',
            label: 'Fitur',
            position: 'left',
            items: [{type: 'html', value: featureMegaMenu}],
          },
          {
            type: 'doc',
            docId: 'intro',
            docsPluginId: 'api',
            position: 'left',
            label: 'REST API',
          },
          {
            // Satu-satunya butir navbar yang TIDAK punya sidebar: seluruh
            // isinya tautan keluar.
            type: 'dropdown',
            label: 'Sumber Daya',
            position: 'left',
            items: [{type: 'html', value: resourceMenu}],
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            // Satu tombol saja di kanan navbar; tautan hantu "Lihat dasbor"
            // dibuang user 9 September 2026. Sasarannya `URL_PORTAL` — env
            // var, karena dasbor `app/` belum punya URL terbit dan bawaannya
            // masih `/docs/intro`. `href`, bukan `to`: `to` hanya untuk rute
            // internal, sementara nilai env var bisa berupa URL luar.
            href: URL_PORTAL,
            label: 'Kembali ke Portal',
            position: 'right',
            className: 'navbar-cta',
          },
        ],
      },
      footer: {
        style: 'light',
        // Blok identitas di kiri, dua kolom tautan di kanan — struktur
        // diketok user 9 September 2026 dari rujukan tangkapan layar. Kolom
        // ketiga (Legal) dibuang user 10 September 2026 bersama halaman
        // `docs/legal/`. Sembilan tautan fitur juga sudah lebih dulu dibuang
        // dari footer: menu Fitur di navbar dan halaman Fitur di Aplikasi
        // sudah mendaftar semuanya.
        //
        // Blok identitas sengaja TIDAK memuat alamat, telepon, atau surel
        // seperti rujukannya. Proyek ini tidak punya ketiganya, dan tautan
        // kontak karangan di situs publik lebih buruk daripada tidak ada.
        //
        // Teksnya bicara dari sudut pandang situs dokumentasi, bukan dasbor.
        // Tombol `footer__brand-cta` adalah tombol SEKUNDER — tombol primer
        // satu-satunya dipegang navbar.
        links: [
          {
            items: [
              {
                html: `<div class="footer__brand"><a class="footer__brand-mark" href="/"><span>Simpul Desa</span></a><p class="footer__brand-text">Dokumentasi SIMPUL DESA: panduan pemakaian dasbor dan rujukan REST API-nya.</p><a class="footer__brand-cta" href="${URL_PORTAL}">Kembali ke Portal</a></div>`,
              },
            ],
          },
          {
            title: 'Quick links',
            items: [
              {label: 'Panduan', to: '/docs/intro'},
              {label: 'Fitur', to: '/docs/fitur'},
              {label: 'REST API', to: '/api/intro'},
              {label: 'Glosarium', to: '/docs/glosarium'},
              {label: 'Peran Pengguna', to: '/docs/peran-pengguna'},
            ],
          },
          {
            // Lima butir yang sama dengan menu Sumber Daya di navbar.
            // Empat URL repo dari ADR-0016; Video masih `#`, alasannya di
            // komentar `resourceMenu` pada berkas ini.
            title: 'Sumber Daya',
            items: [
              {
                label: 'Repo GitHub — Portal',
                href: 'https://github.com/Simpul-Desa/portal',
              },
              {
                label: 'Repo GitHub — API',
                href: 'https://github.com/Simpul-Desa/api',
              },
              {
                label: 'Repo GitHub — Dokumentasi',
                href: 'https://github.com/Simpul-Desa/docs',
              },
              {
                label: 'Repo GitHub — Data',
                href: 'https://github.com/Simpul-Desa/data',
              },
              {label: 'Video', href: '#'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Purwarupa SIMPUL DESA untuk LAN DATATHON 2026.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
