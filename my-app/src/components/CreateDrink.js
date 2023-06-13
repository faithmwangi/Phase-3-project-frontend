import React, { useState } from 'react';
import './DrinkForm.css';

const CreateDrink = ({ onDrinkCreated }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [drinkId, setDrinkId] = useState(''); 

  const handleSubmit = (event) => {
    event.preventDefault();

    const newDrink = {
      name,
      description,
      category,
      ingredients,
      imageUrl,
    };

    createDrink(newDrink)
      .then((data) => {
        console.log('Drink created successfully');
        setName('');
        setDescription('');
        setCategory('');
        setIngredients('');
        setImageUrl('');
        if (onDrinkCreated) {
          onDrinkCreated(data);
        }
      })
      .catch((error) => {
        console.error('Error creating drink:', error);
      });
  };

  const handleUpdate = () => {
    const updatedDrink = {
      id: drinkId,
      name,
      description,
      category,
      ingredients,
      imageUrl,
    };

    updateDrink(updatedDrink)
      .then(() => {
        console.log('Drink updated successfully');
      })
      .catch((error) => {
        console.error('Error updating drink:', error);
      });
  };
  
  const handleDelete = () => {
    deleteDrink(drinkId)
      .then(() => {
        console.log('Drink deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting drink:', error);
      });
  };

  const createDrink = (newDrink) => {
    return fetch('http://localhost:9292/drinks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newDrink),
    }).then((response) => {
      if (response.status === 201) {
        return response.json();
      } else {
        throw new Error('Failed to create drink');
      }
    });
  };

  const deleteDrink = (id) => {
    return fetch(`http://localhost:9292/drinks/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.status === 204) {
        // Drink successfully deleted
      } else {
        throw new Error('Failed to delete drink');
      }
    });
  };

  const updateDrink = (updatedDrink) => {
    return fetch(`http://localhost:9292/drinks/${updatedDrink.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedDrink),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Failed to update drink');
      }
    });
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

      <button onClick={handleUpdate}>Update Drink</button>
      <button onClick={handleDelete}>Delete Drink</button>
    </div>
  );
};

export default CreateDrink;
