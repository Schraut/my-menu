import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// Bottom tab navigation
import { BreakfastScreen } from './src/screens/breakfast.screen';
import { LunchScreen } from './src/screens/lunch.screen';
import { DinnerScreen } from './src/screens/dinner.screen';
// Variable for creating bottom tab navigator
const Tab = createBottomTabNavigator();

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Breakfast" component={BreakfastScreen} />
          <Tab.Screen name="Lunch" component={LunchScreen} />
          <Tab.Screen name="Dinner" component={DinnerScreen} />
        </Tab.Navigator>
      </NavigationContainer>
      <ExpoStatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
