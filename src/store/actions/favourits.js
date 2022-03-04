export const addToFav = data => {
  return {
    type: 'ADD_TO_FAV',
    payload: data,
  };
};

export const removeFromFav = data => {
  return {
    type: 'REMOVE_FROM_FAV',
    payload: data,
  };
};

export const removeAllFromFav = () => {
  return {
    type: 'REMOVE_ALL_FROM_FAV',
  };
};

export const setFavItemAmount = data => {
  return {
    type: 'SET_AMOUNT',
    payload: data,
  };
};
