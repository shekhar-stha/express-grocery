import Head from 'next/head';
import Link from 'next/link';

import Navbar from '../../components/header/Navbar';
import ContactForm from '../../components/form/contactForm';
import Footer from '../../components/info/Footer';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Express Grocery Store | Indian Nepali Grocery</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Contact Express Grocery Store - your one-stop shop for quality Indian and Nepali groceries in Charlottesville." />
        <meta name="keywords" content="Indian grocery store, Nepali food, Charlottesville market, Local grocery shop, Cultural ingredients, Specialty store, Family-owned business, Ethnic products,
        Community-driven, Quality assurance" />
      </Head>

      <Navbar />
      <section className="contact-section pb-5">
        <div className="container pt-3">
          <div className="contact-section__img">
            <img src="/img/store-outdoor.JPG" alt="About-section-img" className="img-fluid" />
            <div className="contact-section__overlay" />
            <h3 className="contact-section__title">Contact Us</h3>
          </div>
          <h1 className="contact-section__primary-title">Let’s stay connected</h1>
          <div className="contact-section__wrapper">
            {/* Contact Details */}
            <div className="contact-section">
              <div className="row contact-section__row">
                <div className="col-lg-7 col-md-12 col-sm-12">
                  <div className="row">
                    <div className="col-lg-4 col-sm-4 contact-section__contact-details">
                      <div className="details">
                        <span className="details__icons"><img alt="icon" src="https://cdn.asparksys.com/medias/1666259171836.svg" /></span>
                        <span className="details__text">Address</span>
                        <span className="details__address">Charlottesville, VA</span>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 contact-section__contact-details">
                      <div className="details">
                        <span className="details__icons"><img alt="icon" src="https://cdn.asparksys.com/medias/1666259197935.svg" /></span>
                        <span className="details__text">Phone</span>

                        <a href="tel:+14342847549">+1 (434) 284-7549</a>
                      </div>
                    </div>
                    <div className="col-lg-4 col-sm-4 contact-section__contact-details">
                      <div className="details">
                        <span className="details__icons"><img alt="icon" src="https://cdn.asparksys.com/medias/1666259213353.svg" /></span>
                        <span className="details__text">Email</span>
                        <span className="details__address"><a href="mailto:cni@cnind.org">virginiaannapurna@gmail.com</a></span>
                      </div>
                    </div>
                  </div>
                  <div className="map">
                    <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.8135107226433!2d-78.48873864164375!3d38.0630327318435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b387596b3bbed5%3A0xd939c13922b48116!2sExpress%20Grocery%20Store!5e0!3m2!1sen!2snp!4v1696521214670!5m2!1sen!2snp" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
