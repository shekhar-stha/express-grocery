import React from 'react'
import CallNow from '../buttons/callNow'

export default function WhyUs() {
    return (
        <section className='why-us'>
            <div className='container'>
                <div className='flex'>
                    <div className='info-div'>
                        <p className='sub-header'>Features</p>
                        <h3 className='header'>Why should you use our service ?</h3>
                        <p>We always provide the best and fastest service for all our customer</p>

                        <div className='features'>
                            <div className='feature'>
                                <img src='/img/delivery-van.png' alt='Delivery Van' />

                                <p>We provide the fastest service</p>
                            </div>

                            <div className='feature'>
                                <img src='/img/document.png' alt='Document' />

                                <p>No additional fees for orders</p>
                            </div>

                            <div className='feature'>
                                <img src='/img/delivery-man.png' alt='Delivery Man' />

                                <p>Fast and reliable ddivery</p>
                            </div>
                        </div>

                       <CallNow className="btn-primary px-5 mt-3" />
                    </div>
                    <div className='img-div'>
                        <img src='/img/store-outdoor.JPG' alt='Store Outdoor' />
                    </div>
                </div>
            </div>
        </section>
    )
}
