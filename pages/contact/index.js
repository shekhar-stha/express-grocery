import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/header/navbar';
import Footer from '../../components/info/footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Footer />
    </div>
  );
}
