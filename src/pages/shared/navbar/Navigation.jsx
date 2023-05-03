/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const Navigation = () => {
    return (
        <Container className='justify-content-center mt-5 mb-5'>
            <Navbar bg="" variant="white" className='d-flex' >
                <Nav className="mx-auto flex-grow-1 me-5">
                    <Link to="/main" className='fw-regular text-decoration-none me-2 fs-5 text-danger'>BurgerHat</ Link>
                    <Link to="/main" className='fw-regular text-decoration-none me-2 fs-5 text-danger'>Home</Link>
                    <Link to="/blog" className='fw-regular text-decoration-none me-2 fs-5 text-danger'>Blog</Link>
                    <Link to="/about" className='fw-regular text-decoration-none me-2 fs-5 text-danger'>About</Link>
                   
                </Nav>
                <div className="button ms-5 ">
                    <Link><Button className='me-2' variant="danger">
                        <FaUser className='fs-6'></FaUser>
                    </Button></Link>
                    <Link to="/login"><Button variant="" className='fs-4 text-success'>Login</Button></Link>
                </div>
            </Navbar>
        </Container>
    );
};

export default Navigation;