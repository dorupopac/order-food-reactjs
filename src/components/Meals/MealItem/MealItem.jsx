import React from 'react';
import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  const newPrice = `$${price.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{newPrice}</div>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </li>
  );
};
export default MealItem;
