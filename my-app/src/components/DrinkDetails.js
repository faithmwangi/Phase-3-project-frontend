import React, { useEffect, useState } from 'react';
import RatingList from './RatingList';
import RatingForm from './RatingForm';
import './DrinkDetails.css';

const DrinkDetails = ({ drink }) => {
  const [reloadRatings, setReloadRatings] = useState(false);

  const handleRatingSubmit = (newRating) => {
    fetch('http://localhost:9292/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRating),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReloadRatings(true);
      })
      .catch((error) => {
        console.error('Error submitting rating:', error);
      });
  };

  useEffect(() => {
    if (reloadRatings) {
      // Fetch updated ratings
      fetch(`http://localhost:9292/ratings?drink_id=${drink.id}`)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setReloadRatings(false);
        })
        .catch((error) => {
          console.error(`Error fetching ratings for drink ${drink.id}:`, error);
          setReloadRatings(false);
        });
    }
  }, [drink.id, reloadRatings]);

  return (
    <div className="drink-details-container">
      <div className="drink-details">
        <h2>{drink.name}</h2>
        <p>{drink.description}</p>
        <p>Category: {drink.category}</p>
        <p>Ingredients: {drink.ingredients}</p>
        <img src={drink.image_url} alt={drink.name} />

        <RatingList drinkId={drink.id} reloadRatings={reloadRatings} />

        <RatingForm drinkId={drink.id} onSubmit={handleRatingSubmit} />
      </div>
    </div>
  );
};

export default DrinkDetails;
