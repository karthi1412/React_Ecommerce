import React from 'react'
import bannerone from "../assets/images/bannerone.webp";
import studentsnine from "../assets/images/studentsnine.webp";
import campusfour from "../assets/images/campusfour.webp";
import studentsseven from "../assets/images/studentsseven.webp";
import educationfive from "../assets/images/educationfive.webp";
import activitythree from "../assets/images/activitythree.webp";
import teachersix from "../assets/images/teachersix.webp";
import personf3 from "../assets/images/personf3.webp";
import teacher2 from "../assets/images/teacher2.webp";
import teacher7 from "../assets/images/teacher7.webp";
import teacher4 from "../assets/images/teacher4.webp";
import teacher9 from "../assets/images/teacher9.webp";


function Home() {
    return (

        <div >
            <section className='section-one'>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <section >
                                <div id="courses-hero" className='section-one courses-hero section light-background'>
                                    <div className="hero-content">
                                        <div className="container">
                                            <div className="row align-items-center">

                                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                                    <div className="hero-text">
                                                        <h1>Transform Your Future with Expert-Led Online Courses</h1>
                                                        <p>Discover thousands of high-quality courses designed by industry professionals. Learn at your own pace, gain in-demand skills, and advance your career from anywhere in the world.</p>

                                                        <div className="hero-stats">
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="50000" data-purecounter-duration="0">50000</span>
                                                                <span className="label">Students Enrolled</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="1200" data-purecounter-duration="0">1200</span>
                                                                <span className="label">Expert Courses</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="98" data-purecounter-duration="0">98</span>
                                                                <span className="label">Success Rate %</span>
                                                            </div>
                                                        </div>

                                                        <div className="hero-buttons">
                                                            <a href="/courses" className="btn btn-primary">Browse Courses</a>
                                                            <a href="/about" className="btn btn-outline">Learn More</a>
                                                        </div>

                                                        <div className="hero-features">
                                                            <div className="feature">
                                                                <i className="bi bi-shield-check"></i>
                                                                <span>Certified Programs</span>
                                                            </div>
                                                            <div className="feature">
                                                                <i className="bi bi-clock"></i>
                                                                <span>Lifetime Access</span>
                                                            </div>
                                                            <div className="feature">
                                                                <i className="bi bi-people"></i>
                                                                <span>Expert Instructors</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                                    <div className="hero-image">
                                                        <div className="main-image">
                                                            <img src={bannerone} alt="Online Learning" className="img-fluid" />
                                                        </div>

                                                        <div className="floating-cards">
                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-code-slash"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>Web Development</h6>
                                                                    <span>2,450 Students</span>
                                                                </div>
                                                            </div>

                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-palette"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>UI/UX Design</h6>
                                                                    <span>1,890 Students</span>
                                                                </div>
                                                            </div>

                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-graph-up"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>Digital Marketing</h6>
                                                                    <span>3,200 Students</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="carousel-item">
                            <section >
                                <div id="courses-hero" className='section-one courses-hero section light-background'>
                                    <div className="hero-content">
                                        <div className="container">
                                            <div className="row align-items-center">

                                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                                    <div className="hero-text">
                                                        <h1>Transform Your Future with Expert-Led Online Courses</h1>
                                                        <p>Discover thousands of high-quality courses designed by industry professionals. Learn at your own pace, gain in-demand skills, and advance your career from anywhere in the world.</p>

                                                        <div className="hero-stats">
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="50000" data-purecounter-duration="0">50000</span>
                                                                <span className="label">Students Enrolled</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="1200" data-purecounter-duration="0">1200</span>
                                                                <span className="label">Expert Courses</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="98" data-purecounter-duration="0">98</span>
                                                                <span className="label">Success Rate %</span>
                                                            </div>
                                                        </div>

                                                        <div className="hero-buttons">
                                                            <a href="/courses" className="btn btn-primary">Browse Courses</a>
                                                            <a href="/about" className="btn btn-outline">Learn More</a>
                                                        </div>

                                                        <div className="hero-features">
                                                            <div className="feature">
                                                                <i className="bi bi-shield-check"></i>
                                                                <span>Certified Programs</span>
                                                            </div>
                                                            <div className="feature">
                                                                <i className="bi bi-clock"></i>
                                                                <span>Lifetime Access</span>
                                                            </div>
                                                            <div className="feature">
                                                                <i className="bi bi-people"></i>
                                                                <span>Expert Instructors</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                                    <div className="hero-image">
                                                        <div className="main-image">
                                                            <img src={bannerone} alt="Online Learning" className="img-fluid" />
                                                        </div>

                                                        <div className="floating-cards">
                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-code-slash"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>Web Development</h6>
                                                                    <span>2,450 Students</span>
                                                                </div>
                                                            </div>

                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-palette"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>UI/UX Design</h6>
                                                                    <span>1,890 Students</span>
                                                                </div>
                                                            </div>

                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-graph-up"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>Digital Marketing</h6>
                                                                    <span>3,200 Students</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <div className="carousel-item">
                            <section >
                                <div id="courses-hero" className='section-one courses-hero section light-background'>
                                    <div className="hero-content">
                                        <div className="container">
                                            <div className="row align-items-center">

                                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                                    <div className="hero-text">
                                                        <h1>Transform Your Future with Expert-Led Online Courses</h1>
                                                        <p>Discover thousands of high-quality courses designed by industry professionals. Learn at your own pace, gain in-demand skills, and advance your career from anywhere in the world.</p>

                                                        <div className="hero-stats">
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="50000" data-purecounter-duration="0">50000</span>
                                                                <span className="label">Students Enrolled</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="1200" data-purecounter-duration="0">1200</span>
                                                                <span className="label">Expert Courses</span>
                                                            </div>
                                                            <div className="stat-item">
                                                                <span className="number purecounter" data-purecounter-start="0" data-purecounter-end="98" data-purecounter-duration="0">98</span>
                                                                <span className="label">Success Rate %</span>
                                                            </div>
                                                        </div>

                                                        <div className="hero-buttons">
                                                            <a href="/courses" className="btn btn-primary">Browse Courses</a>
                                                            <a href="/about" className="btn btn-outline">Learn More</a>
                                                        </div>

                                                        <div className="hero-features">
                                                            <div className="feature">
                                                                <i className="bi bi-shield-check"></i>
                                                                <span>Certified Programs</span>
                                                            </div>
                                                            <div className="feature">
                                                                <i className="bi bi-clock"></i>
                                                                <span>Lifetime Access</span>
                                                            </div>
                                                            <div className="feature">
                                                                <i className="bi bi-people"></i>
                                                                <span>Expert Instructors</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                                    <div className="hero-image">
                                                        <div className="main-image">
                                                            <img src={bannerone} alt="Online Learning" className="img-fluid" />
                                                        </div>

                                                        <div className="floating-cards">
                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-code-slash"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>Web Development</h6>
                                                                    <span>2,450 Students</span>
                                                                </div>
                                                            </div>

                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-palette"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>UI/UX Design</h6>
                                                                    <span>1,890 Students</span>
                                                                </div>
                                                            </div>

                                                            <div className="course-card aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                                                                <div className="card-icon">
                                                                    <i className="bi bi-graph-up"></i>
                                                                </div>
                                                                <div className="card-content">
                                                                    <h6>Digital Marketing</h6>
                                                                    <span>3,200 Students</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="/carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="/carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section id="featured-courses" className="featured-courses section section-two">

                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Featured Courses</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={studentsnine} alt="Course" className="img-fluid" />
                                    <div className="badge featured">Featured</div>
                                    <div className="price-badge">$149</div>
                                </div>
                                <div className="course-content">
                                    <div className="course-meta">
                                        <span className="level">Beginner</span>
                                        <span className="duration">8 Weeks</span>
                                    </div>
                                    <h3><a href="/">Digital Marketing Fundamentals</a></h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
                                    <div className="instructor">
                                        <img src={personf3} alt="Instructor" className="instructor-img" />
                                        <div className="instructor-info">
                                            <h6>Sarah Johnson</h6>
                                            <span>Marketing Expert</span>
                                        </div>
                                    </div>
                                    <div className="course-stats">
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                            <span>(4.5)</span>
                                        </div>
                                        <div className="students">
                                            <i className="bi bi-people-fill"></i>
                                            <span>342 students</span>
                                        </div>
                                    </div>
                                    <a href="/" className="btn-course" data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={campusfour} alt="Course" className="img-fluid" />
                                    <div className="badge new">New</div>
                                    <div className="price-badge">$89</div>
                                </div>
                                <div className="course-content">
                                    <div className="course-meta">
                                        <span className="level">Intermediate</span>
                                        <span className="duration">6 Weeks</span>
                                    </div>
                                    <h3><a href="/">Web Development with JavaScript</a></h3>
                                    <p>Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit.</p>
                                    <div className="instructor">
                                        <img src={personf3} alt="Instructor" className="instructor-img" />
                                        <div className="instructor-info">
                                            <h6>Michael Chen</h6>
                                            <span>Full Stack Developer</span>
                                        </div>
                                    </div>
                                    <div className="course-stats">
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span>(5.0)</span>
                                        </div>
                                        <div className="students">
                                            <i className="bi bi-people-fill"></i>
                                            <span>156 students</span>
                                        </div>
                                    </div>
                                    <a href="/" className="btn-course" data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={studentsseven} alt="Course" className="img-fluid" />
                                    <div className="badge certificate">Certificate</div>
                                    <div className="price-badge">Free</div>
                                </div>
                                <div className="course-content">
                                    <div className="course-meta">
                                        <span className="level">Beginner</span>
                                        <span className="duration">4 Weeks</span>
                                    </div>
                                    <h3><a href="/">Introduction to Data Science</a></h3>
                                    <p>Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum sed ut perspiciatis unde omnis.</p>
                                    <div className="instructor">
                                        <img src={personf3} alt="Instructor" className="instructor-img" />
                                        <div className="instructor-info">
                                            <h6>Dr. Emily Watson</h6>
                                            <span>Data Scientist</span>
                                        </div>
                                    </div>
                                    <div className="course-stats">
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>
                                            <span>(4.2)</span>
                                        </div>
                                        <div className="students">
                                            <i className="bi bi-people-fill"></i>
                                            <span>789 students</span>
                                        </div>
                                    </div>
                                    <a href="/" className="btn-course" data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={educationfive} alt="Course" className="img-fluid" />
                                    <div className="badge popular">Popular</div>
                                    <div className="price-badge">$199</div>
                                </div>
                                <div className="course-content">
                                    <div className="course-meta">
                                        <span className="level">Advanced</span>
                                        <span className="duration">12 Weeks</span>
                                    </div>
                                    <h3><a href="/">Business Strategy &amp; Leadership</a></h3>
                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo.</p>
                                    <div className="instructor">
                                        <img src={personf3} alt="Instructor" className="instructor-img" />
                                        <div className="instructor-info">
                                            <h6>Robert Anderson</h6>
                                            <span>Business Consultant</span>
                                        </div>
                                    </div>
                                    <div className="course-stats">
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                            <span>(4.7)</span>
                                        </div>
                                        <div className="students">
                                            <i className="bi bi-people-fill"></i>
                                            <span>234 students</span>
                                        </div>
                                    </div>
                                    <a href="/" className="btn-course" data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={activitythree} alt="Course" className="img-fluid" />
                                    <div className="badge certificate">Certificate</div>
                                    <div className="price-badge">$129</div>
                                </div>
                                <div className="course-content">
                                    <div className="course-meta">
                                        <span className="level">Intermediate</span>
                                        <span className="duration">10 Weeks</span>
                                    </div>
                                    <h3><a href="/">Graphic Design Masterclass</a></h3>
                                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
                                    <div className="instructor">
                                        <img src={personf3} alt="Instructor" className="instructor-img" />
                                        <div className="instructor-info">
                                            <h6>Lisa Martinez</h6>
                                            <span>Creative Director</span>
                                        </div>
                                    </div>
                                    <div className="course-stats">
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>
                                            <span>(4.3)</span>
                                        </div>
                                        <div className="students">
                                            <i className="bi bi-people-fill"></i>
                                            <span>467 students</span>
                                        </div>
                                    </div>
                                    <a href="/" className="btn-course" data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll Now</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <div className="course-card">
                                <div className="course-image">
                                    <img src={teachersix} alt="Course" className="img-fluid" />
                                    <div className="badge new">New</div>
                                    <div className="price-badge">$99</div>
                                </div>
                                <div className="course-content">
                                    <div className="course-meta">
                                        <span className="level">Beginner</span>
                                        <span className="duration">5 Weeks</span>
                                    </div>
                                    <h3><a href="/">Photography for Beginners</a></h3>
                                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas.</p>
                                    <div className="instructor">
                                        <img src={personf3} alt="Instructor" className="instructor-img" />
                                        <div className="instructor-info">
                                            <h6>James Wilson</h6>
                                            <span>Professional Photographer</span>
                                        </div>
                                    </div>
                                    <div className="course-stats">
                                        <div className="rating">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                            <span>(4.6)</span>
                                        </div>
                                        <div className="students">
                                            <i className="bi bi-people-fill"></i>
                                            <span>298 students</span>
                                        </div>
                                    </div>
                                    <a href="/" className="btn-course" data-bs-toggle="modal" data-bs-target="#exampleModal">Enroll Now</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="more-courses text-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
                        <a href="/courses" className="btn-more">View All Courses</a>
                    </div>

                </div>



            </section>
            <section id="course-categories" className="course-categories section section-three">

                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Course Categories</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div className="row g-4">
                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <a href="/courses" className="category-card category-tech">
                                <div className="category-icon">
                                    <i className="bi bi-laptop"></i>
                                </div>
                                <h5>Computer Science</h5>
                                <span className="course-count">24 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
                            <a href="/courses" className="category-card category-business">
                                <div className="category-icon">
                                    <i className="bi bi-briefcase"></i>
                                </div>
                                <h5>Business</h5>
                                <span className="course-count">18 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <a href="/courses" className="category-card category-design">
                                <div className="category-icon">
                                    <i className="bi bi-palette"></i>
                                </div>
                                <h5>Design</h5>
                                <span className="course-count">15 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="250">
                            <a href="/courses" className="category-card category-health">
                                <div className="category-icon">
                                    <i className="bi bi-heart-pulse"></i>
                                </div>
                                <h5>Health &amp; Medical</h5>
                                <span className="course-count">12 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <a href="/courses" className="category-card category-language">
                                <div className="category-icon">
                                    <i className="bi bi-globe"></i>
                                </div>
                                <h5>Languages</h5>
                                <span className="course-count">21 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">
                            <a href="/courses" className="category-card category-science">
                                <div className="category-icon">
                                    <i className="bi bi-diagram-3"></i>
                                </div>
                                <h5>Science</h5>
                                <span className="course-count">16 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <a href="/courses" className="category-card category-marketing">
                                <div className="category-icon">
                                    <i className="bi bi-megaphone"></i>
                                </div>
                                <h5>Marketing</h5>
                                <span className="course-count">19 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="150">
                            <a href="/courses" className="category-card category-finance">
                                <div className="category-icon">
                                    <i className="bi bi-graph-up-arrow"></i>
                                </div>
                                <h5>Finance</h5>
                                <span className="course-count">14 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <a href="/courses" className="category-card category-photography">
                                <div className="category-icon">
                                    <i className="bi bi-camera"></i>
                                </div>
                                <h5>Photography</h5>
                                <span className="course-count">11 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="250">
                            <a href="/courses" className="category-card category-music">
                                <div className="category-icon">
                                    <i className="bi bi-music-note-beamed"></i>
                                </div>
                                <h5>Music</h5>
                                <span className="course-count">13 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <a href="/courses" className="category-card category-engineering">
                                <div className="category-icon">
                                    <i className="bi bi-gear"></i>
                                </div>
                                <h5>Engineering</h5>
                                <span className="course-count">22 Courses</span>
                            </a>
                        </div>

                        <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="350">
                            <a href="/courses" className="category-card category-law">
                                <div className="category-icon">
                                    <i className="bi bi-journal-text"></i>
                                </div>
                                <h5>Law &amp; Legal</h5>
                                <span className="course-count">9 Courses</span>
                            </a>
                        </div>

                    </div>

                </div>

            </section>
            <section id="featured-instructors" className="featured-instructors section section-four">

                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Featured Instructors</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="instructor-card">
                                <div className="instructor-image">
                                    <img src={teacher2} className="img-fluid" alt="" />
                                    <div className="overlay-content">
                                        <div className="rating-stars">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                            <span>4.8</span>
                                        </div>
                                        <div className="course-count">
                                            <i className="bi bi-play-circle"></i>
                                            <span>18 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="instructor-info">
                                    <h5>Sarah Johnson</h5>
                                    <p className="specialty">Web Development</p>
                                    <p className="description">Nulla facilisi morbi tempus iaculis urna id volutpat lacus laoreet non curabitur gravida.</p>
                                    <div className="stats-grid">
                                        <div className="stat">
                                            <span className="number">2.1k</span>
                                            <span className="label">Students</span>
                                        </div>
                                        <div className="stat">
                                            <span className="number">4.8</span>
                                            <span className="label">Rating</span>
                                        </div>
                                    </div>
                                    <div className="action-buttons">
                                        <a href="/" className="btn-view">View Profile</a>
                                        <div className="social-links">
                                            <a href="/"><i className="bi bi-linkedin"></i></a>
                                            <a href="/"><i className="bi bi-twitter"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="250">
                            <div className="instructor-card">
                                <div className="instructor-image">
                                    <img src={teacher7} className="img-fluid" alt="" />
                                    <div className="overlay-content">
                                        <div className="rating-stars">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <span>4.9</span>
                                        </div>
                                        <div className="course-count">
                                            <i className="bi bi-play-circle"></i>
                                            <span>24 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="instructor-info">
                                    <h5>Michael Chen</h5>
                                    <p className="specialty">Data Science</p>
                                    <p className="description">Suspendisse potenti nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi.</p>
                                    <div className="stats-grid">
                                        <div className="stat">
                                            <span className="number">3.5k</span>
                                            <span className="label">Students</span>
                                        </div>
                                        <div className="stat">
                                            <span className="number">4.9</span>
                                            <span className="label">Rating</span>
                                        </div>
                                    </div>
                                    <div className="action-buttons">
                                        <a href="/" className="btn-view">View Profile</a>
                                        <div className="social-links">
                                            <a href="/"><i className="bi bi-github"></i></a>
                                            <a href="/"><i className="bi bi-linkedin"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="instructor-card">
                                <div className="instructor-image">
                                    <img src={teacher4} className="img-fluid" alt="" />
                                    <div className="overlay-content">
                                        <div className="rating-stars">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star"></i>
                                            <span>4.6</span>
                                        </div>
                                        <div className="course-count">
                                            <i className="bi bi-play-circle"></i>
                                            <span>15 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="instructor-info">
                                    <h5>Amanda Rodriguez</h5>
                                    <p className="specialty">UX Design</p>
                                    <p className="description">Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis.</p>
                                    <div className="stats-grid">
                                        <div className="stat">
                                            <span className="number">1.8k</span>
                                            <span className="label">Students</span>
                                        </div>
                                        <div className="stat">
                                            <span className="number">4.6</span>
                                            <span className="label">Rating</span>
                                        </div>
                                    </div>
                                    <div className="action-buttons">
                                        <a href="/" className="btn-view">View Profile</a>
                                        <div className="social-links">
                                            <a href="/"><i className="bi bi-dribbble"></i></a>
                                            <a href="/"><i className="bi bi-behance"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="350">
                            <div className="instructor-card">
                                <div className="instructor-image">
                                    <img src={teacher9} className="img-fluid" alt="" />
                                    <div className="overlay-content">
                                        <div className="rating-stars">
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-fill"></i>
                                            <i className="bi bi-star-half"></i>
                                            <span>4.7</span>
                                        </div>
                                        <div className="course-count">
                                            <i className="bi bi-play-circle"></i>
                                            <span>21 Courses</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="instructor-info">
                                    <h5>David Thompson</h5>
                                    <p className="specialty">Digital Marketing</p>
                                    <p className="description">Vivamus magna justo lacinia eget consectetur sed convallis at tellus curabitur non nulla.</p>
                                    <div className="stats-grid">
                                        <div className="stat">
                                            <span className="number">2.9k</span>
                                            <span className="label">Students</span>
                                        </div>
                                        <div className="stat">
                                            <span className="number">4.7</span>
                                            <span className="label">Rating</span>
                                        </div>
                                    </div>
                                    <div className="action-buttons">
                                        <a href="/" className="btn-view">View Profile</a>
                                        <div className="social-links">
                                            <a href="/"><i className="bi bi-instagram"></i></a>
                                            <a href="/"><i className="bi bi-facebook"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>
            <section id="testimonials" className="testimonials section section-five">
                {/* <!-- Section Title --> */}
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Testimonials</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                {/* <!-- End Section Title --> */}

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-12">
                            <div className="critic-reviews aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="critic-review">
                                            <div className="review-quote">"</div>
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p>Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.</p>
                                            <div className="critic-info">
                                                <div className="critic-name">The New York Times</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="critic-review">
                                            <div className="review-quote">"</div>
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-half"></i>
                                            </div>
                                            <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla quis lorem ut libero malesuada feugiat.</p>
                                            <div className="critic-info">
                                                <div className="critic-name">Washington Post</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-4">
                                        <div className="critic-review">
                                            <div className="review-quote">"</div>
                                            <div className="stars">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p>Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus suscipit tortor eget felis porttitor volutpat.</p>
                                            <div className="critic-info">
                                                <div className="critic-name">The Guardian</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="recent-blog-posts" className="recent-blog-posts section">
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <h2>Recent Blog Posts</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <div className="card">
                                <div className="card-top d-flex align-items-center">
                                    <img src={personf3} alt="Author" className="rounded-circle me-2" />
                                    <span className="author-name">By Andy glamer</span>
                                    <span className="ms-auto likes"><i className="bi bi-heart"></i> 65</span>
                                </div>
                                <div className="card-img-wrapper">
                                    <img src={studentsseven} alt="Post Image" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="blog-details.html">Sed ut perspiciatis unde omnis iste natus</a></h5>
                                    <p className="card-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <div className="card position-relative">
                                <div className="card-top d-flex align-items-center">
                                    <img src={personf3} alt="Author" className="rounded-circle me-2" />
                                    <span className="author-name">By Den viliamson</span>
                                    <span className="ms-auto likes"><i className="bi bi-heart"></i> 35</span>
                                </div>
                                <div className="card-img-wrapper">
                                    <img src={studentsnine} alt="Post Image" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="blog-details.html">Nemo enim ipsam voluptatem quia voluptas sit</a></h5>
                                    <p className="card-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos...</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <div className="card">
                                <div className="card-top d-flex align-items-center">
                                    <img src={personf3} alt="Author" className="rounded-circle me-2" />
                                    <span className="author-name">By Jones robbert</span>
                                    <span className="ms-auto likes"><i className="bi bi-heart"></i> 58</span>
                                </div>
                                <div className="card-img-wrapper">
                                    <img src={activitythree} alt="Post Image" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title"><a href="blog-details.html">Ut enim ad minima veniam, quis nostrum exercitationem</a></h5>
                                    <p className="card-text">Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem...</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </section>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <section id="enroll" className="enroll section p-0">
                                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                                    <div className="row">
                                        <div className='d-flex justify-content-end'>
                                            <div>
                                                <button type="button" className="btn-close text-end" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="enrollment-form-wrapper">

                                                <div className="enrollment-header text-center mb-5 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                                                    <h2>Enroll in Your Dream Course</h2>
                                                    <p>Take the next step in your educational journey. Complete the form below to secure your spot in our comprehensive online learning program.</p>
                                                </div>

                                                <form className="enrollment-form aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">

                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="firstName" className="form-label">First Name *</label>
                                                                <input type="text" id="firstName" name="firstName" className="form-control" required="" autocomplete="given-name" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="email" className="form-label">Email Address *</label>
                                                                <input type="email" id="email" name="email" className="form-control" required="" autocomplete="email" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="phone" className="form-label">Phone Number</label>
                                                                <input type="tel" id="phone" name="phone" className="form-control" autocomplete="tel" />
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="course" className="form-label">Select Course *</label>
                                                                <select id="course" name="course" className="form-select" required="">
                                                                    <option value="">Choose a course...</option>
                                                                    <option value="web-development">Full Stack Web Development</option>
                                                                    <option value="data-science">Data Science &amp; Analytics</option>
                                                                    <option value="digital-marketing">Digital Marketing Mastery</option>
                                                                    <option value="ui-ux-design">UI/UX Design Fundamentals</option>
                                                                    <option value="cybersecurity">Cybersecurity Essentials</option>
                                                                    <option value="mobile-development">Mobile App Development</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row mb-4">
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="education" className="form-label">Education Level</label>
                                                                <select id="education" name="education" className="form-select">
                                                                    <option value="">Select your education level...</option>
                                                                    <option value="high-school">High School</option>
                                                                    <option value="associate">Associate Degree</option>
                                                                    <option value="bachelor">Bachelor's Degree</option>
                                                                    <option value="master">Master's Degree</option>
                                                                    <option value="doctorate">Doctorate</option>
                                                                    <option value="other">Other</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="form-group">
                                                                <label for="experience" className="form-label">Experience Level</label>
                                                                <select id="experience" name="experience" className="form-select">
                                                                    <option value="">Select your experience...</option>
                                                                    <option value="beginner">Beginner</option>
                                                                    <option value="intermediate">Intermediate</option>
                                                                    <option value="advanced">Advanced</option>
                                                                    <option value="expert">Expert</option>
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="row mb-4">
                                                        <div className="col-12">
                                                            <div className="form-group">
                                                                <label for="motivation" className="form-label">What motivates you to take this course?</label>
                                                                <textarea id="motivation" name="motivation" className="form-control" rows="4" placeholder="Share your goals and what you hope to achieve..."></textarea>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="row">
                                                        <div className="col-12 text-center">
                                                            <button type="submit" className="btn btn-enroll">
                                                                <i className="bi bi-check-circle me-2"></i>
                                                                Enroll Now
                                                            </button>
                                                            <p className="enrollment-note mt-3">
                                                                <i className="bi bi-shield-check"></i>
                                                                Your information is secure and will never be shared with third parties
                                                            </p>
                                                        </div>
                                                    </div>

                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Home