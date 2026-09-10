#!/usr/bin/env node
/**
 * Rapikan MDX hasil `docusaurus gen-api-docs` sebelum dipakai.
 *
 * Satu perbaikan, dan hanya satu: front matter `info_path`.
 * `docusaurus-plugin-openapi-docs` selalu menuliskannya menunjuk halaman info
 * bawaan (`api/endpoint/simpul-desa-api`), sementara halaman itu sengaja tidak
 * dibangkitkan — pengantar situs ini ditulis tangan di `docs-api/intro.mdx`
 * (`showInfoPage: false` di `docusaurus.config.js`). Panel keamanan tema
 * membuat tautan `/{info_path}#authentication` di SETIAP endpoint bertoken,
 * jadi tanpa perbaikan ini ada tautan mati di 19 halaman — dan `onBrokenLinks`
 * tidak menangkapnya karena tautan itu dibentuk di runtime, bukan di Markdown.
 *
 * Dijalankan otomatis oleh `npm run api:bangkit`.
 */

import {readFileSync, readdirSync, writeFileSync} from 'node:fs';
import {dirname, join, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const dirSitus = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dirBangkitan = join(dirSitus, 'docs-api', 'endpoint');

const LAMA = /^info_path: .*$/m;
const BARU = 'info_path: api/intro';

let disentuh = 0;
let dilewati = 0;

for (const nama of readdirSync(dirBangkitan)) {
  if (!nama.endsWith('.api.mdx')) continue;
  const jalur = join(dirBangkitan, nama);
  const isi = readFileSync(jalur, 'utf8');
  if (!LAMA.test(isi)) {
    dilewati += 1;
    continue;
  }
  if (isi.includes(BARU)) {
    dilewati += 1;
    continue;
  }
  writeFileSync(jalur, isi.replace(LAMA, BARU), 'utf8');
  disentuh += 1;
}

console.log(
  `rapikan-bangkitan: info_path -> api/intro pada ${disentuh} berkas ` +
    `(${dilewati} tidak perlu disentuh)`,
);
