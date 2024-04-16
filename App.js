// In App.js in a new project
import * as React from 'react';

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Navigation from './src/navigation';
import { useState } from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config ,Switch} from '@gluestack-ui/config';

const App = () => {
  
  return (

      <SafeAreaView style={{flex: 1}}>
        <GluestackUIProvider config={config}>
          <Navigation />   
        </GluestackUIProvider>         
      </SafeAreaView>  
   
  );
};
/*function App() {
  return (
    <NavigationContainer>
      < initialRouteName="Main">
        
        <Stack.Screen name="Main" component={MainScreen} />
        <Stack.Screen name="Inform" component={InformScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Product" component={ProductScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Navigation/>
        <Productlist />
      
      <SafeAreaView/>
    </NavigationContainer>
  );
}*/
export default App;