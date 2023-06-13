import React from 'react';
import DrinkForm from './DrinkForm';

const CreateDrink = () => {
  const handleNewDrinkSubmit = (newDrink) => {
    fetch('http://localhost:9292/drinks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDrink),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error creating a new drink:', error);
      });
  };

  return (
    <div>
      <h2>Create a New Drink</h2>
      <DrinkForm onSubmit={handleNewDrinkSubmit} />
    </div>
  );
};

export default CreateDrink;
