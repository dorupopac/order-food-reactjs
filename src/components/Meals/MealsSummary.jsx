import React from 'react';
import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        It's the food you are dreaming of delivered to your doorstep or office.
      </p>
      <p>
        We prioritize what you need to get you on your way. We strive to keep
        you at your best, and we remain loyal to you, your tastes and your time.
      </p>
    </section>
  );
};

export default MealsSummary;
