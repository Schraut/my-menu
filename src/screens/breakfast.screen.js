import React, { useState } from 'react';
import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Searchbar } from 'react-native-paper';

// Compoonents
//import { Breakfast } from '../components/breakfast/breakfast.component';
import FAButton from '../components/fab/fab.component'; // Floating Action Button

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

const Item = ({ title, image, description, navigation }) => (
  <View>
    <Text style={styles.text}>{title}</Text>
    <TouchableOpacity
      onPress={() => {
        console.log({ title });
        navigation.navigate('Breakfast');
      }}
    >
      <Image source={{ uri: image }} style={styles.image} />
    </TouchableOpacity>
    <Text>{description}</Text>
  </View>
);
export const BreakfastScreen = () => {
  //const [dummyData, setDummyData] = useState(null);

  const [searchQuery, setSearchQuery] = useState('');

  const onChangeSearch = (query) => setSearchQuery(query);

  const renderItem = ({ item }) => (
    <Item
      title={item.title}
      image={item.image}
      description={item.description}
    />
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
      <FAButton />
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
});
