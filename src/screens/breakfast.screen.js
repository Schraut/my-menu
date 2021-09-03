import React, { useState } from 'react';
import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

// Compoonents
//import { Breakfast } from '../components/breakfast/breakfast.component';
import FAButton from '../components/fab/fab.component'; // Floating Action Button

//import MealDetailModal from './MealDetailModal';

const dummyData = [
  {
    id: '2',
    title: 'Pancakes',
    image: 'https://picsum.photos/701',
    description: 'It is a breakfast and this is a bunch of text',
  },
  {
    id: '3',
    title: 'Eggs & Toast',
    image: 'https://picsum.photos/702',
    description: 'It is a breakfast and this is a bunch of text',
  },
  {
    id: '4',
    title: 'Cereal',
    image: 'https://picsum.photos/703',
    description: 'It is a breakfast and this is a bunch of text',
  },
  {
    id: '5',
    title: 'Chicken n Waffles',
    image: 'https://picsum.photos/704',
    description: 'It is a breakfast and this is a bunch of text',
  },
  {
    id: '6',
    title: 'Bread',
    image: 'https://picsum.photos/705',
    description: 'It is a breakfast and this is a bunch of text',
  },
];

const Item = ({ title, image, description }) => (
  <View>
    <Text style={styles.text}>{title}</Text>
    <TouchableOpacity
      onPress={() => {
        openModal();
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
    <Text>{description}</Text>
  </View>
);

// const openModal = () => {
//   setIsAddMode(true);
// };

export const BreakfastScreen = () => {
  //const [dummyData, setDummyData] = useState(null);

  const [modalVisible, setModalVisible] = useState(false);

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const renderItem = ({ item }) => (
    <>
      <Item
        title={item.title}
        image={item.image}
        description={item.description}
      />
    </>
  );
  return (
    <>
      <Searchbar
        placeholder="Search for breakfast"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.modalButton}>Close window</Text>
        </TouchableOpacity>
      </Modal>
      <FAButton onPress={() => setModalVisible(!modalVisible)} />
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    width: 400,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalButton: {
    paddingTop: 200,
  },
});
