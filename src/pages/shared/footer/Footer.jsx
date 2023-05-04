/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'
import { Link } from 'react-router-dom';
import { ImLocation } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
    return (
        <Container>
            <div className="footer-wrapper d-flex sm:mb-5 justify-content-between">
                <div className="left-footer">
                    <h3 className='text-white fw-normal fs-3'>Subscribe</h3>
                    <p className='text-white'>Register and get notified about all the news <br /> & updates before it gets too late.</p>
                    <form>
                        <input type="text" placeholder='Enter your Email Address' />
                        <button type='submit' className='bg-warning text-white border-0 fs-5 me-2'>Sign Up</button>
                    </form>
                </div>
                <div className="explore">
                    <h3 className='text-white fw-normal fs-3'>Explore</h3>
                    <Link className='d-block text-white fw-regular fs-5 text-decoration-none'>Home</Link>
                    <Link className='d-block text-white fw-regular fs-5 text-decoration-none'>Browse Recepies</Link>
                    <Link className='d-block text-white fw-regular fs-5 text-decoration-none'>Our Chefs</Link>
                    <Link className='d-block text-white fw-regular fs-5 text-decoration-none'>Blog</Link>
                    <Link className='d-block text-white fw-regular fs-5 text-decoration-none'>Contact</Link>
                </div>
                <div className="contact">
                    <h3 className='text-white fw-normal fs-3'>Contact</h3>
                    <p className='fw-normal fs-5 text-white'>
                        <ImLocation className='text-warning fs-5 me-2' ></ImLocation>
                   
                        787 Mark View Street,
                        New Town, india</p>
                    <p className='fw-normal fs-5 text-white'>
                  <MdEmail className='text-warning fs-5 me-2'></MdEmail>
                        needhelp@thatix.com</p>
                    <p className='fw-normal fs-5 text-white'>
                        <FaPhoneAlt className='text-warning fs-5 me-2'></FaPhoneAlt>
                        666 888 0000</p>
                </div>
            </div>
        </Container>
    );
};

export default Footer;