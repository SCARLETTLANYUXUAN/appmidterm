import React from "react";
import { Center, Switch, HStack, Text } from '@gluestack-ui/themed';

const DisplayMessageScreen = () => {
   
  return (
     <Center
      shadow={2} width="90%"
      mt="$2" px="$2" py="$4"
      bg="#4D7037" borderRadius={21} 
      alignSelf="center"
     >
      <HStack space={8} alignItems="center" >
         <Text size="lg" px="$2" color="white">關閉通知</Text>
         <Switch
            name="light Mode"
            
            size='md'
            accessibilityLabel="display-mode"
            accessibilityHint="light or dark mode"
         />
      </HStack>        
     </Center>
  );
};

export default DisplayMessageScreen;