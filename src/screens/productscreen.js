import * as React from 'react';
import {StyleSheet, Button, View ,Image,TouchableOpacity} from 'react-native';
import { ScrollView } from "react-native";
import { Box, HStack, VStack, Text, Pressable } from "@gluestack-ui/themed";
const ProductScreen= ({}) => (
  <ScrollView>  
    
  <View style={styles.container}>
      <Image style={styles.img} source={{uri:'https://scontent-tpe1-1.xx.fbcdn.net/v/t39.30808-6/438216374_7394706623954381_7541642960777076946_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=zWB_BEKP0C8Ab6hiNV-&_nc_ht=scontent-tpe1-1.xx&oh=00_AfAPApFl4hxZmhDFSLUdHcR9JS8lny_y9IzOJzesXrbpjw&oe=66221625'}} 
/>        
              
  <View style={styles.detailsContainer}>
    <Box>
    <Text style={styles.title}>一拳超人——龍卷</Text>
    <Text style={styles.category}>分類: 玩具 / 景品</Text>
    <Text style={styles.provider}>提供者: 白XX</Text>
    <Text style={styles.price}>300NTW</Text>
    </Box>
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>立即購買</Text>
    </TouchableOpacity>
  </View>
</View>
</ScrollView>
);


const styles = StyleSheet.create({

  container: {
    marginTop:'auto',
    flex: 1,
    backgroundColor: '#00ff7f',
    alignItems:'flex-start',
    justifyContent: 'center',
    margin:20,
  },
  img: {
    width: '100%',
    height: 800,
    alignItems:'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding:10,
  },
  
  detailsContainer: {
    alignItems: 'flex-start',
    flexWrap:'wrap',
    padding:10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
category: {
fontSize: 16,
marginBottom: 5,
},
provider: {
fontSize: 16,
marginBottom: 5,
},
price: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
button: {
backgroundColor: '#4CAF50',
height:50,
width:100,
padding: 10,
borderRadius: 5,
},
buttonText: {
color: '#fff',
alignItems: 'center',
fontWeight:'bold',
fontSize: 16,
},
});

export default ProductScreen;