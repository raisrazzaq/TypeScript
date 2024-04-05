import {View, Text} from 'react-native';
import React from 'react';

interface MyProps {
  name: string;
  email: string;
  age: number;
}

const FunctionalComp = ({name, email, age}: MyProps) => {
  return (
    <View>
      <Text>{name}</Text>
      <Text>{email}</Text>
      <Text>{age}</Text>
    </View>
  );
};

export default FunctionalComp;
