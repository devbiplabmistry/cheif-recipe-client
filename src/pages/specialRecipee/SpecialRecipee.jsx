import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const SpecialRecipee = ({ recipee }) => {
    const { Recipee_img, cheff_name, health_tips, method, prep
        , recipee_description, recipee_name, cookingMethod, ratting, ingredientsOne, indegredientTwo, indegredientFour, indegredientFive, indegredientSix, indegredientSeven, indegredientEight, indegredientNine, indegredientTen, indegredientThree } = recipee
    console.log(recipee);
    return (
        <Container className='mb-5 '>
            <Card >
                <Card.Img style={{ height: '350px' }} variant="top" src={Recipee_img} />
                <Card.Body>
                    <Card.Title>{recipee_name}</Card.Title>
                    <p>Rattings :{ratting}</p>
                    <Card.Text>
                        <h4>Indegredients :</h4>
                        <p>{ingredientsOne}</p>
                        <p>{indegredientTwo}</p>
                        <p>{indegredientThree}</p>
                        <p>{indegredientFour}</p>
                        <p>{indegredientFive}</p>
                    </Card.Text>
                    <Card.Text>
                        <h5>Cooking Method :</h5>
                        {cookingMethod}
                    </Card.Text>
                    <Button variant="primary">Favourite</Button>
                </Card.Body>
            </Card>

        </Container>
    );
};

export default SpecialRecipee;