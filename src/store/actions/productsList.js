import { getCollection } from '../../services/firebase';

export const getProdList = async (condition) => {
  let products = await getCollection('Products', condition);
  return {
    type: 'PROD_LIST',
    payload: products,
  };
};

export const clearDetails = () => {
  return {
    type: 'CLEAR_DETAILS',
  };
};
