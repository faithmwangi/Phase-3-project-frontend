import React from 'react';

const DrinkDetails = ({ drink }) => {
  return (
    <div className="drink-details">
      <h2>{drink.name}</h2>
      <p>Category: {drink.category}</p>
      <p>Ingredients: {drink.ingredients}</p>
      <p>Instructions: {drink.instructions}</p>
      <img src={drink.image_url} alt={drink.name} />
    </div>
  );
};

export default DrinkDetails;
