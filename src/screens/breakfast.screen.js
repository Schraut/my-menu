import React, { useState } from 'react';
import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
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
        console.log(title, image);
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
    <Text>{description}</Text>
  </View>
);

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
      <Modal animationType="slide" visible={modalVisible}>
        <ScrollView>
          <Text style={styles.modal}>Add Meal</Text>
          <Image
            source={{ uri: 'https://picsum.photos/703' }}
            style={styles.image}
          />
          <TextInput style={styles.input} placeholder="title" />
          <TextInput style={styles.input} placeholder="Ingredients" />
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.modalButton}>Cancel</Text>
          </TouchableOpacity>
        </ScrollView>
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
  modal: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 30,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  modalButton: {
    paddingTop: 200,
    fontSize: 40,
  },
});
