import React, { useRef } from "react";
import Product from "./ProductCard";
// Slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function ProductSlider(props) {
    // React slick
    const slider = useRef(null);

    const settings = {
        arrows: false,
        dots: false,
        lazyLoad: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    arrow: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 390,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    };
    console.log("products" + props.products);

    const products = props.products;

    return (
        <>
            <div className="product-row container my-5 py-3" >
                <h2 className={`header ${props.headerClass ? props.headerClass : " text-center"}`}>{props.containerName}</h2>
                <div className="position-relative">
                    <button onClick={() => slider.current.slickPrev()} className="slick-custom slick-custom-prev btn btn-primary rounded-circle">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-left" />
                    </button>
                    <button onClick={() => slider.current.slickNext()} className="slick-custom slick-custom-next btn btn-primary rounded-circle">
                    <FontAwesomeIcon icon="fa-solid fa-chevron-right" />
                    </button>
                    <Slider ref={slider} {...settings}>
                        {
                            props?.products?.map((product) => {
                                return (
                                    <Link href={`/product/${product?.id}`} key={product?.id} >
                                        <Product id={product?.id} name={product?.name} category={product?.genre} img={product?.img} />
                                    </Link>
                                )
                            })
                        }
                    </Slider>
                </div>
            </div>

        </>
    )
} 