import React, { useState } from 'react'

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let newErrors = {};

        // Name validation
        if (formData.name.trim() === "") {
            newErrors.name = "Name is required";
        }

        // Email validation
        if (formData.email.trim() === "") {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Enter a valid email";
        }

        // Subject validation
        if (formData.subject.trim() === "") {
            newErrors.subject = "Subject is required";
        }

        // Message validation
        if (formData.message.trim() === "") {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log("Form Submitted:", formData);

            localStorage.setItem("contactForm", JSON.stringify(formData));

            alert("Your message has been sent!");

            const data = JSON.parse(localStorage.getItem("contactForm"));

            console.log(data);

            // Clear form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: ""
            });

            setErrors({});
        }
    };

    return (
        <div>
            <section id="contact" className="contact section">

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="contact-main-wrapper row">
                        {/* <div className="map-wrapper">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div> */}

                        <div className="contact-content">
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <div className="contact-cards-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                        <div className="contact-card">
                                            <div className="icon-box">
                                                <i className="bi bi-geo-alt"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h4>Location</h4>
                                                <p>8721 Broadway Avenue, New York, NY 10023</p>
                                            </div>
                                        </div>

                                        <div className="contact-card">
                                            <div className="icon-box">
                                                <i className="bi bi-envelope"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h4>Email</h4>
                                                <p>info@examplecompany.com</p>
                                            </div>
                                        </div>

                                        <div className="contact-card">
                                            <div className="icon-box">
                                                <i className="bi bi-telephone"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h4>Call</h4>
                                                <p>+1 (212) 555-7890</p>
                                            </div>
                                        </div>

                                        <div className="contact-card">
                                            <div className="icon-box">
                                                <i className="bi bi-clock"></i>
                                            </div>
                                            <div className="contact-text">
                                                <h4>Open Hours</h4>
                                                <p>Monday-Friday: 9AM - 6PM</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-6'>
                                    <div className="contact-form-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                        <h3>Get in Touch</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua consectetur adipiscing.</p>

                                        <form onSubmit={handleSubmit} className="php-email-form">

                                            <div className="row">

                                                {/* Name */}
                                                <div className="col-md-6 form-group">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        className="form-control"
                                                        placeholder="Your Name"
                                                        value={formData.name}
                                                        onChange={handleChange}
                                                    />

                                                    {errors.name && (
                                                        <small className="text-danger">
                                                            {errors.name}
                                                        </small>
                                                    )}
                                                </div>

                                                {/* Email */}
                                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        className="form-control"
                                                        placeholder="Your Email"
                                                        value={formData.email}
                                                        onChange={handleChange}
                                                    />

                                                    {errors.email && (
                                                        <small className="text-danger">
                                                            {errors.email}
                                                        </small>
                                                    )}
                                                </div>

                                            </div>

                                            {/* Subject */}
                                            <div className="form-group mt-3">
                                                <input
                                                    type="text"
                                                    name="subject"
                                                    className="form-control"
                                                    placeholder="Subject"
                                                    value={formData.subject}
                                                    onChange={handleChange}
                                                />

                                                {errors.subject && (
                                                    <small className="text-danger">
                                                        {errors.subject}
                                                    </small>
                                                )}
                                            </div>

                                            {/* Message */}
                                            <div className="form-group mt-3">
                                                <textarea
                                                    className="form-control"
                                                    name="message"
                                                    rows="5"
                                                    placeholder="Message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                ></textarea>

                                                {errors.message && (
                                                    <small className="text-danger">
                                                        {errors.message}
                                                    </small>
                                                )}
                                            </div>

                                            {/* Submit */}
                                            <div className="form-submit mt-3">
                                                <button type="submit">
                                                    Send Message
                                                </button>
                                            </div>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact