/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import { AuthContext } from '../authProvide/AuthProvider';


const Navigation = () => {
    const { user ,signOut,setUser} = useContext(AuthContext)
    console.log(setUser);
    const handleLogOut = () => {
        signOut()
        .then(() => {
            console.log('sign out sucessfully');
          return setUser(null);
          })
          .catch((error) => {
            console.log(error.message);    
          });

    }
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
                    {user ? <>
                        <Link><Button className='me-2' variant="danger">
                            <FaUser className='fs-6'></FaUser>
                        </Button></Link>
                        <Link onClick={handleLogOut}><button className='ms-1 bg-danger border-0 text-white fs-4' >Logout</button></Link>
                    </>
                        :
                        <Link to="/login"><Button variant="" className='fs-4 text-success'>Login</Button></Link>}
                </div>
            </Navbar>
        </Container>
    );
};

export default Navigation;