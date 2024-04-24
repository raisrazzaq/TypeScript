import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import ProductItem from '../components/ProductItem';

interface ProductsType {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: any;
  title: string;
}
const Products = () => {
  const [products, setProducts] = useState<ProductsType[]>([]);
  useEffect(() => {
    getProductsData();
  }, []);
  const getProductsData = () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => {
        console.log(json);
        setProducts(json);
      });
  };
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={products}
        renderItem={({item, index}: {item: ProductsType; index: number}) => {
          return <ProductItem item={item} />;
        }}
      />
    </View>
  );
};

export default Products;
