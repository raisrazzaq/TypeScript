import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import React, {useState} from 'react';

const Notes = () => {
  const [title, setTitle] = useState<string>('');
  const [desc, setDesc] = useState<string>('');
  return (
    <View style={{flex: 1, backgroundColor: 'pink', padding: 20}}>
      <TextInput
        placeholder="Enter note title"
        value={title}
        onChange={txt => setTitle(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          paddingLeft: 20,
        }}
      />
      <TextInput
        placeholder="Enter note Description"
        value={desc}
        onChange={txt => setDesc(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginTop: 20,
          paddingLeft: 20,
        }}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          backgroundColor: 'black',
          marginTop: 20,
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'white'}}>Add Note</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Notes;
