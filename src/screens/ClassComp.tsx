import {Text, View} from 'react-native';
import React, {Component} from 'react';

interface MyProps {
  name: string;
  email: string;
  age: number;
}
interface MyState {
  counter: number;
}

export class ClassComp extends Component<MyProps, MyState> {
  render() {
    return (
      <View>
        <Text>{this.props.name}</Text>
        <Text>{this.props.email}</Text>
        <Text>{this.props.age}</Text>
      </View>
    );
  }
}

export default ClassComp;
