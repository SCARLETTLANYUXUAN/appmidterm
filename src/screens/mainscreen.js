
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';
import { Box } from "@gluestack-ui/themed"
import ProductList from '../component/productlist/ProductList';
import albumData from "../json/album.json";

const  MainScreen=() =>{
    return (
      
      <Box style={styles.header}>
        
        <ProductList list={albumData.albumList} />
      </Box>
    );
  };



const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#00ff7f',
    
    
  },
  text:{
    fontSize:20,
    color:'#fff'
  },
  img:{
    width:50,
    height:50,
    
  }
});

export default MainScreen;