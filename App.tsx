import {View, Text} from 'react-native';
import React from 'react';
import ClassComp from './src/screens/ClassComp';
import FunctionalComp from './src/screens/FunctionalComp';

const App = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ClassComp name={'Hussain'} email={'hussain@gmail.com'} age={20} />
      <FunctionalComp name={'Hussain'} email={'hussain@gmail.com'} age={20} />
    </View>
  );
};

export default App;
