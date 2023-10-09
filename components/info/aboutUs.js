import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function AboutUs(props) {
    return (
        <section id="about" className="about-us container">
            <div className="row flex-row-reverse gap-lg-5">
                <div data-aos="fade-left" className="col-xl mb-lg-0 mb-5 info-side">
                    <p className="sub-header">About Us</p>
                    <h3 className="header">Best Indian  Nepali Grocery in Charlottesville, VA</h3>

                    <p className="fs-16 mb-4">
                        Discover the finest selection of Indian and Nepali groceries in Express Grocery at Charlottesville, VA store. We offer a diverse range of authentic products to elevate your culinary experience.
                    </p>
                    <ul>
                        <li>Customer Satisfaction</li>
                        <li>Fresh Products</li>
                        <li>Manufacturer Guarantee</li>
                    </ul>

                    <div className="d-md-flex">
                        <a href="tel:+14342847549" className="icon-div">
                            <span><FontAwesomeIcon icon="fa-solid fa-phone-volume" /></span>
                            <span>+1 (434) 284-7549</span>
                        </a>

                        <a href="/contact" className="icon-div ms-md-5 mt-md-0 mt-3">
                            <span><FontAwesomeIcon icon="fa-regular fa-message" /></span>
                            <span>Contact Us</span>
                        </a>
                    </div>
                </div>

                <div data-aos="fade-right" className="col-xl px-0 img-side">
                    <img src={props.img} alt="AC Outside" />
                    <div className="data-top">
                        <p><span>Free Delivery</span> <br /> Over 40$</p>
                    </div>

                    <div className="data-bottom">
                        <p><span>Authentic</span> <br /> Products</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
