import "../styles/global.css";

// import { AppProps } from 'next/app'
import { SWRConfig } from "swr";
import fetchJson from "lib/fetchJson";
import { NextComponentType, GetStaticProps } from "next";

function MyApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  pageProps: GetStaticProps;
}) {
  return (
    <SWRConfig
      value={{
        fetcher: fetchJson,
        onError: (err) => {
          console.error(err);
        },
      }}
    >
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
