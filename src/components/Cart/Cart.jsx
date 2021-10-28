import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = ({onCloseClick}) => {
  const cartItems = (
    <ul className={classes['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item, i) => (
        <li key={item + i}>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onCloseClick={onCloseClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseClick}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};
export default Cart;
