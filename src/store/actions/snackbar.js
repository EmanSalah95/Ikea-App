export const toggleSnackbarOpen = (message) => ({
    type: "TOGGLE_SNACKBAR_OPEN",
    message,
  });

  export const toggleSnackbarSuccess = (message) => ({
    type: "TOGGLE_SNACKBAR_SUCCESS",
    message,
  });

  export const toggleSnackbarError = (message) => ({
    type: "TOGGLE_SNACKBAR_ERROR",
    message,
  });
  
  export const toggleSnackbarClose = () => ({
    type: "TOGGLE_SNACKBAR_CLOSE",
  });
  