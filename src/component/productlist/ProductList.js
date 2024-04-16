import React from "react";
import { FlatList } from "react-native";

import {Button, ScrollView } from "react-native";
import ProductInform from "../ProductInform";

/*const Productlist=()=>{
    return (
        <ScrollView>
          <Button onPress={() => navigation.navigate('Product')}><Productdata product = {productdata[0]} /></Button>
          <Button><Productinform product = {productdata[1]} /></Button>
          <Button><Productinform product = {productdata[2]} /></Button>
          <Button><Productinform product = {productdata[3]} /></Button>
          <Button><Productinform product = {productdata[4]} /></Button>
          <Button><Productinform product = {productdata[5]} /></Button>
          
        </ScrollView>
      );
  };*/

  const ProductList = ({ list }) => { 
    const renderItem = ({ item }) => <ProductInform album={item} />;
    return (
      <FlatList
        data={list}
        renderItem={renderItem}
        keyExtractor={item => item.title}
      />    
    );  
  }
  export default ProductList;