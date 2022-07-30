import Head from 'next/head';
import Link from 'next/link'
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Alert from '../components/alert'
import Window from '../components/window.js'

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <h1 className='title'>
        Read{' '}
        <Link href="/posts/first-post"><a>This page</a></Link>
      </h1>
        <p>It will be my timer app</p>
        
        <Alert type="error">this is alert</Alert>
        <Window></Window>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}