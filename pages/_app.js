import Head from "next/head"
import "../styles/scss/_global.scss"
import '@fortawesome/fontawesome-svg-core/styles.css'
import Script from "next/script"
import $ from 'jquery';
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>

                {/* Include Font Awesome CSS */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" />

                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link rel="icon" href="/favicon.ico" sizes="any" />

                
               
                {/* Include Font Awesome JavaScript */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/js/all.min.js" integrity="sha512-naukR7I+Nk6gp7p5TMA4ycgfxaZBJ7MO5iC3Fp6ySQyKFHOGfpkSZkYVWV5R7u7cfAicxanwYQ5D1e17EfJcMA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

              
            </Head>

            <Component {...pageProps} />;

        </>
    )
}