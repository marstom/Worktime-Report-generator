import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Script from 'next/script';

export default function FirstPost() {

    return (

      <div>
        <Head>
          <title>
            First post 
          </title>
          <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
        </Head>


      <h1>First Post</h1>
      <Link className="link" href="/"><a>back to home</a></Link>
      <Image 
        src="/images/profile.jpeg"
        height={144}
        width={144}
        alt="Your Name" 
      />

      <style jsx>{`
        div{
          background-color: yellow;
        }

        .link{
          color:red;
        }
      `}
      </style>
      </div>

    )
    
  }
