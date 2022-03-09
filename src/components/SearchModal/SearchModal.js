import { useContext } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { ModalContext } from '../../context';
import { styles } from '../../styles/searchStyles';
import SearchInput from './SearchInput';
import SearchPage from '../../screens/Search/Search';
import SearchHeader from '../../screens/Search/searchHeader';

export default function SearchModal() {
  const { isSearchVisible, setSearchVisible}=useContext(ModalContext);
  const closeModal=() => {
    setSearchVisible(false);
  }
  return (
    <Modal
    animationType="slide"
    visible={isSearchVisible}
    onRequestClose={closeModal}
  >
    <View style={styles.container}>
      <SearchInput closeModal={closeModal}/>
    </View>
  </Modal>
  );
}



