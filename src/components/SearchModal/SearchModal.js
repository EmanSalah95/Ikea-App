import { useContext } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ModalContext } from '../../context';
import { styles } from '../../styles/searchStyles';

export default function SearchModal() {
  const { isSearchVisible, setSearchVisible}=useContext(ModalContext)
  return (
    <Modal
    animationType="slide"
    visible={isSearchVisible}
    onRequestClose={() => {
      setSearchVisible(false);
    }}
  >
    <View style={styles.centeredView}>
      
    </View>
  </Modal>
  );
}



