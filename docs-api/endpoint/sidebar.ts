import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "category",
      label: "Peta Peran",
      link: {
        type: "doc",
        id: "endpoint/peta-peran",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/daftar-peta-peran-api-model-peta-peran-get",
          label: "Daftar Peta Peran",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/ringkasan-peta-peran-api-model-peta-peran-ringkasan-get",
          label: "Ringkasan Peta Peran",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/detail-peta-peran-api-model-peta-peran-iddesa-get",
          label: "Detail Peta Peran",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Kartu Ekonomi Desa",
      link: {
        type: "doc",
        id: "endpoint/kartu-ekonomi-desa",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/kartu-detail-api-model-kartu-iddesa-get",
          label: "Detail Kartu Ekonomi Desa",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Jalur Ekonomi",
      link: {
        type: "doc",
        id: "endpoint/jalur-ekonomi",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/daftar-jalur-api-model-jalur-ekonomi-varian-get",
          label: "Daftar Jalur",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/detail-jalur-api-model-jalur-ekonomi-varian-id-jalur-get",
          label: "Detail Jalur",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Desa Kembar",
      link: {
        type: "doc",
        id: "endpoint/desa-kembar",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/desa-kembar-api-model-desa-kembar-iddesa-get",
          label: "Tetangga Desa Kembar",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Citra Potensi Desa",
      link: {
        type: "doc",
        id: "endpoint/citra-potensi-desa",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/daftar-sel-api-model-citra-potensi-get",
          label: "Daftar Sel Citra",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/detail-sel-api-model-citra-potensi-sel-get",
          label: "Detail Sel Citra",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Asisten Desa",
      link: {
        type: "doc",
        id: "endpoint/asisten-desa",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/chat-api-chat-post",
          label: "Kirim Pesan",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Berita Desa",
      link: {
        type: "doc",
        id: "endpoint/berita-desa",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/berita-desa-api-berita-iddesa-get",
          label: "Daftar Berita Desa",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Laporan Desa",
      link: {
        type: "doc",
        id: "endpoint/laporan-desa",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/laporan-desa-api-laporan-iddesa-get",
          label: "Laporan PDF Desa",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Wilayah",
      link: {
        type: "doc",
        id: "endpoint/wilayah",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/daftar-provinsi-api-wilayah-provinsi-get",
          label: "Daftar Provinsi",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/ringkasan-wilayah-api-wilayah-ringkasan-get",
          label: "Ringkasan Wilayah",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/pusat-wilayah-api-wilayah-pusat-get",
          label: "Pusat Wilayah",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/daftar-kabupaten-api-wilayah-kabupaten-get",
          label: "Daftar Kabupaten",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/daftar-desa-api-wilayah-desa-get",
          label: "Daftar Desa",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Pencarian Desa",
      link: {
        type: "doc",
        id: "endpoint/pencarian-desa",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/cari-desa-api-desa-cari-get",
          label: "Cari Desa",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Batas Desa",
      link: {
        type: "doc",
        id: "endpoint/batas-desa",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/geo-desa-api-geo-desa-idkab-get",
          label: "Batas Desa Kabupaten",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Kesehatan",
      link: {
        type: "doc",
        id: "endpoint/kesehatan",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/kesehatan-health-get",
          label: "Kesehatan",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Akun",
      link: {
        type: "doc",
        id: "endpoint/akun",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/profil-saya-api-profil-saya-get",
          label: "Profil akun yang sedang masuk",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Administrasi",
      link: {
        type: "doc",
        id: "endpoint/administrasi",
      },
      items: [
        {
          type: "doc",
          id: "endpoint/segarkan-berita-api-admin-berita-segarkan-post",
          label: "Segarkan Berita",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "endpoint/hapus-berita-api-admin-berita-id-berita-delete",
          label: "Hapus Berita",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "endpoint/daftar-pengguna-api-admin-pengguna-get",
          label: "Daftar Pengguna",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "endpoint/ubah-peran-api-admin-pengguna-id-pengguna-peran-post",
          label: "Ubah Peran",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "endpoint/status-sistem-api-admin-status-get",
          label: "Status Sistem",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
