import React from 'react'
import personf3 from "../assets/images/personf3.webp";

function Events() {
    return (
        <div>
            <section id="courses-events" class="courses-events section">

                <div class="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div class="row">

                        <div class="col-lg-9">

                            {/* <!-- Event Item --> */}
                            <article class="event-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="event-image">
                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/events-3.webp" class="img-fluid" alt="Event Image" />
                                            <div class="date-badge">
                                                <span class="day">15</span>
                                                <span class="month">Dec</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="event-content">
                                            <div class="event-meta">
                                                <span class="time"><i class="bi bi-clock"></i> 2:00 PM - 4:00 PM</span>
                                                <span class="location"><i class="bi bi-geo-alt"></i> Online Webinar</span>
                                            </div>
                                            <h3 class="event-title">
                                                <a href="#">Advanced Data Science Techniques Workshop</a>
                                            </h3>
                                            <p class="event-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                            <div class="event-footer">
                                                <div class="instructor">
                                                    <img src={personf3} alt="Instructor" class="instructor-avatar" />
                                                    <span>Dr. Sarah Johnson</span>
                                                </div>
                                                <div class="event-price">
                                                    <span class="price">$49</span>
                                                </div>
                                            </div>
                                            <div class="event-actions">
                                                <a href="/" class="btn btn-primary">Register Now</a>
                                                <a href="/" class="btn btn-outline">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/* <!-- End Event Item --> */}

                            {/* <!-- Event Item --> */}
                            <article class="event-card aos-init" data-aos="fade-up" data-aos-delay="300">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="event-image">
                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/events-7.webp" class="img-fluid" alt="Event Image" />
                                            <div class="date-badge">
                                                <span class="day">22</span>
                                                <span class="month">Dec</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="event-content">
                                            <div class="event-meta">
                                                <span class="time"><i class="bi bi-clock"></i> 6:00 PM - 8:30 PM</span>
                                                <span class="location"><i class="bi bi-geo-alt"></i> Hybrid Event</span>
                                            </div>
                                            <h3 class="event-title">
                                                <a href="#">Machine Learning for Beginners Masterclass</a>
                                            </h3>
                                            <p class="event-description">Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Mauris viverra veniam sit amet lacus cursus, at tempor nunc dignissim.</p>
                                            <div class="event-footer">
                                                <div class="instructor">
                                                    <img src={personf3} alt="Instructor" class="instructor-avatar" />
                                                    <span>Prof. Michael Chen</span>
                                                </div>
                                                <div class="event-price">
                                                    <span class="price free">Free</span>
                                                </div>
                                            </div>
                                            <div class="event-actions">
                                                <a href="/" class="btn btn-primary">Register Now</a>
                                                <a href="/" class="btn btn-outline">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/* <!-- End Event Item --> */}

                            {/* <!-- Event Item --> */}
                            <article class="event-card aos-init" data-aos="fade-up" data-aos-delay="400">
                                <div class="row g-0">
                                    <div class="col-md-4">
                                        <div class="event-image">
                                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/education/events-5.webp" class="img-fluid" alt="Event Image" />
                                            <div class="date-badge">
                                                <span class="day">28</span>
                                                <span class="month">Dec</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="event-content">
                                            <div class="event-meta">
                                                <span class="time"><i class="bi bi-clock"></i> 10:00 AM - 12:00 PM</span>
                                                <span class="location"><i class="bi bi-geo-alt"></i> Online Platform</span>
                                            </div>
                                            <h3 class="event-title">
                                                <a href="#">Web Development Career Summit</a>
                                            </h3>
                                            <p class="event-description">Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet. Dignissim convallis aenean et tortor at risus viverra adipiscing at.</p>
                                            <div class="event-footer">
                                                <div class="instructor">
                                                    <img src={personf3} alt="Instructor" class="instructor-avatar" />
                                                    <span>Emily Rodriguez</span>
                                                </div>
                                                <div class="event-price">
                                                    <span class="price">$75</span>
                                                </div>
                                            </div>
                                            <div class="event-actions">
                                                <a href="/" class="btn btn-primary">Register Now</a>
                                                <a href="/" class="btn btn-outline">Learn More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                            {/* <!-- End Event Item --> */}

                            {/* <!-- Pagination --> */}
                            {/* <nav class="pagination-wrapper aos-init" data-aos="fade-up" data-aos-delay="500">
                                <ul class="pagination justify-content-center">
                                    <li class="page-item disabled">
                                        <a class="page-link" href="#"><i class="bi bi-chevron-left"></i></a>
                                    </li>
                                    <li class="page-item active">
                                        <a class="page-link" href="#">1</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">2</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">3</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#"><i class="bi bi-chevron-right"></i></a>
                                    </li>
                                </ul>
                            </nav> */}

                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default Events