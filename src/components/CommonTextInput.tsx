import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextInput} from 'react-native-gesture-handler';

type InputProps = {
  placeholder: string;
  value: string;
  onChangeText: any;
  keyboardType: any;
  maxLength: number;
  disabled: any;
  valid: boolean;
};
const CommonTextInput = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  maxLength,
  disabled,
  valid,
}: InputProps) => {
  return (
    <View
      style={{
        width: '90%',
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: valid ? '#9e9e9e' : 'red',
        padding: 15,
      }}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={txt => onChangeText(txt)}
        keyboardType={keyboardType}
        maxLength={maxLength}
        disabled={disabled}
      />
    </View>
  );
};

export default CommonTextInput;
