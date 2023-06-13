import React from 'react';
import DrinkDetails from './DrinkDetails';

const DrinkItem = ({ drink }) => {
  return (
    <div>
      
      <h2>{drink.name}</h2>
      <DrinkDetails drink={drink} />
    </div>
  );
};

export default DrinkItem;
