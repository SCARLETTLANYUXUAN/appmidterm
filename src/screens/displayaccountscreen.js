import React from "react";
import { Center,  HStack, Text } from '@gluestack-ui/themed';

const DisplayAccountScreen = () => {
   
  return (
     <Center
      shadow={2} width="90%"
      mt="$2" px="$2" py="$4"
      bg="#4D7037" borderRadius={21} 
      alignSelf="center"
     >
      <HStack space={8} alignItems="center" >
         <Text size="lg" px="$2" color="white" >更改密碼</Text>
         
      </HStack>
      <HStack space={8} alignItems="center" >
         
         <Text size="lg" px="$2" color="white">登出帳號</Text>
      </HStack>         
     </Center>
  );
};

export default DisplayAccountScreen;