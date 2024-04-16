import React ,{useState}from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountSettingScreen from "../screens/accountsettingscreen";
import ProductScreen from '../screens/productscreen';
import MainScreen from '../screens/mainscreen';
import HomeScreen from '../screens/homescreen';
import SettingScreen from '../screens/settingscreen';
import InformScreen from'../screens/informscreen'
import LoginScreen from '../screens/loginscreen';

import DisplayMessageScreen from '../screens/displaymessagescreen';
import DisplaySettingScreen from '../screens/displaysettingscreen';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer >
      <MyDrawer />
    </NavigationContainer>
  );
}

const MyDrawer = () => {
  return (
    <Drawer.Navigator initialRouteName="MainStack">
      <Drawer.Screen 
        name="LoginStack" 
        component={LoginStack} 
        options={{
          headerShown: false, 
          title: "登入",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 60
          },
        }}
      />
      <Drawer.Screen 
        name="MainStack" 
        component={MainStack} 
        options={{
          headerShown: false,
          title: "首頁",
          tabBarIcon: ({}) => (
            <MaterialCommunityIcons name="home"  size={26} />
          ),
        }}
      />
      <Drawer.Screen 
        name="MoreStack" 
        component={MoreStack} 
        options={{
          headerShown: false,
          title: "更多",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Drawer.Screen 
        name="InformStack" 
        component={InformStack} 
        options={{
          headerShown: false,
          title: "通知",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      
    </Drawer.Navigator>
  );  
}

/*const MyTabs = () => {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      screenOptions={{
        tabBarInactiveTintColor: colors.light500,
        tabBarActiveTintColor: colors.primary700,
        // headerShown: false
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack}
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="SettingsStack" 
        component={SettingsStack} 
        options={{
          headerShown: false,
          title: "Settings",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}*/

const MoreStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="More"
        component={SettingScreen}
        options={{
          title: "更多",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={20} 
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ), 
           
        }}
      />
      
      <Stack.Screen
        name="DisplayMessage"
        component={DisplayMessageScreen}
        options={{
          title: "通知設定",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="DisplaySetting"
        component={DisplaySettingScreen}
        options={{
          title: "顯示設定",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      <Stack.Screen
        name="AccountSetting"
        component={AccountSettingScreen}
        options={{
          title: "賬號設定",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        }}
      />
      
    </Stack.Navigator>    
  );
}
const LoginStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      
        name="Login"
        component={LoginScreen}
        
        options={{
          title: "登入",
        
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              
              size={20} 
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
        }}
      />
      
    </Stack.Navigator>    
  );
}
const InformStack = ({navigation}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Inform"
        component={InformScreen}
        options={{
          title: "通知",
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'bell'} 
              size={20} 
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            />            
          ),  
        }}
      />
      
    </Stack.Navigator>    
  );
}

const MainStack = ({navigation}) => {

  return (
    <Stack.Navigator
      // screenOptions={{
      //   headerShown: false
      // }}
    >
      <Stack.Screen
        name="首頁"
        component={MainScreen}
        options={{
          
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
          headerLeft: () => (
            <MaterialCommunityIcons 
              name={'menu'} 
              size={20} 
              onPress={() => navigation.openDrawer()}
              style={{marginRight: 20}}
            /> 
          ),  
        }}
      />
      <Stack.Screen
        name="Detail"
        component={ProductScreen}
        options={({ route }) => ({
          title: route.params.title,
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTitleStyle: {
            fontWeight: '400',
            fontSize: 20
          },
        })}
      />
    </Stack.Navigator>
  );
}
export default Navigation;
