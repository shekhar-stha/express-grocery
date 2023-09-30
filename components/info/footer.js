import React from 'react'

export default function Footer() {
    return (
        <footer>
            <hr />
            <div className="container mt-5">
                <div className="row fw-500 fs-16">
                    <div className="footer-col col-lg pe-lg-5 me-lg-5 col-12 mb-lg-0 mb-5 text-lg-left">
                        <img
                            src="/img/logo.png"
                            alt="logo"
                            className="d-inline-block my-auto mb-3"
                        />
                    </div>

                    <div className="col-lg col-md-4 col-12 mb-lg-0 mb-4 footer-col text-left">
                        <p className="mb-3">
                            <strong className="text-primary h5 fw-600 fs-16"> Company</strong>
                        </p>
                        <div className="text-info">
                            <a title="Home" href="/">Home</a>
                        </div>
                    </div>

                    <div className="col-lg col-md-4 col-12 mb-lg-0 mb-4 footer-col text-left">
                        <p className="mb-3">
                            <strong className="text-primary h5 fw-600 fs-16"> Quick Links</strong>
                        </p>
                        <div className="text-info">
                            <p><a title="FAQ" href="/index.html">FAQ</a></p>
                        </div>
                    </div>

                    <div className="col-lg col-md-4 col-12 mb-lg-0 mb-4 footer-col text-left">
                        <p className="mb-3">
                            <strong className="text-primary h5 fw-600 fs-16"> Contact us</strong>
                        </p>
                        <div className="text-info">
                            <p>
                                <a title="Phone Number" href="tel:+17797711143" className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-telephone me-3" viewBox="0 0 16 16">
                                        <path
                                            d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                    </svg>
                                    <span> +1 (779) 771-1143</span>
                                </a>
                            </p>
                            <p>
                                <a title="Location" href="/index.html#serviceAreas" className="d-flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                        className="bi bi-geo-alt me-3" viewBox="0 0 16 16">
                                        <path
                                            d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 a 3 0 0 0 0 6z" />
                                    </svg>
                                    <span>
                                        Charlottesville, VA
                                    </span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
                <hr className="mt-4" />

                <p className="pt-2 pb-3 fw-500 text-info text-center">&copy; Express Grocery 2023. All rights reserved.</p>
                <p className="pt-2 pb-3 fw-500 text-info text-center">Developed by <a className='text-decoration-underline' href='/https://orcalynx.com/'>Orcalynx</a></p>
            </div>
        </footer>
    )
}
