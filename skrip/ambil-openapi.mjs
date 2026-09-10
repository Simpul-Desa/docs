#!/usr/bin/env node
/**
 * Ambil skema OpenAPI dari `api/` dan tulis snapshot ke
 * `static/openapi/simpul-desa.json`.
 *
 * Snapshot ini SUMBER halaman `/api/*`: `docusaurus-plugin-openapi-docs`
 * membacanya dari disk saat `npm run api:bangkit`, dan berkas yang sama
 * disajikan ke pembaca di `/openapi/simpul-desa.json`. Karena ter-commit,
 * `npm run build` tetap Node-only — tidak butuh Python dan tidak butuh
 * repo `api/` hadir (pola yang sama dengan ADR-0011).
 *
 * Konsekuensinya: snapshot bisa basi. Jalankan skrip ini setiap kali kontrak
 * `api/` berubah — rute, parameter, skema respons, atau tag.
 *
 * `api/` adalah repo git terpisah yang berdampingan dengan repo akar
 * (ADR-0009), dan venv-nya dipakai bersama `data/`. Kedua jalur itu
 * diperiksa lebih dulu; kalau salah satu tidak ada, skrip berhenti tanpa
 * menyentuh snapshot yang sudah ada.
 */

import {execFileSync} from 'node:child_process';
import {existsSync, mkdirSync, writeFileSync} from 'node:fs';
import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';

const dirSkrip = dirname(fileURLToPath(import.meta.url));
const dirSitus = resolve(dirSkrip, '..');
const dirApi = resolve(dirSitus, '..', 'api');
const python = resolve(dirSitus, '..', '.venv', 'bin', 'python');
const berkasKeluaran = resolve(dirSitus, 'static', 'openapi', 'simpul-desa.json');

function berhenti(pesan) {
  console.error(`ambil-openapi: ${pesan}`);
  console.error(
    'Tata letaknya: repo akar dan `api/` berdampingan (ADR-0009), venv ' +
      'bersama di `.venv/` akar. Snapshot lama TIDAK disentuh.',
  );
  process.exit(1);
}

if (!existsSync(dirApi)) {
  berhenti(`folder \`api/\` tidak ada di ${dirApi}`);
}
if (!existsSync(python)) {
  berhenti(`penerjemah Python venv tidak ada di ${python}`);
}

const PROGRAM = [
  'import json',
  'from src.main import create_app',
  'print(json.dumps(create_app().openapi(), ensure_ascii=False, indent=2))',
].join('; ');

let mentah;
try {
  mentah = execFileSync(python, ['-c', PROGRAM], {
    cwd: dirApi,
    encoding: 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
} catch (galat) {
  console.error(galat.stderr ?? galat.message);
  berhenti('`create_app().openapi()` gagal dijalankan');
}

let spec;
try {
  spec = JSON.parse(mentah);
} catch {
  berhenti('keluaran Python bukan JSON yang sah');
}

if (!spec.paths || Object.keys(spec.paths).length === 0) {
  berhenti('skema tidak memuat satu pun path');
}

mkdirSync(dirname(berkasKeluaran), {recursive: true});
writeFileSync(berkasKeluaran, `${JSON.stringify(spec, null, 2)}\n`, 'utf8');

const cacahPath = Object.keys(spec.paths).length;
const cacahOperasi = Object.values(spec.paths).reduce(
  (jumlah, item) => jumlah + Object.keys(item).length,
  0,
);
const tagTerdaftar = (spec.tags ?? []).map((tag) => tag.name);
const tagDipakai = new Set(
  Object.values(spec.paths).flatMap((item) =>
    Object.values(item).flatMap((operasi) => operasi.tags ?? []),
  ),
);
const tanpaTag = Object.entries(spec.paths).flatMap(([jalur, item]) =>
  Object.entries(item)
    .filter(([, operasi]) => !operasi.tags?.length)
    .map(([metode]) => `${metode.toUpperCase()} ${jalur}`),
);
const takTerdaftar = [...tagDipakai].filter(
  (tag) => !tagTerdaftar.includes(tag),
);

console.log(`ambil-openapi: ${berkasKeluaran}`);
console.log(
  `  OpenAPI ${spec.openapi} · ${cacahPath} path · ${cacahOperasi} operasi`,
);
console.log(`  ${tagTerdaftar.length} tag terdaftar: ${tagTerdaftar.join(' · ')}`);

if (tanpaTag.length > 0) {
  console.warn(
    `  PERINGATAN operasi tanpa tag (akan mengapung di sidebar): ${tanpaTag.join(', ')}`,
  );
}
if (takTerdaftar.length > 0) {
  console.warn(
    `  PERINGATAN tag dipakai tapi tidak terdaftar di \`openapi_tags\`: ${takTerdaftar.join(', ')}`,
  );
}
