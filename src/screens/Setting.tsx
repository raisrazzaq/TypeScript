import {View, Text} from 'react-native';
import React, {useRef} from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamsList} from '../../App';
import {useRoute} from '@react-navigation/native';

interface SettingScreenProps {
  navigation: StackNavigationProp<RootStackParamsList, 'Setting'>;
}
const Setting = ({navigation}: SettingScreenProps) => {
  const route = useRoute();
  console.log(route);
  return (
    <View>
      <Text>Setting</Text>
    </View>
  );
};

export default Setting;
