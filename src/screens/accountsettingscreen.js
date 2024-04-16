import React, { useState } from 'react';
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Box, Text, HStack,Center } from "@gluestack-ui/themed";
import {StyleSheet, View,  TextInput, TouchableOpacity } from 'react-native';

export default function TabAccountSettingScreeniewExample() {
   const [selectedIndex, setSelectedIndex] = useState(0);
   const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
   const SegmentedContent = () => {
      if (selectedIndex == 1) {
         return (
            <Center
      shadow={2} width="90%"
      mt="$2" px="$2" py="$4"
      bg="#4D7037" borderRadius={21} 
      alignSelf="center"
     >
      <HStack space={8} alignItems="center" >
         
         <Text size="lg" px="$2" color="white">登出帳號</Text>
      </HStack>         
     </Center>
            
         )
      } else {
         return (
            <View flex={1} style={styles.container}>
            <Text style={{ fontSize: 16, color: 'green', marginBottom: 5 }}>
            密碼
            </Text>
            <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
               value={username}
               onChangeText={text => setUsername(text)}
            />
            <Text style={{ fontSize: 16, color: 'green', marginBottom: 5 }}>
               再次確認密碼
            </Text>
            <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
            />
            <TouchableOpacity style={{ marginTop:10, backgroundColor: 'green', padding: 10, borderRadius: 5 }}>
            <Text style={{ color: 'white', fontSize: 16, textAlign: 'center' }}onPress={() => navigate(MainScreen)}>
             更改密碼
            </Text>
     
            </TouchableOpacity>
     
         </View>
         
         )
      }
   }

   return (
      <Box flex={1} >
         <SegmentedControlTab
            values={["一般設定", "進階設定"]}
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
