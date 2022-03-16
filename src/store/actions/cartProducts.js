import I18n from "i18n-js";
import store from "../store";
import { toggleSnackbarOpen, toggleSnackbarSuccess } from "./snackbar";

export const addToCart = data => {
  store.dispatch(toggleSnackbarSuccess(I18n.t('CartSuccess')))
  return {
    type: 'ADD_TO_CART',
    payload: data,
  };
};

export const addAllItemsToCart = data => {
  store.dispatch(toggleSnackbarSuccess(I18n.t('CartSuccess')))
  return {
    type: 'ADD_ALL_ITEMS_TO_CART',
    payload: data,
  };
};

export const removeFromCart = data => {
  store.dispatch(toggleSnackbarOpen(I18n.t('CartDeleted')))
  return {
    type: 'REMOVE_FROM_CART',
    payload: data,
  };
};

export const removeAllFromCart = () => {
  return {
    type: 'REMOVE_ALL_FROM_CART',
  };
};

export const setCartItemAmount = data => {
  return {
    type: 'SET_AMOUNT',
    payload: data,
  };
};
