/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsGithub, BsGoogle } from "react-icons/bs";
import { AuthContext } from '../../shared/authProvide/AuthProvider';


const Register = () => {
    const {register} =useContext(AuthContext)
    const handleRegister =(event) =>{
        event.preventDefault()
        const form =event.target;
        const email =event.target.email.value;
        const password =event.target.password.value;
        register(email,password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user created sucessfully',user);
            form.reset()
        
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
         
          });

    }
    return (
        <Container className='mt-5 d-flex'>
            <Form onSubmit={handleRegister} className='w-50 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' required placeholder="Enter Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" required placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo'  placeholder="Photo URL" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                <Link to="/login" className=' text-decoration-none fs-5 ms-2'>Already Have an Account ? </Link>
            </Form>
        </Container>
    );
};

export default Register;