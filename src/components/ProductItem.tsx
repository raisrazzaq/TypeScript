import {View, Image, Text} from 'react-native';
import React from 'react';

interface DataProps {
  item: {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: any;
    title: string;
  };
}
const ProductItem = ({item}: DataProps) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'white',
        marginTop: 20,
        width: '90%',
      }}>
      <Image
        source={{uri: item.image}}
        style={{height: 70, width: 70, margin: 10}}
      />
      <View style={{marginLeft: 10, padding: 10, overflow: 'hidden'}}>
        <Text style={{fontWeight: '500', width: '60%'}}>{item.id}</Text>
        <Text style={{fontWeight: '500', width: '60%'}}>
          {item.title.length > 50
            ? item.title.substring(0, 50) + '....'
            : 'item'}
        </Text>
        <Text style={{fontSize: 12, marginTop: 10, width: '60%'}}>
          {item.description.length > 50
            ? item.description.substring(0, 50) + '....'
            : 'item'}
        </Text>
        <Text style={{fontWeight: '500', width: '60%'}}>{item.price}</Text>
      </View>
    </View>
  );
};

export default ProductItem;
