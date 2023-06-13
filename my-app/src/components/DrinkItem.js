import React from 'react';
import DrinkDetails from './DrinkDetails';

const DrinkItem = ({ drink }) => {
  return (
    <div>
      <DrinkDetails drink={drink} />
    </div>
  );
};

export default DrinkItem;
