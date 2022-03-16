import React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar, Text } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSnackbarClose } from '../store/actions/snackbar';

const SnackBar = () => {
  const { message, isVisible, color } = useSelector((state) => state.snackbar);
  const dispatch = useDispatch();

  const closeMe = () => {
    dispatch(toggleSnackbarClose());
  };

  return (
    <>
      {isVisible && (
        <Snackbar
          duration={1500}
          style={[styles.container, color ? { backgroundColor: color } : {}]}
          visible={isVisible}
          onDismiss={closeMe}
        >
          <Text style={styles.text}>{message}</Text>
        </Snackbar>
      )}
    </>
  );
};

export default SnackBar;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  container: {
    borderRadius: 50,
  },
});
