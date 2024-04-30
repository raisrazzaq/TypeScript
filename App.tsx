import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from './src/screens/Home';
import Setting from './src/screens/Setting';
import Products from './src/screens/Products';
import Notes from './src/redux/Notes';
import Selection from './src/screens/Selection';
import Components1 from './src/screens/Components1';
import BabarAzam from './src/screens/BabarAzam';

export type RootStackParamsList = {
  Notes: undefined;
  Products: undefined;
  Home: undefined;

  Setting: {
    name: string;
    email: string;
  };
};
const Stack = createStackNavigator<RootStackParamsList>();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="BabarAzam" component={BabarAzam} />
        <Stack.Screen name="Products" component={Products} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
