import React, { useEffect, useState } from 'react';

const RatingList = ({ drinkId }) => {
  const [ratings, setRatings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:9292/ratings?drink_id=${drinkId}`)
      .then((response) => response.json())
      .then((data) => {
        setRatings(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(`Error fetching ratings for drink ${drinkId}:`, error);
        setIsLoading(false);
      });
  }, [drinkId]);

  if (isLoading) {
    return <div>Loading ratings...</div>;
  }

  // Calculate average rating for the current drink
  const drinkRatings = ratings.filter((rating) => rating.drink_id === drinkId);
  const averageRating =
    drinkRatings.length > 0
      ? Math.round(
          drinkRatings.reduce((sum, rating) => sum + rating.rating, 0) /
            drinkRatings.length
        )
      : null;

  
  const generateStarRating = (rating) => {
    const starCount = Math.round(rating);
    return '🤤 '.repeat(starCount);
  };

  if (averageRating === null) {
    return null;
  }

  return (
    <div>
      <p><span>Yumminess: </span>{generateStarRating(averageRating)}</p>
    </div>
  );
};

export default RatingList;
