/**
 * Salinan sunting `ApiExplorer` milik `docusaurus-theme-openapi-docs`.
 *
 * Bedanya dengan aslinya HANYA ini: `Request` dan `Response` tidak
 * dirender. Keduanya adalah panel "Try it" — formulir parameter, kolom
 * Bearer Token, dan tombol kirim — dan situs ini sengaja dokumentasi baca
 * saja: tidak ada permintaan yang keluar dari halaman, dan tidak ada situs
 * publik yang mengundang orang menempel token lalu menembak API produksi.
 *
 * `hideSendButton: true` di `docusaurus.config.js` saja TIDAK cukup: opsi itu
 * hanya menyembunyikan tombol kirimnya, formulir beserta kolom tokennya tetap
 * terbit. Menyembunyikannya dengan CSS pun tidak cukup — elemennya tetap ada
 * di DOM. Karena itu komponennya yang dipangkas.
 *
 * Yang tetap dirender: `SecuritySchemes` (kotak "AUTHORIZATION", yang menaut
 * ke `/api/intro#authentication`), `Server` (pemilih base URL), dan
 * `CodeSnippets` (contoh kode yang bisa disalin).
 *
 * `Server` WAJIB ikut dirender walau hanya sebagai pemilih: komponen itulah
 * yang men-dispatch server pertama dari `servers` skema sebagai nilai awal.
 * Tanpanya `state.server.value` tetap undefined, dan contoh cURL memakai URL
 * relatif — yang di browser terbaca sebagai origin situs dokumentasi ini,
 * bukan API mana pun. Terbukti: contoh kode sempat berbunyi
 * `curl 'http://localhost:3100/api/...'`.
 *
 * KONSEKUENSI: berkas ini menyalin struktur komponen milik tema. Setiap kali
 * `docusaurus-theme-openapi-docs` dinaikkan versinya, bandingkan lagi dengan
 * `node_modules/docusaurus-theme-openapi-docs/src/theme/ApiExplorer/index.tsx`.
 */

import React from 'react';

import {useDoc} from '@docusaurus/plugin-content-docs/client';
import CodeSnippets from '@theme/ApiExplorer/CodeSnippets';
import SecuritySchemes from '@theme/ApiExplorer/SecuritySchemes';
import Server from '@theme/ApiExplorer/Server';
import * as sdk from 'postman-collection';

export default function ApiExplorer({item, infoPath}) {
  const metadata = useDoc();
  const {mask_credentials: maskCredentials} = metadata.frontMatter;

  const postman = new sdk.Request(
    item.postman
      ? sdk.Request.isRequest(item.postman)
        ? item.postman.toJSON()
        : item.postman
      : {},
  );

  return (
    <>
      <SecuritySchemes infoPath={infoPath} />
      <Server />
      {item.method !== 'event' && (
        <CodeSnippets
          postman={postman}
          codeSamples={item['x-codeSamples'] ?? []}
          maskCredentials={maskCredentials}
          requestBody={item.requestBody}
        />
      )}
    </>
  );
}
