import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';

export default function ButtonsGroup({
  setSectionPrev,
  setSectionNext,
  showPaypal,
  locationsExist,
  setContinuePayment,
}) {
  return (
    <View style={styles.buttons}>
      {setSectionPrev && (
        <TouchableOpacity
          onPress={() => {
            setSectionPrev();
          }}
          style={styles.backBtnWrappper}
        >
          <Text style={styles.backBtn}>BACK</Text>
        </TouchableOpacity>
      )}

      {(setSectionNext || showPaypal) && locationsExist && (
        <TouchableOpacity
          onPress={() => {
            setSectionNext && setSectionNext();
            showPaypal && setContinuePayment(true);
          }}
          style={
            setSectionPrev
              ? styles.continueBtnWrappper
              : { ...styles.continueBtnWrappper, width: '100%' }
          }
        >
          <Text style={styles.continueBtn}>CONTINUE</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
