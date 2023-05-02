/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import './MainLayout.css'
import logo from '../../assets/logo.jpg'

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
            
        </Container>
    );
};

export default Main;