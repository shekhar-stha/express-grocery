
export default function Faq() {
    return (
        <section class="faq my-5" id="faq">
            <div class="container py-5">
                <div class="small-big-header mb-4">
                    <p class="sub-header">FAQ</p>
                    <h3 className="header">We got answers for you</h3>
                </div>
                <div class="row">
                    <div class="accordion col-lg col-12" id="accordionExample ">
                        <div className="accordion-item">
                            <h2 className="accordion-header accordion-topic mb-0 pb-0" id="headingOne">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    <span className="">What products are available at Express Grocery?</span>
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body text-info ">
                                    <p>
                                        Express Grocery offers a wide range of Indian and Nepali groceries. Our selection includes
                                        spices, herbs, rice, grains, fresh produce, snacks, sweets, condiments, sauces, and more.
                                        Visit our store in Charlottesville, VA to explore our diverse range of products.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header accordion-topic mb-0 pb-0" id="headingTwo">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    <span className="">What are the store hours of Express Grocery?</span>
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body text-info">
                                    <p>
                                        Express Grocery is open every day from 10:00 AM to 8:00 PM. You can visit us at
                                        Charlottesville, VA, United States, Virginia. We look forward to serving you!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="accordion col-lg col-12" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header accordion-topic mb-0 pb-0" id="headingThree">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <span className="">How can I contact Express Grocery?</span>
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body text-info">
                                    <p>
                                        You can reach us by phone at +1 (434) 284-7549. For inquiries and other information, you
                                        can also email us at virginiaannapurna@gmail.com. We're here to assist you!
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="accordion-item">
                            <h2 className="accordion-header accordion-topic mb-0 pb-0" id="headingFour">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                    <span className="">Do you have a presence on social media?</span>
                                </button>
                            </h2>
                            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour"
                                data-bs-parent="#accordionExample">
                                <div className="accordion-body text-info">
                                    <p>
                                        Yes, you can find us on Facebook. Visit our <a href="https://www.facebook.com/welcomenamaste"
                                            target="_blank" rel="noopener noreferrer">Facebook page</a> to stay updated with our
                                        latest offerings and promotions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
