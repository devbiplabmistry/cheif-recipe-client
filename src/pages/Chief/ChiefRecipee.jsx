/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import SpecialRecipee from '../specialRecipee/SpecialRecipee';


const ChiefRecipee = () => {
    const recipee = useLoaderData()
    const { _id, recipeeName,ingredientsOne,indegredientTwo,indegredientThree,indegredientFour,indegredientFive,indegredientSix,indegredientSeven, likes, noOfRecipee, yearOfExperience, picture, rating, recipees, bio, name} = recipee;

return (
    <Container>
        <div className="recipee-wrapper d-flex align-items-center mb-5">
            <div className="recipee-img">
                <img style={{ width: '350px', height: '350px' }} src={picture} alt="" />
            </div>
            <div className="recipee-content ms-5">
                <h3>{name}</h3>
                <p>{bio}</p>
                <small>Likes :{likes}</small>
                <br />
                <small>No of Recipee :{noOfRecipee}</small>
                <br />
                <small>Year Of Experience :{yearOfExperience}</small>
            </div>
        </div>
        <h1>Recipies From Chef</h1>
        <div className="Recipies-from-chef mb-5">
            {
                recipees.map ( recipee=><SpecialRecipee recipee={recipee}></SpecialRecipee>)
            }
        </div>
    </Container>
);
};

export default ChiefRecipee;
