import React, { useContext } from 'react';
import MealItemForm from './MealItemForm';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';

const MealItem = ({ id, name, description, price }) => {
  const { addItem } = useContext(CartContext);

  const newPrice = `$${price.toFixed(2)}`;

  const addToCartHandler = amount => {
    addItem({
      id,
      name,
      amount,
      price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{newPrice}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} id={id} />
      </div>
    </li>
  );
};
export default MealItem;
