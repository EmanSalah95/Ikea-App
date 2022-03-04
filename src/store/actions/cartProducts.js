export const addToCart = data => {
  return {
    type: 'ADD_TO_CART',
    payload: data,
  };
};

export const addAllItemsToCart = data => {
  return {
    type: 'ADD_ALL_ITEMS_TO_CART',
    payload: data,
  };
};

export const removeFromCart = data => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: data,
  };
};

export const setCartItemAmount = data => {
  return {
    type: 'SET_AMOUNT',
    payload: data,
  };
};
