import React, { useEffect, useContext, useState, useRef } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';

const HeaderCartButton = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const firstRender = useRef(true);

  const { items } = useContext(CartContext);
  const numberOfCartItems = items.reduce((acc, item) => acc + item.amount, 0);

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    setBtnIsHighlighted(true);

    const timeout = setTimeout(() => setBtnIsHighlighted(false), 300);
    return () => clearTimeout(timeout);
  }, [numberOfCartItems]);

  return (
    <button className={btnClasses} onClick={onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
