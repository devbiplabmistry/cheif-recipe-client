/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../../pages/shared/navbar/Navigation';
import { useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ChiefRecipee from '../../pages/Chief/ChiefRecipee';

const ChiefLayout = () => {
    return (
        <Container>
            <Navigation></Navigation>
            <div className="chief-wrapper">
                <div className="chief-banner ">
                    <h3 className='text-center fw-normal fs-3 mb-5 mt-5'>This is Recipee Page</h3>
                    <ChiefRecipee></ChiefRecipee>
                </div>

            </div>


        </Container>


    );
};

export default ChiefLayout;