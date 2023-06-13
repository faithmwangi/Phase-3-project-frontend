import React, { useEffect, useState } from 'react';
import DrinkItem from './DrinkItem';


const Drinks = () => {
  const [drinksData, setDrinksData] = useState([]);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await fetch('http://localhost:9292/drinks');
        const data = await response.json();
        setDrinksData(data);
      } catch (error) {
        console.log('Error fetching drinks:', error);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div>
      {drinksData.map((drink) => (
        <DrinkItem key={drink.id} drink={drink} />
      ))}
    </div>
  );
};

export default Drinks;
