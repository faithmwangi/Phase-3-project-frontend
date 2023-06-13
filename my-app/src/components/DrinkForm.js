import React, { useState } from 'react';
import './DrinkForm.css'

const DrinkForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDrink = {
      name,
      description,
      category,
      ingredients,
      imageUrl,
    };

    onSubmit(newDrink);

    // Clear form fields after submission
    setName('');
    setDescription('');
    setCategory('');
    setIngredients('');
    setImageUrl('');
  };

  return (
    <div className="drink-form">
      <form onSubmit={handleSubmit}>

      <h2>Create a New Drink</h2>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} />
        </div>
        <div>
          <label>Ingredients:</label>
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <button type="submit">Create Drink</button>
      </form>
    </div>
  );
};

export default DrinkForm;
