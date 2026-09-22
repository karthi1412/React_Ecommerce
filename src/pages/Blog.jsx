import React from 'react'

function Blog() {
    return (
        <div>
            <section id="blog-hero" className="blog-hero section">

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">

                    <div className="blog-grid">

                        {/* <!-- Featured Post (Large) --> */}
                        <article className="blog-item featured aos-init aos-animate" data-aos="fade-up">
                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-3.webp" alt="Blog Image" className="img-fluid" />
                            <div className="blog-content">
                                <div className="post-meta">
                                    <span className="date">Apr. 14th, 2025</span>
                                    <span className="category">Technology</span>
                                </div>
                                <h2 className="post-title">
                                    <a href="blog-details.html" title="Lorem ipsum dolor sit amet, consectetur adipiscing elit">Lorem ipsum dolor sit amet, consectetur adipiscing elit</a>
                                </h2>
                            </div>
                        </article>
                        {/* <!-- End Featured Post --> */}

                        {/* <!-- Regular Posts --> */}
                        <article className="blog-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-portrait-1.webp" alt="Blog Image" className="img-fluid" />
                            <div className="blog-content">
                                <div className="post-meta">
                                    <span className="date">Apr. 14th, 2025</span>
                                    <span className="category">Security</span>
                                </div>
                                <h3 className="post-title">
                                    <a href="blog-details.html" title="Sed do eiusmod tempor incididunt ut labore">Sed do eiusmod tempor incididunt ut labore</a>
                                </h3>
                            </div>
                        </article>
                        {/* <!-- End Blog Item --> */}

                        <article className="blog-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-9.webp" alt="Blog Image" className="img-fluid" />
                            <div className="blog-content">
                                <div className="post-meta">
                                    <span className="date">Apr. 14th, 2025</span>
                                    <span className="category">Career</span>
                                </div>
                                <h3 className="post-title">
                                    <a href="blog-details.html" title="Ut enim ad minim veniam, quis nostrud exercitation">Ut enim ad minim veniam, quis nostrud exercitation</a>
                                </h3>
                            </div>
                        </article>
                        {/* <!-- End Blog Item --> */}

                        <article className="blog-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-7.webp" alt="Blog Image" className="img-fluid" />
                            <div className="blog-content">
                                <div className="post-meta">
                                    <span className="date">Apr. 14th, 2025</span>
                                    <span className="category">Cloud</span>
                                </div>
                                <h3 className="post-title">
                                    <a href="blog-details.html" title="Adipiscing elit, sed do eiusmod tempor incididunt">Adipiscing elit, sed do eiusmod tempor incididunt</a>
                                </h3>
                            </div>
                        </article>
                        {/* <!-- End Blog Item --> */}

                        <article className="blog-item aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
                            <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-6.webp" alt="Blog Image" className="img-fluid" />
                            <div className="blog-content">
                                <div className="post-meta">
                                    <span className="date">Apr. 14th, 2025</span>
                                    <span className="category">Programming</span>
                                </div>
                                <h3 className="post-title">
                                    <a href="blog-details.html" title="Excepteur sint occaecat cupidatat non proident">Excepteur sint occaecat cupidatat non proident</a>
                                </h3>
                            </div>
                        </article>
                        {/* <!-- End Blog Item --> */}

                    </div>

                </div>

            </section>
            <section id="blog-posts" className="blog-posts section">

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="row gy-4">

                        <div className="col-lg-4">
                            <article className="position-relative h-100">

                                <div className="post-img position-relative overflow-hidden">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-1.webp" className="img-fluid" alt=""/>
                                </div>

                                <div className="meta d-flex align-items-end">
                                    <span className="post-date"><span>12</span>December</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">John Doe</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                                    </div>
                                </div>

                                <div className="post-content d-flex flex-column">

                                    <h3 className="post-title">Dolorum optio tempore voluptas dignissimos</h3>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                                </div>

                            </article>
                        </div>
                        {/* <!-- End post list item --> */}

                        <div className="col-lg-4">
                            <article className="position-relative h-100">

                                <div className="post-img position-relative overflow-hidden">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-2.webp" className="img-fluid" alt=""/>
                                </div>

                                <div className="meta d-flex align-items-end">
                                    <span className="post-date"><span>19</span>March</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Julia Parker</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                                    </div>
                                </div>

                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Nisi magni odit consequatur autem nulla dolorem</h3>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>

                            </article>
                        </div>
                        {/* <!-- End post list item --> */}

                        <div className="col-lg-4">
                            <article className="position-relative h-100">

                                <div className="post-img position-relative overflow-hidden">
                                    <img src="https://bootstrapmade.com/content/demo/Learner/assets/img/blog/blog-post-3.webp" className="img-fluid" alt=""/>
                                </div>
                                <div className="meta d-flex align-items-end">
                                    <span className="post-date"><span>24</span>June</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Maria Doe</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                                    </div>
                                </div>

                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Possimus soluta ut id suscipit ea ut. In quo quia et soluta libero sit sint.</h3>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>

                            </article>
                        </div>
                        {/* <!-- End post list item --> */}

                        {/* <div className="col-lg-4">
                            <article className="position-relative h-100">

                                <div className="post-img position-relative overflow-hidden">
                                    <img src="assets/img/blog/blog-post-4.webp" className="img-fluid" alt=""/>
                                </div>
                                <div className="meta d-flex align-items-end">
                                    <span className="post-date"><span>05</span>August</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Maria Doe</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Sports</span>
                                    </div>
                                </div>

                                <div className="post-content d-flex flex-column">
                                    <h3 className="post-title">Non rem rerum nam cum quo minus explicabo eius exercitationem.</h3>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>
                                </div>

                            </article>
                        </div>

                        <div className="col-lg-4">
                            <article className="position-relative h-100">

                                <div className="post-img position-relative overflow-hidden">
                                    <img src="assets/img/blog/blog-post-5.webp" className="img-fluid" alt=""/>
                                </div>

                                <div className="meta d-flex align-items-end">
                                    <span className="post-date"><span>17</span>September</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">John Parker</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Politics</span>
                                    </div>
                                </div>

                                <div className="post-content d-flex flex-column">

                                    <h3 className="post-title">Accusamus quaerat aliquam qui debitis facilis consequatur</h3>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                                </div>

                            </article>
                        </div>

                        <div className="col-lg-4">
                            <article className="position-relative h-100">

                                <div className="post-img position-relative overflow-hidden">
                                    <img src="assets/img/blog/blog-post-6.webp" className="img-fluid" alt=""/>
                                </div>

                                <div className="meta d-flex align-items-end">
                                    <span className="post-date"><span>07</span>December</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-person"></i> <span className="ps-2">Julia White</span>
                                    </div>
                                    <span className="px-3 text-black-50">/</span>
                                    <div className="d-flex align-items-center">
                                        <i className="bi bi-folder2"></i> <span className="ps-2">Economics</span>
                                    </div>
                                </div>

                                <div className="post-content d-flex flex-column">

                                    <h3 className="post-title">Distinctio provident quibusdam numquam aperiam aut</h3>
                                    <a href="blog-details.html" className="readmore stretched-link"><span>Read More</span><i className="bi bi-arrow-right"></i></a>

                                </div>

                            </article>
                        </div> */}

                    </div>
                </div>

            </section>
        </div>
    )
}

export default Blog