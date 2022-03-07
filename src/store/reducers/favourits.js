let initialState = {
  favourits: [],
  favTotalPrice: 0,
  totalAmountOfFavItems: 0,
};

export default function favReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TO_FAV':
      return {
        ...state,
        favourits: [action.payload, ...state.favourits],
      };

    case 'REMOVE_FROM_FAV':
      return {
        ...state,
        favourits: state.favourits.filter(i => i.id !== action.payload),
      };

    case 'REMOVE_ALL_FROM_FAV':
      return {
        ...state,
        favourits: [],
      };

    case 'SET_AMOUNT': {
      state.favTotalPrice = 0;
      state.totalAmountOfFavItems = 0;
      state.favourits.find((i, index) => {
        if (i.id === action.payload.id) {
          state.favourits[index].PurchasedAmount =
            action.payload.PurchasedAmount;
        }

        state.favTotalPrice +=
          state.favourits[index].PurchasedAmount *
          state.favourits[index].productData.Price;

        state.totalAmountOfCartItems += state.favourits[index].PurchasedAmount;
      });
      return {
        ...state,
        favourits: state.favourits,
        favTotalPrice: state.favTotalPrice,
        totalAmountOfCartItems: state.totalAmountOfCartItems,
      };
    }

    default:
      return state;
  }
}
