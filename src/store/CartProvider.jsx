import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      const updatedItems = state.items.concat(action.payload);
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    default:
      return defaultCartState;
  }
};

const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

  const addItemToCartHandler = item => {
    dispatch({ type: 'ADD', payload: item });
  };

  const removeItemFromCartHandler = id => {
    dispatch({ type: 'REMOVE', payload: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
