import Head from 'next/head';
import Link from 'next/link';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          Contact
        </h1>

        <Link href="/contact">Homepage!</Link>
      </main>
    </div>
  );
}
