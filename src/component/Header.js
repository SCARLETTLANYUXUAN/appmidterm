
import { StyleSheet, Text, View, Image, SafeAreaView } from 'react-native';
import React from 'react';
const Header=()=>{
  return (
    <View style={styles.header}>
      <Text style={styles.textStyle}>白湧樂wk2作業Album!</Text>
      <Text>110919043</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  header:{
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    elevation: 4,
  },
  textStyle: {
    fontSize: 20,
    fontWeight:'bold',
  },
});

export default Header;