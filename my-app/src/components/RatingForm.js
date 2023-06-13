import React, { useState } from 'react';

const RatingForm = ({ drinkId, onSubmit }) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRating = {
      drink_id: drinkId,
      rating: rating
    };


    fetch('http://localhost:9292/ratings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRating)
    })
      .then((response) => response.json())
      .then((data) => {
        onSubmit(data);
        setRating(0);
      })
      .catch((error) => {
        console.error('Error saving rating:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Tried it? Rate it! </h3>
          <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} />
        </label>
        <button type="submit">Submit Rating</button>
      </form>
    </div>
  );
};

export default RatingForm;
