# Situs dokumentasi SIMPUL DESA

Situs dokumentasi publik SIMPUL DESA, dibangun dengan
[Docusaurus](https://docusaurus.io/) 3.10: panduan produk, satu bagian per
fitur, dan rujukan REST APIs yang dibangkitkan dari skema OpenAPI.

Repo ini adalah modul Dokumentasi, satu dari empat modul SIMPUL DESA (DATATHON 2026 — Sistem
Intelijen Potensi dan Kesiapan Ekonomi Desa):

| Modul | Repo | Peran |
|---|---|---|
| Portal | [Simpul-Desa/portal](https://github.com/Simpul-Desa/portal) | dasbor web pengguna |
| API | [Simpul-Desa/api](https://github.com/Simpul-Desa/api) | layanan backend yang menyajikan seluruh endpoint |
| Data | [Simpul-Desa/data](https://github.com/Simpul-Desa/data) | panen data dan pemodelan |
| Dokumentasi | [Simpul-Desa/docs](https://github.com/Simpul-Desa/docs) | situs dokumentasi project SIMPUL DESA |

Situs ini hilir: ia tidak memproduksi apa pun untuk repo lain.

## Struktur

Dua instance docs berjalan berdampingan:

| Sumber | Rute | Sidebar | Isi |
|---|---|---|---|
| `docs/` | `/docs/*` | `sidebars.js` — dua sidebar | Panduan (5 butir) + Fitur (`docs/fitur/`) |
| `docs-api/` | `/api/*` | `sidebarsApi.js` (eksplisit) | Rujukan REST APIs |

Isi halaman di bawah `docs/` masih kerangka: judul dan definisi satu paragraf
yang disalin dari glosarium proyek. Salinan yang terbit ada di halaman
Glosarium, `docs/glosarium.mdx`.

Navbar punya empat butir: Panduan, Fitur, REST APIs, Sumber Daya. Sidebar
Panduan memuat lima butir pengantar; sidebar Fitur memuat kesembilan fitur
sebagai satu pohon bersarang di bawah `/docs/fitur`, dipisah Fitur Utama dan
Fitur Tambahan. Menambah fitur berarti menambah folder di `docs/fitur/`, entri
di `sidebars.js`, dan butir di menu Fitur pada `docusaurus.config.js`.

Footer berisi blok identitas plus dua kolom tautan: Quick links dan Sumber
Daya.

## Pencarian

Kotak cari navbar memakai `@easyops-cn/docusaurus-search-local`: indeks lunr
dibangun saat `npm run build` dan disajikan sebagai berkas statis. Tidak ada
layanan luar dan tidak ada kunci API — situs bisa dibangun dan dicari di mana
pun ia di-host. Kedua instance docs terindeks; `docsDir` dan
`docsRouteBasePath` di `docusaurus.config.js` harus tetap berbentuk array dua
nilai.

Teks antarmukanya diterjemahkan di `i18n/id/code.json`, yang sengaja memuat
sepuluh kunci pencarian saja — kunci lain jatuh ke pesan bawaan tema.

## Menjalankan

```bash
npm install
npm run start      # server pengembangan — http://localhost:3001
npm run build      # build produksi ke build/ — sekaligus gerbang verifikasi
npm run serve      # menyajikan hasil build — http://localhost:3001
```

Port 3001 dipatok di `package.json`, bukan bawaan 3000: Portal memakai 3000,
jadi keduanya bisa berjalan berdampingan.

`onBrokenLinks: 'throw'` membuat tautan mati menggagalkan `npm run build`, jadi
build hijau adalah bukti bahwa navigasi utuh.

## Rujukan REST APIs

Halaman `/api/*` dibangkitkan dari skema OpenAPI milik repo API, bukan ditulis
tangan. Alurnya dua langkah, keduanya manual dan sengaja tidak menempel di
`npm run build`:

```bash
npm run openapi:ambil   # snapshot skema API -> static/openapi/simpul-desa.json
npm run api:bangkit     # bersihkan + bangkitkan MDX di docs-api/endpoint/
npm run api:bersih      # hanya membersihkan hasil bangkitan
```

`openapi:ambil` menjalankan Python di dalam checkout repo API — jadi ia butuh
repo itu dikloning bersebelahan dengan repo ini, plus venv bersama proyek.
Skrip berhenti tanpa menyentuh snapshot lama kalau salah satu jalur tidak ada.

`npm run build` **tidak** butuh keduanya: snapshotnya ter-commit, jadi build
tetap Node-only.

Jalankan kedua langkah itu setiap kali kontrak API berubah — rute, parameter,
skema respons, tag, atau server. Tanpa itu situs menampilkan kontrak lama
tanpa satu pun peringatan.

### Keluaran, bukan sumber

| Jalur | Dibangkitkan oleh | Ter-commit? |
|---|---|---|
| `static/openapi/simpul-desa.json` | `npm run openapi:ambil` | ya |
| `docs-api/endpoint/**` | `npm run api:bangkit` | ya |
| `build/` | `npm run build` | tidak |

Jangan menyunting ketiganya dengan tangan. Yang ditulis tangan:
`docs-api/intro.mdx` dan `sidebarsApi.js`.

Nama, urutan, dan deskripsi kelompok endpoint dimiliki `TAG_OPENAPI` di
`src/main.py` repo API — bukan berkas mana pun di repo ini. Yang perlu
diperbaiki di sana diperbaiki di repo API, lalu dibangkitkan ulang di sini.

## Rupa

Kanvas putih, Google Sans Flex untuk teks dan judul, Geist Mono & Fira Code
untuk kode.

Warna aksi dan tangga sudut mengikuti sistem desain Portal: oranye sebagai
satu-satunya voltase, sudut 16/12/10/6/pil. Kanvas dan tangga abunya **tidak**
ikut — tangga tanpa putih di sistem itu dirancang untuk latar citra satelit,
bukan halaman baca.

Satu nilai oranye `#ff7300` untuk semua peran: isian tombol (teks putih di
atasnya), tautan, tab aktif, cincin fokus, penanda aktif. Tokennya di
`src/css/custom.css` bagian 1 — tidak ada nilai warna atau sudut yang ditulis
di luar bagian itu.

Pilihan itu membawa utang kontras yang diterima sadar: `#ff7300` hanya 2,73:1
di atas kanvas putih, jadi tautan, cincin fokus, dan teks tombol tidak lolos
WCAG AA. Situs ini karena itu tidak diklaim lolos AA.
