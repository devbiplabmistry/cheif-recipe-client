/* eslint-disable no-unused-vars */
import React from 'react';
import Navigation from '../../pages/shared/navbar/Navigation';
import { Outlet, useLoaderData } from 'react-router-dom';
import { Container } from 'react-bootstrap';

const ChiefLayout = () => {
    const recipee=useLoaderData()
const {_id,recipeeName,Ingredients,rating,recipees}=recipee
    console.log(recipee);
    return (
   <Container>
       <Navigation></Navigation>
       <div className="chief-wrapper">
        <div className="chief-banner">
            <img src={} alt="" />
        </div>

       </div>


   </Container>
      
      
    );
};

export default ChiefLayout;