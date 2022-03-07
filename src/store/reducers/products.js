let initialState = {
  allProducts: null,
  condition: 0,
  filters: 0,
  filteredProducts: [],
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'PROD_LIST':
        console.log('payl',action.payload.length);

      return {
        ...state,
        allProducts: action.payload,
      };

    case 'CLEAR_DETAILS': {
        console.log('caaaaaaaaled');
      return {
        ...state,
        allProducts: [],
        filteredProducts: [],
        condition: 0,
        filters: 0,
      };
    }

    default:
      return state;
  }
}
