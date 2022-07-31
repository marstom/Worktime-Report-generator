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
        <p>
          Hello, I am backend dev with 5 years experience, wanna be frontend dev now. I'm learning react.
          This is my first Next.js app, Next.js looks awesome!
        </p>
        
        <Alert type="error">this is alert</Alert>
        <Window></Window>
      </section>
    </Layout>
  );
}