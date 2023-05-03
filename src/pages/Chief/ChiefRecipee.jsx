/* eslint-disable no-unused-vars */
import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChiefRecipee = ({recipee}) => {
    const {_id,recipeeName,Ingredients,picture,rating,recipees}=recipee
    console.log(recipee);
    return (
        <div>
            <h2>This is chefs recipeepage</h2>
            <img src={picture} alt="" />
        </div>
    );
};

export default ChiefRecipee;
