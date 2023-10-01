import React from 'react'
import CallNow from '../buttons/callNow'
import { IconStarFilled } from '@tabler/icons-react';
export default function Hero() {
    return (
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
                            <CallNow className="btn-secondary px-5" />
                            <a title="Services" href="/index.html#services" className="ms-4 btn btn-light border-2 fs-19 px-4 rounded-1">Our Services</a>
                        </div>

                        <div className="ratings">
                            <a title='Yelp Navigation' target='_blank' href='https://www.yelp.com/biz/express-grocery-store-charlottesville' className="column">
                                <div className="img-section">
                                    <img src="/img/Yelp.png" alt="Yelp Logo" />
                                </div>
                                <div className="stars">
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                </div>
                            </a>

                            <a title='Google Navigation' target='_blank' href='https://www.google.com/maps/place/Express+Grocery+Store/@38.0632369,-78.4888734,18.82z/data=!4m12!1m5!3m4!2zMzjCsDAzJzQ3LjIiTiA3OMKwMjknMTguMCJX!8m2!3d38.063105!4d-78.488328!3m5!1s0x89b387596b3bbed5:0xd939c13922b48116!8m2!3d38.0630239!4d-78.4883515!16s%2Fg%2F11q2thh9lf?entry=ttu' className="column">
                                <div className="img-section">
                                    <img src="/img/google.png" alt="Google Logo" />
                                </div>
                                <div className="stars">
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                    <IconStarFilled size={19} className="text-secondary" />
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="img-div">
                        <img className="hero-img" src="/img/hero-lady.png" alt="Painter Painting" />

                    </div>
                </div>
            </div>
        </div>
    )
}
