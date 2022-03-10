const initialState = {
    isVisible: false,
    message: '',
    color:'',
  };
  
  export default function snackbar(state = initialState, action) {
    switch (action.type) {
      case "TOGGLE_SNACKBAR_OPEN": {
        return {
          ...state,
          isVisible: true,
          message: action.message,
        };
      }
  
      case "TOGGLE_SNACKBAR_CLOSE": {
        return {
          ...state,
          isVisible: false,
          message: null,
        };
      }
  
      default: {
        return state;
      }
    }
  }