import Image from "next/image";
import React from "react";

export default function ProductCard(props) {
    return (
        <div className={("product position-relative home-product ") + (props?.class)}>

            <img src={props?.img} alt={props?.name} loading="lazy" />
            <div className="products-info px-sm-3 px-2">
                <span className="store fs-14">{props?.category}</span>
                <h5 className="product-name fw-500">{props?.name}</h5>
                {/* <h6 className="price text-secondary fw-semibold">
                    $ {props?.price} <span className="fw-normal crossed-price">$ {props?.crossedPrice}</span>
                </h6> */}
            </div>
            {/* <span className="discount-percent position-absolute fw-500">
                ID-{props?.id}
            </span> */}

        </div>
    )
}