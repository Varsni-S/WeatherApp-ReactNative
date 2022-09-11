import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Country from '../components/Country';
import Home from '../components/Home';
import Weather from '../components/Weather';
import { RootStackParamList } from './RootStackPrams';

const Stack = createStackNavigator<RootStackParamList>();

export default function StackNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="Weather" component={Weather} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
