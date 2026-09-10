import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

// Halaman `/`. Sengaja setipis mungkin: judul, tagline, satu tombol ke
// Panduan. Isi selengkapnya ada di `/docs/intro` dan `/api/intro`.
export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout description="Panduan pemakaian dasbor SIMPUL DESA dan rujukan REST API-nya.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--secondary button--lg" to="/docs/intro">
              Buka Panduan
            </Link>
          </div>
        </div>
      </header>
    </Layout>
  );
}
