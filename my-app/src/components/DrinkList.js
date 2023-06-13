import React from 'react';
import DrinkItem from './DrinkItem';

const DrinkList = ({ drinks }) => {
    return (
      <div>
        {drinks && drinks.map((drink) => (
          <DrinkItem key={drink.id} drink={drink} />
        ))}
      </div>
    );
  };
  

export default DrinkList;
