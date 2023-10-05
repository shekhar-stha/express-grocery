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
                  <div className="row">
                    <div className="map">
                      <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.8135107226433!2d-78.48873864164375!3d38.0630327318435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b387596b3bbed5%3A0xd939c13922b48116!2sExpress%20Grocery%20Store!5e0!3m2!1sen!2snp!4v1696521214670!5m2!1sen!2snp" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                  </div>
                </div>
                {/* CONTACT FORM STARTS HERE */}
                <div className="col-lg-5 col-md-12 col-sm-12">
                  <div className="contact-section__form">
                    {/* Form Start */}
                    <form action="#" className="form-group">
                      <h1 className="contact-form-right__form-title fs-22 text-primary">Contact Us</h1>
                      {/* Lead add 1st row  */}
                      <div className="contact-form-right__row">

                        {/* Full Name  */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <label htmlFor="fullname" className="contact-form-right__title">
                            Full Name<span className="red-star">*</span>
                          </label>

                          <input

                            id="fullname"
                            type="text"
                            name="fullname"
                            placeholder="Enter full name"
                            className="form-control"
                          />


                        </div>
                      </div>

                      {/* Lead add 3rd row  */}
                      <div className="contact-form-right__row">
                        {/* Number  */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <label htmlFor="number" className="contact-form-right__title">
                            Number<span className="red-star">*</span>
                          </label>

                          <input

                            id="number"
                            type="text"
                            name="number"
                            placeholder="Enter your phone number"
                            className="form-control"
                          />

                        </div>
                      </div>

                      {/* Lead add 3rd row  */}
                      <div className="contact-form-right__row">
                        {/* message  */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                          <label htmlFor="message" className="contact-form-right__title">
                            Message<span className="red-star">*</span>
                          </label>

                          <textarea

                            className="form-control"
                            placeholder="Type your message..."
                            id="message"
                            rows={5}
                            defaultValue={""} />

                        </div>
                      </div>
                      {/* Lead add 6th row  */}
                      <div className="contact-form-right__btns">
                        <button type="submit" className="btn contact-form-btn w-100 mt-5">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
