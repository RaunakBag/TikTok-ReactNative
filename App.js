import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Image} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen"
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'
import DiscoveryScreen from "./src/screens/DiscoveryScreen"
import PostScreen from "./src/screens/PostScreen"
import ProfileScreen from "./src/screens/ProfileScreen"
import SettingScreen from "./src/screens/SettingScreen"
import Foundation from "react-native-vector-icons/Foundation";
import Feather from "react-native-vector-icons/Feather";
import AntDesign from "react-native-vector-icons/AntDesign";
import Ionicons from "react-native-vector-icons/Ionicons";
import IoniconsIcons from 'react-native-vector-icons/Ionicons'
import logo from './assets/images/logo.svg'


const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator()

function HomeStackScreen() {
  return(
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name='Home' 
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerLeftContainerStyle:{
            marginLeft:15,
          },
          headerRightContainerStyle:{
            marginRight:15,
          },
          headerTitleContainerStyle: { 
            justifyContent: 'center', 
            alignItems: 'center', 
          },
          headerLeft: () =>(
            <Feather name="camera" size={25} color={'black'} />
          ),
          headerTitle: () =>(
            <Image source={logo} resizeMode="contain" style={{width: 135}} />
          ),
          headerRight: () =>(
            <IoniconsIcons name='paper-plane-outline' size={25}/>
          ),
        }}    
      />
    </HomeStack.Navigator>
  )
}

const App = () => {
  return(
    <NavigationContainer>
      <StatusBar barStyle="white-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Home') {
              return <Foundation name="home" size={size} color={color} />;
            }
            if (route.name === 'Discover') {
              return <Feather name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <Feather name="plus-square" size={size} color={color} />;
            }
            if (route.name === 'Settings') {
              return <AntDesign name="hearto" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return <Ionicons name="person-outline" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Settings" component={SettingScreen} />
        <Tab.Screen name="Discover" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={PostScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

