import {View, Text} from 'react-native';
import React, {useReducer, useState} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../App';
import {act} from 'react-test-renderer';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Home'>;
}
type MyState = {
  count: number;
};
const initialState: myState = {
  count: 0,
};
type Action = {
  type: 'INCREMENT' | 'DECREMENT';
};
const reducer = (state: MyState, action: Action): MyState => {
  switch (action.type) {
    case 'INCREMENT':
      return {...state, count: state.count + 1};
    case 'DECREMENT':
      return {...state, count: state.count - 1};
    default:
      return state;
  }
};
const Home = ({navigation}: HomeScreenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>{state.count}</Text>
      <Text
        style={{padding: 10, borderWidth: 1, color: 'black'}}
        onPress={() => {
          dispatch({type: 'DECREMENT'});
        }}>
        Change count{' '}
      </Text>
    </View>

    // <View>
    //   <Text
    //     style={{
    //       padding: 10,
    //       borderWidth: 2,
    //       color: 'black',
    //       backgroundColor: 'skyblue',
    //       textAlign: 'center',
    //       fontWeight: 'bold',
    //     }}
    //     onPress={() => {
    //       navigation.navigate('Setting', {
    //         name: 'Hussain',
    //         email: 'Hussain@gmail.com',
    //       });
    //     }}>
    //     Go to Settings
    //   </Text>
    // </View>
  );
};

export default Home;
