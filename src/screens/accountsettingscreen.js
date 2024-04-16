import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Text, Center } from "@gluestack-ui/themed";
import {StyleSheet, View,  TextInput, TouchableOpacity } from 'react-native';

export default function TabAccountSettingScreeniewExample() {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <View flex={1} style={styles.container}>
               <Text style={{ fontSize: 16, color: 'green', marginBottom: 5 }}>
                  用戶名
               </Text>
               <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
                  value={username}
                  onChangeText={text => setUsername(text)}
               />
               <Text style={{ fontSize: 16, color: 'green', marginBottom: 5 }}>
                  密碼
               </Text>
               <TextInput
               style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
               value={password}
               onChangeText={text => setPassword(text)}
               secureTextEntry
               />
               <TouchableOpacity style={{ marginTop:10, backgroundColor: 'green', padding: 10, borderRadius: 5 }}>
               <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}onPress={() => navigate(MainScreen)}>
                儲存
               </Text>
        
               </TouchableOpacity>
        
            </View>
            
         )
      } else {
         return (
            <Center flex={1} >
               <Text>This is an General Account Setting Page</Text>
            </Center>
         )
      }
   }

   return (
      <Box flex={1} >
         <SegmentedControlTab
            values={["General", "Advanced"]}
            tabStyle={{ 
               backgroundColor: "white",
               marginTop: 10,
               borderColor: "gray",
            }}
            activeTabStyle={{
               backgroundColor: "#68d8a2",
               marginTop: 10,    
               borderColor: "#68d8a2",       
            }}
            firstTabStyle={{ marginLeft: 20 }}
            lastTabStyle={{ marginRight: 20 }}
            tabTextStyle={{ fontSize: 16, padding: 5, color: "gray"}}
            activeTabTextStyle={{ color: "white" }}
            selectedIndex={selectedIndex}
            onTabPress={(index) => setSelectedIndex(index)}
         />
         <SegmentedContent />
      </Box>
   );
}
const styles = StyleSheet.create({
   container:{
      padding:20,
   },
})
