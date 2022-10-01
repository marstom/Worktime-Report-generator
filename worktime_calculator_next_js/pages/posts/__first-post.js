import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/layout";

export default () => {
  return (
    <Layout>
      <Head>
        <title>First post</title>
        <Script
          src="https://connect.facebook.net/en_US/sdk.js"
          strategy="lazyOnload"
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
      </Head>

      <h1>First Post</h1>
      <Image
        src="/images/profile.jpeg"
        height={144}
        width={144}
        alt="Your Name"
      />

      <div>This is my frist post.</div>
    </Layout>
  );
};
