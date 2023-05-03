/* eslint-disable no-unused-vars */
import React from 'react';
import { Container } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';


const ChiefRecipee = () => {
    const recipee =useLoaderData()
    const { _id, recipeeName, Ingredients, likes, noOfRecipee, yearOfExperience,picture, rating, recipees, bio, name } = recipee
    console.log(recipee);
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
        </Container>
    );
};

export default ChiefRecipee;
