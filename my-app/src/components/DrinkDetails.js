import React from 'react';
import RatingList from './RatingList';
import RatingForm from './RatingForm';

const DrinkDetails = ({ drink }) => {
  const handleRatingSubmit = (newRating) => {
    console.log(newRating);
    // ...
  };

  return (
    <div className="drink-details">
      <p>{drink.description}</p>
      <p>Category: {drink.category}</p>
      <p>Ingredients: {drink.ingredients}</p>
      <img src={drink.image_url} alt={drink.name} />

      <RatingList drinkId={drink.id} />

      <RatingForm drinkId={drink.id} onSubmit={handleRatingSubmit} />
    </div>
  );
};

export default DrinkDetails;
