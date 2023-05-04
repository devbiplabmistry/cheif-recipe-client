/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/authProvide/AuthProvider';

const Login = () => {
    const Navigate = useNavigate()
    const [error,setError] =useState()
    const { createEmailAndPassword, googleSignIn,githubSignIn } = useContext(AuthContext)
    const handleEmailPassLogin = (event) => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        createEmailAndPassword(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                Navigate('/main')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            });
    }
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then((result) => {
                console.log(result);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                setError(errorMessage)
            });
    }

    const handleGithub = () =>{
        githubSignIn()
        .then((result) => {
            const user = result.user;  
            console.log(user);
          }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            setError(errorMessage)
          });
    }





    return (
        <Container className='mt-5 d-flex'>
            <Form onSubmit={handleEmailPassLogin} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/register" className=' text-decoration-none fs-5 ms-2'>New in this website ? </Link>
                <div className="error-display">
                    <p className='text-danger'>{error}</p>
                </div>
            </Form>
            <div className="social-login">
                <Button onClick={handleGoogleSignIn} variant="outline-secondary" className='d-block mb-2'>
                    <BsGoogle className='fs-5 me-2'></BsGoogle>
                    Sign In With Google</Button>
                <Button onClick={handleGithub} variant="outline-secondary" className='d-block mb-2'>
                    <BsGithub className='fs-5 me-2'></BsGithub>
                    Sign In With Github</Button>
            </div>

        </Container>


    );
    };

    export default Login;