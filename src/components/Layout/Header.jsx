import React from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = ({onCartClick}) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Good Food, Good Mood</h1>
        <HeaderCartButton onClick={onCartClick} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of food." />
      </div>
    </>
  );
};

export default Header;
