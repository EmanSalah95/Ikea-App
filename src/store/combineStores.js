import { combineReducers } from 'redux';
import favReducer from './reducers/favourits';
import loaderReducer from './reducers/loader';
import cartReducer from './reducers/cartProducts';
import authReducer from './reducers/auth';
import productsReducer from './reducers/products';
import snackbar from './reducers/snackbar';
import languageReducer from './reducers/language';

export default combineReducers({
  favourits: favReducer,
  loader: loaderReducer,
  cartProducts: cartReducer,
  user: authReducer,
  products:productsReducer,
  snackbar:snackbar,
  language:languageReducer
});
