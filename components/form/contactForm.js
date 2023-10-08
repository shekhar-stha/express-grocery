import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
export default function ContactForm() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4dytj6l', 'template_mgc2dqk', form.current, 'FxkNm_-J9onGsZYuE')
            .then((result) => {
                alert("Message Sent, We will get back to you shortly");
                form.current.reset();
            }, (error) => {
                alert(error.text);
            });
    };
    return (
        <div className="col-lg-5 col-md-12 col-sm-12" >
            <div className="contact-section__form">
                {/* Form Start */}
                <form ref={form} onSubmit={sendEmail} className="form-group">
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

                    {/* Lead add 1st row  */}
                    <div className="contact-form-right__row">
                        {/* Full Name  */}
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <label htmlFor="location" className="contact-form-right__title">
                                Location <span className="red-star">*</span>
                            </label>

                            <input
                                id="location"
                                type="text"
                                name="location"
                                placeholder="Enter Location"
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
                                placeholder="Type your message or products you want to buy..."
                                id="message"
                                name="message"
                                rows={5}
                            />

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
        </div >
    )
}
