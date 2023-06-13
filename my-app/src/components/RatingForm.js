import React, { useState } from 'react';

const RatingForm = ({ drinkId, onSubmit }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (event) => {
    setRating(parseInt(event.target.value, 10));
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any validation or additional processing before submitting

    const newRating = {
      drink_id: drinkId,
      rating: rating,
      comment: comment,
    };

    // Call the onSubmit function passed from the parent component
    onSubmit(newRating);

    // Reset the form after submitting
    setRating(0);
    setComment('');
  };

  return (
    <div>
      <h3>Rate the Drink:</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Rating:
          <input type="number" min="1" max="5" value={rating} onChange={handleRatingChange} />
        </label>
        <label>
          Comment:
          <textarea value={comment} onChange={handleCommentChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RatingForm;
