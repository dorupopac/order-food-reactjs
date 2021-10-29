import React, { useEffect, useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import CartContext from '../../store/cart-context';
import classes from './Cart.module.css';

const Cart = ({ onCloseClick }) => {
  const { items, totalAmount, additem, removeItem } = useContext(CartContext);

  useEffect(() => {
    const closeModal = e => {
      if (e.key === 'Escape') {
        onCloseClick();
      }
    };
    document.addEventListener('keydown', closeModal);
    return () => document.removeEventListener('keydown', closeModal);
  }, [onCloseClick]);

  const newTotalAmount = `$${totalAmount.toFixed(2)}`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = id => {};
  const cartItemAddHandler = item => {};

  const cartItems = (
    <ul className={classes['cart-items']}>
      {items.map((item, i) => (
        <CartItem
          key={item.id + i}
          {...item}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onCloseClick={onCloseClick}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{newTotalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={onCloseClick}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
