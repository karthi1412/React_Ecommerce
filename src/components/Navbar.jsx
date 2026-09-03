import React from 'react'

function Navbar() {
    return (
        <>
            <div className='navbar-section header sticky-top'>
                <div className='containe-fluid'>
                    <div className='row m-0'>
                        <div className='col'>
                            <nav className="navbar navbar-expand-lg">
                                <div className="container-fluid container-xl position-relative d-flex align-items-center">
                                    <a className="navbar-brand logo" href="/">Learner</a>
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <a className="nav-link active" aria-current="page" href="/">Home</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/about">About</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/courses">Courses</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/instructors">Instructors</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/pricing">Pricing</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/blog">Blog</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/events">Events</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="/contact">Contact Us</a>
                                            </li>

                                            <a className="btn-getstarted" href="">Enroll Now</a>


                                        </ul>
                                        {/* <form className="d-flex" role="search">
                                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                        <button className="btn btn-outline-success" type="submit">Search</button>
                                    </form> */}
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar