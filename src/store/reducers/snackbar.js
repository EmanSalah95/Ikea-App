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

      case "TOGGLE_SNACKBAR_SUCCESS": {
        return {
          ...state,
          isVisible: true,
          message: action.message,
          color:'#40AF11'
        };
      }

      case "TOGGLE_SNACKBAR_ERROR": {
        return {
          ...state,
          isVisible: true,
          message: action.message,
          color:'#B71525'
        };
      }
  
      case "TOGGLE_SNACKBAR_CLOSE": {
        return {
          ...state,
          isVisible: false,
          message: null,
          color:''
        };
      }
  
      default: {
        return state;
      }
    }
  }