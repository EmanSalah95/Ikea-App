let initialState = {
  allProducts: [],
  condition: 0,
  filters: {},
  filteredList: null,
  loading :true,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'PROD_LIST':
      return {
        ...state,
        allProducts: action.payload.products,
        condition: action.payload.condition,
        filters: { condition: action.payload.condition },
        loading:false,
      };

    case 'UPDATE_FILTER':
      return {
        ...state,
        filters: action.payload.filterObj,
        filteredList: action.payload.filteredList,
      };

    case 'CLEAR_PRODUCTS': {
      return {
        ...state,
        allProducts: [],
        filteredList: null,
        condition: null,
        filters: null,
        loading:true,

      };
    }

    case 'CLEAR_FILTERS': {
      return {
        ...state,
        filteredList: null,
        filters: { condition: state.condition },
      };
    }

    default:
      return state;
  }
}
