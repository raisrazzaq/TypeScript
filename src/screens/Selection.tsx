import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';

interface Arr {
  lang: string;
  isSelected: boolean;
}
const Selection = () => {
  const [data, setData] = useState<Arr[]>([
    {lang: 'Urdu', isSelected: false},
    {lang: 'Punjabi', isSelected: false},
    {lang: 'Saraiki', isSelected: false},
    {lang: 'Pashto', isSelected: false},
    {lang: 'English', isSelected: false},
    {lang: 'Hindi', isSelected: false},
    {lang: 'Bengali', isSelected: false},
    {lang: 'Tamil', isSelected: false},
    {lang: 'chinese', isSelected: false},
    {lang: 'Nepali', isSelected: false},
    {lang: 'Farsi', isSelected: false},
    {lang: 'haryanvi', isSelected: false},
    {lang: 'rangari', isSelected: false},
    {lang: 'japani', isSelected: false},
    {lang: 'Sindhi', isSelected: false},
    {lang: 'English UK', isSelected: false},
    {lang: 'Farsi', isSelected: false},
  ]);
  const [selectedLang, setSelectedLang] = useState<number>(-1);
  const onSelect = (ind: number) => {
    let temp = data;
    temp.map((item, index) => {
      if (index == ind) {
        item.isSelected = !item.isSelected;
      }
    });
    let tempData = [];
    temp.map(item => {
      tempData.push(item);
    });
    setData(tempData);
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                width: '50%',
                height: 100,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: '90%',
                  height: 90,
                  borderWidth: 1,
                  borderColor: item.isSelected ? 'blue' : '#9e9e9e',
                  borderRadius: 10,
                  justifyContent: 'center',
                  alignItems: 'c',
                }}
                onPress={() => {
                  onSelect(index);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    alignSelf: 'center',
                    fontSize: 22,
                    color: item.isSelected ? 'blue' : '#000',
                  }}>
                  {item.lang}
                </Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Selection;
