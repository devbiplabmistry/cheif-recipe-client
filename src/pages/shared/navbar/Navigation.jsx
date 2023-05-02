/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";

const Navigation = () => {
    return (
        <Container className='justify-content-center'>
            <Navbar bg="" variant="white" className='d-flex' >
                <Nav className="mx-auto flex-grow-1 me-5">
                    <Nav.Link href="#home" className='fw-regular fs-5 text-danger'>Thatix</Nav.Link>
                    <Nav.Link href="#home" className='fw-regular fs-5 text-danger'>Home</Nav.Link>
                    <Nav.Link href="#features" className='fw-regular fs-5 text-danger'>Blog</Nav.Link>
                    <Nav.Link href="#pricing" className='fw-regular fs-5 text-danger'>About</Nav.Link>
                </Nav>
                <div className="button ms-5 ">
                    <Link><Button className='me-2' variant="danger">
                        <FaUser className='fs-6'></FaUser>
                    </Button></Link>
                    <Link><Button variant="" className='fs-4 text-success'>Login</Button></Link>
                </div>
            </Navbar>
        </Container>
    );
};

export default Navigation;