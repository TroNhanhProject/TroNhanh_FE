import React from 'react';
import './HomePage_css.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import TestimonialsCarousel from '../HomePage/testimonials/testimonials';
import BlogSection from './blogs/BlogSection';

export default function HomePage() {
    return (
        <div className="homepage-container">
            <div className="homepage-image-wrapper">
                <img
                    src="HomepageImage.jpg"
                    alt="Couple on couch"
                    className="homepage-image"
                />
                <div className="overlay-box">
                    <h1 className="overlay-title">Find your perfect rental</h1>
                    <p className="overlay-description">
                        Browse trusted accommodations with ease – apartments, homes, and more, all in one place.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="search-box container">
                    <div className="row align-items-center">
                        <div className="col-md-3 mb-2 mb-md-0">
                            <select className="form-select">
                                <option>Select district</option>
                                <option>Liên Chiểu</option>
                                <option>Hải Châu</option>
                                <option>Thanh Khê</option>
                                <option>Cẩm Lệ</option>
                                <option>Sơn Trà</option>
                                <option>Ngũ Hành Sơn</option>
                            </select>
                        </div>
                        <div className="col-md-3 mb-2 mb-md-0">
                            <input type="text" className="form-control" placeholder="Name street" />
                        </div>
                        <div className="col-md-4 mb-2 mb-md-0">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nearby facilities (mart, convenience stores, etc.)"
                            />
                        </div>
                        <div className="col-md-2">
                            <button className="btn btn-dark w-100">Search</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Info Section */}
            <div className="info-section container-fluid px-0 ">
                <div className="images row align-items-center justify-content-center ">
                    <div className="col-md-5 image-grid">
                        <img className='top-left' src="DaNang1.jpg" alt="img1" />
                        <img src="DaNang2.png" alt="img2" />
                        <img className='bottom-left' src="DaNang3.jpg" alt="img3" />
                        <img src="Danang4.jpg" alt="img4" />
                    </div>
                    <div className="text col-md-5 p-4 bg-light d-flex flex-column justify-content-center">
                        <h2>The choice is flexible</h2>
                        <p>
                            We believe in a world where finding a home is just a click away. Whether you're selling your home,
                            travelling for work or moving to a new city. Just bring your bags, and we'll handle the rest.
                        </p>
                    </div>
                </div>
            </div>

            <div className="discover-section d-flex justify-content-center align-items-center mt-5 flex-column">
                <h1 className='text-center'>
                    Discover what make our platform stand out
                </h1>
                <p>
                    Easily browse listings, book securely, manage your stays, and explore nearby amenities—all in one platform.
                </p>
            </div>
            <div className="mt-3 d-flex justify-content-between align-items-stretch service_box_container mx-5">
                <div className="service_box mx-2">
                    <img src="calendar.png" className="icon_image" />
                    <h4 className='text'>Flexible living</h4>
                    <p className='text'>Stay as long or as little as you need with month-to-month contracts</p>
                </div>

                <div className="service_box mx-2">
                    <img src="sofa.png" className="icon_image" />
                    <h4 className='text'>Move-in ready</h4>
                    <p className='text'>Ready to move in with everything you need</p>
                </div>

                <div className="service_box mx-2">
                    <img src="wi-fi.png" className="icon_image" />
                    <h4 className='text'>High-speed Wi-Fi</h4>
                    <p className='text'>Best in class internet speeds suitable for working from home</p>
                </div>

                <div className="service_box mx-2">
                    <img src="chat.png" className="icon_image" />
                    <h4 className='text'>24/7 support</h4>
                    <p className='text'>On hand team for any issues you have</p>
                </div>
            </div>

            {/* Comment */}
            <TestimonialsCarousel />

            {/* Blog Section */}
            <BlogSection />

            {/* Useful Links */}

            <div className="container py-5">
                <h5 className="fw-bold">Useful links</h5>
                <div className="row">
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li><a href="#">West London Apartments →</a></li>
                            <li><a href="#">Riverside Apartments →</a></li>
                            <li><a href="#">Apartments in Finance Sector City of London →</a></li>
                            <li><a href="#">Apartments in Soho, Fitrovia →</a></li>
                            <li><a href="#">East London Apartments →</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul className="list-unstyled">
                            <li><a href="#">Suitable for Families or Groups →</a></li>
                            <li><a href="#">Apartments with Parking →</a></li>
                            <li><a href="#">Apartments with Elevator →</a></li>
                            <li><a href="#">Apartments suitable for physical disabilities →</a></li>
                        </ul>
                    </div>
                </div>
            </div>


        </div>
    );
}
