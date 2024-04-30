import {View, Text, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import CommonTextInput from '../components/CommonTextInput';

const Components1 = () => {
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [badName, setBadName] = useState<boolean>(false);
  const [badMobile, setBadMobile] = useState<boolean>(false);

  const Validate = () => {
    let valid = true;
    if (name == '') {
      valid = false;
      setBadName(true);
    } else if (name != ' ') {
      setBadName(false);
    }
    if (mobile == '') {
      valid = false;
      setBadMobile(true);
    } else if (mobile.length < 12) {
      valid = false;
      setBadMobile(true);
    } else if (mobile != ' ') {
      setBadMobile(false);
    }
    return valid;
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <CommonTextInput
        value={name}
        onChangeText={(txt: string) => {
          setName(txt);
        }}
        valid={!badName}
        disabled={false}
        maxLength={30}
        keyboardType="default"
        placeholder="Enter Name"
      />
      {badName && (
        <Text style={{color: 'red', marginLeft: 35, alignSelf: 'flex-start'}}>
          Enter your Name
        </Text>
      )}
      <CommonTextInput
        value={mobile}
        onChangeText={(txt: string) => {
          setMobile(txt);
        }}
        valid={!badMobile}
        disabled={false}
        maxLength={15}
        keyboardType="default"
        placeholder="Enter Name"
      />
      {badMobile && (
        <Text style={{color: 'red', marginLeft: 35, alignSelf: 'flex-start'}}>
          Enter correct Mobile Number
        </Text>
      )}
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: '#9a7B6D',
          borderRadius: 15,
          padding: 15,
        }}
        onPress={() => {
          if (Validate()) {
          }
        }}>
        <Text style={{color: 'white', fontSize: 20, textAlign: 'center'}}>
          Save
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Components1;
