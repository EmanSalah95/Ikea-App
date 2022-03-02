import { combineReducers } from 'redux';
import favReducer from './reducers/favourits';
import loaderReducer from './reducers/loader';
import cartReducer from './reducers/cartProducts';
import authReducer from './reducers/auth';

export default combineReducers({
  favourits: favReducer,
  loader: loaderReducer,
  cartProducts: cartReducer,
  user: authReducer,
});
