import React, { useState } from "react";
import { Center, Switch, HStack, Text } from '@gluestack-ui/themed';

const DisplaySettingScreen = () => {
   const [colorMode, setColorMode] = useState("light");
   const toggleColorMode = () => {
    if (colorMode == "light") setColorMode("dark");
    else setColorMode("light");
   };
  return (
     <Center
      shadow={2} width="90%"
      mt="$2" px="$2" py="$4"
      bg={colorMode == "light" ? "#4D7037" : "black"} borderRadius={21} 
      alignSelf="center"
     >
      <HStack space={8} alignItems="center" >
         <Text size="lg" px="$2" color={colorMode == "dark" ? "white" : "black"}>{colorMode == "light" ? "Light Mode" : "Dark Mode"}夜間模式</Text>
         <Switch
            name="light Mode"
            value={colorMode === "light"}
            onToggle={toggleColorMode}
            size='md'
            accessibilityLabel="display-mode"
            accessibilityHint="light or dark mode"
         />
      </HStack>        
     </Center>
  );
};

export default DisplaySettingScreen;
