import React, { useRef } from 'react'
import Slider from 'react-slick';

export default function Testimonials() {
    const slider = useRef(null);
    const settings = {
        arrows: false,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    dots: true,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className="testimonials primary-overlay">
            <div className="container" data-aos="fade-up">
                <div>
                    <p className="sub-header sub-header-white">Clients Testimonials</p>
                    <h3 className="header text-white">What our Valuable Customers say</h3>
                </div>

                <div className="testimonial-slider position-relative">
                    {/* Testimonial 1 */}
                    <button onClick={() => slider.current.slickPrev()} className="slick-custom slick-custom-prev btn btn-secondary rounded-circle"><i className="fa-solid fa-chevron-left"></i></button>
                    <button onClick={() => slider.current.slickNext()} className="slick-custom slick-custom-next btn btn-secondary rounded-circle"><i className="fa-solid fa-chevron-right"></i></button>
                    <Slider ref={slider} {...settings}>
                        <div className="column">
                            <img className="quote" src="/img/quote.png" alt="Quote Icon 1" />
                            <p className="data">
                                In case you are looking for Indian and Nepalese grocery items in Charlottesville; this place is highly recommended. You will get almost all kind of spices along with Frozen snacks. They also have some fresh vegetables. Seller is very friendly and willing to help. Great service with reasonable price.
                            </p>
                            <div className="user-info">
                                <div className="user-details">
                                    {/* Client Details */}
                                    <p className="name">Poonam N</p>
                                    <p className="address">2022/03/24</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 2 */}
                        <div className="column">
                            <img className="quote" src="/img/quote.png" alt="Quote Icon 2" />
                            <p className="data">
                                Excellent grocery store for buying Indian stuff. The other store by the Northside library
                                is way smaller with hardly much options and higher prices. This store sells around the 
                                same price as Richmond stores so it is way more convenient. The selection is decent and 
                                prices great. Definitely shifting my business from Richmond stores to this one.
                            </p>
                            <div className="user-info">
                                <div className="user-details">
                                    {/* Client Details */}
                                    <p className="name">Samiran G</p>
                                    <p className="address">2022/09/21</p>
                                </div>
                            </div>
                        </div>

                        {/* Testimonial 3 */}
                        <div className="column">
                            <img className="quote" src="/img/quote.png" alt="Quote Icon 4" />
                            <p className="data">
                                Super friendly, great selection. I really like this place!
                            </p>
                            <div className="user-info">
                                <div className="user-details">
                                    {/* Client Details */}
                                    <p className="name">Skye K</p>
                                    <p className="address">2023/04/12</p>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </section>
    )
}
