/* eslint-disable no-unused-vars */
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './MainLayout.css'
import logo from '../../assets/logo.jpg'
import Navbar from '../../pages/shared/navbar/Navigation';
import banner1 from '../../assets/banner-1.jpg'
import banner2 from '../../assets/banner-2.jpg'
import banner3 from '../../assets/banner3.jpg'
import banner4 from '../../assets/banner-4.jpg'
import Footer from '../../pages/shared/footer/Footer';

const Main = () => {
    return (
        <Container>
            <div className="logo d-flex">
                <img src={logo} alt="logo" />
                <div className="logo-content">
                    <h2>Thatix</h2>
                    <p>COOKING RECIPEE</p>
                </div>
            </div>
            <div className="navbar mx-auto ">
                <Navbar></Navbar>
            </div>
            <div className="banner-wrapper">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Ultimate Cheese BurgerFirst slide label</h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner2}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Healthy Chicken Burger</h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner3}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3> The Quesadillas </h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={banner4}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>
                                Fried Babycorn Cigars</h3>
                            <p>A handful of simple ingredients typify the fresh, vibrant flavors of Greek cooking.Nulla vitae elit libero, a pharetra augue mollis interdum </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="footer mt-5">
                <Footer></Footer>
            </div>

        </Container>
    );
};

export default Main;