import Head from "next/head"
import "../styles/scss/_global.scss"
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { Html } from "next/document";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
    return (
        <>
                <Head>
                    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link rel="manifest" href="/site.webmanifest" />
                    <link rel="icon" href="/favicon.ico" sizes="any" />

                </Head>

                <Component {...pageProps} />;

        </>
    )
}