/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import { AiFillStar } from "react-icons/ai";
import {FiStar } from "react-icons/fi";

const Chefs = ({ chefs }) => {
    const { picture, _id, name, recipee_title, recipee_img, recipee_description, yearOfExperience, noOfRecipee, bio, likes, rattings } = chefs
    return (
        <Container>
            <Card >
                <Card.Img variant="top" src={picture} style={{ width: '350px', height: '350px' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title><small>Year of Exp :{yearOfExperience}</small></Card.Title>
                    <Card.Title><small>Numbers of recipes :{noOfRecipee}</small></Card.Title>
                    <Card.Title><small>Likes :{likes}</small></Card.Title>
                    <Rating className='me-2'
                        placeholderRating={3.5}
                        emptySymbol={<FiStar className='text-warning'></FiStar>}
                        placeholderSymbol={<AiFillStar className='text-warning'></AiFillStar>}
                        fullSymbol={<AiFillStar className='text-warning'></AiFillStar>}
                    />
                    <Link to={`/chef/${_id}`}><Button variant="primary">View Recipes Button</Button></Link>
                </Card.Body>
            </Card>
        </Container>
    );
};

export default Chefs;