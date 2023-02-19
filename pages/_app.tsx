import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta http-equiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/img/sg-logo.jpg" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />
      <Component {...pageProps} />
      <SiteFooter />
    </>
  );
}
