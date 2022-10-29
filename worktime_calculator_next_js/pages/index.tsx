import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import Alert from "../components/alert";
import Window from "components/window";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export type PostDataType = { allPostsData: Array<{ [id: string]: string }> };

export default function Home({ allPostsData }: PostDataType) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <h1 className="title">
          Read{" "}
          <Link href="/posts/first-post">
            <a>This page</a>
          </Link>
        </h1>
        <h2>
          This is my new worktime calculator, check{" "}
          <Link href="/workcalc">This Calc!</Link>
        </h2>
        <p>
          Hello, I am backend dev with 5 years experience, wanna be frontend dev
          now. I'm learning react. This is my first Next.js app, Next.js looks
          awesome!
        </p>

        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`posts/${id}`}>{title}</Link>

              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>

        <Alert type="error">this is alert</Alert>
        <Window></Window>
      </section>
    </Layout>
  );
}
