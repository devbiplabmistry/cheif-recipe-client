/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../../pages/shared/navbar/Navigation';
import {  useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import ChiefRecipee from '../../pages/Chief/ChiefRecipee';

const ChiefLayout = () => {
    const recipee=useLoaderData()

    console.log(recipee);
    return (
   <Container>
       <Navigation></Navigation>
       <div className="chief-wrapper">
        <div className="chief-banner">
            <h3>This is recipee page</h3>
            {
                recipee.map( r =><ChiefRecipee recipee={r} key="r._id"></ChiefRecipee>)
            }
        
    
        </div>

       </div>


   </Container>
      
      
    );
};

export default ChiefLayout;