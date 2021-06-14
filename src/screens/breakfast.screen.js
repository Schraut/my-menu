import React, { useState } from 'react';
import { Text, FlatList } from 'react-native';

// Compoonents
import { Breakfast } from '../components/breakfast/breakfast.component';
import FAButton from '../components/fab/fab.component'; // Floating Action Button

export const BreakfastScreen = () => {
  const [dummyData, setDummyData] = useState([
    {
      id: '2',
      title: 'Second Item',
      image: 'https://picsum.photos/702',
    },
    {
      id: '3',
      title: 'Third Item',
      image: 'https://picsum.photos/703',
    },
    {
      id: '4',
      title: 'Fifth Item',
      image: 'https://picsum.photos/704',
    },
    {
      id: '5',
      title: 'Sixth Item',
      image: 'https://picsum.photos/705',
    },
    {
      id: '6',
      title: 'Sevonth Item',
      image: 'https://picsum.photos/706',
    },
  ]);
  return (
    <>
      <Text>Breafast Screen</Text>
      <FlatList
        data={dummyData}
        renderItem={({ item }) => {
          return <Breakfast />;
        }}
        keyExtractor={(item) => item.id}
      />
      <FAButton />
    </>
  );
};
