/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { BsGithub, BsGoogle } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='mt-5 d-flex'>
            <Form className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/register" className=' text-decoration-none fs-5 ms-2'>New in this website ? </Link>
            </Form>
            <div className="social-login">
                    <Button variant="outline-secondary" className='d-block mb-2'>
                        <BsGoogle className='fs-5 me-2'></BsGoogle>
                        Sign In With Google</Button>
                    <Button variant="outline-secondary" className='d-block mb-2'>
                        <BsGithub className='fs-5 me-2'></BsGithub>
                        Sign In With Github</Button>
                </div>
        </Container>


    );
};

export default Login;