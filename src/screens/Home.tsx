import {View, Text} from 'react-native';
import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../App';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}

const Home = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <Text
        style={{
          padding: 10,
          borderWidth: 2,
          color: 'black',
          backgroundColor: 'skyblue',
          textAlign: 'center',
          fontWeight: 'bold',
        }}
        onPress={() => {
          navigation.navigate('Setting', {
            name: 'Hussain',
            email: 'Hussain@gmail.com',
          });
        }}>
        Go to Settings
      </Text>
    </View>
  );
};

export default Home;
