import Head from 'next/head';
import Navbar from '../components/header/navbar';
import ProductCategories from '../components/products/productCategories';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className='nav-hero home'>
          <Navbar />
          <div className='hero'>
            <div className='container'>
              <div className="d-lg-flex">
                <div className="info-div">
                  <h1 className="mb-4">
                   Best Indian & Nepali Grocery Store in <span className='text-secondary'>Charlottesville, VA</span>
                  </h1>
                  <p className="mx-auto">
                    From indian food to nepali, we got everything for you.
                  </p>
                  <div className="d-flex mt-xl-4 mt-5 pb-4">
                    <a title="Call Us Now" href="tel:+17797711143" className="btn btn-secondary fs-19 px-4 rounded-1">Call Now</a>
                    <a title="Services" href="/index.html#services" className="ms-4 btn btn-light border-2 fs-19 px-4 rounded-1">Our Services</a>
                  </div>

                  <div className="ratings">
                    <div className="column">
                      <div className="img-section">
                        <img src="/img/Yelp.png" alt="Yelp Logo" />
                      </div>
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>

                    <div className="column">
                      <div className="img-section">
                        <img src="/img/google.png" alt="Google Logo" />
                      </div>
                      <div className="stars">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="img-div">
                  <img className="hero-img" src="/img/hero-lady.png" alt="Painter Painting" />
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductCategories/>
      </main>
    </div>
  );
}
