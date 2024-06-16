import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import DetailsScreen from './Screens/DetailScreen';
import SplashScreen from './Screens/SplashScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
  headerStyle: {
    backgroundColor: '#141414',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const HomeStack = () => (
  <Stack.Navigator initialRouteName="Splash" screenOptions={screenOptions}>
    <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
    <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
  </Stack.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: '#141414',
        },
        tabBarActiveTintColor: '#e50914',
        tabBarInactiveTintColor: '#fff',
      }}
    >
      <Tab.Screen 
        name="HomeStack" 
        component={HomeStack} 
        options={{ 
          headerShown: false, 
          tabBarLabel: ({ color }) => <Text style={{ color }}>Home</Text> 
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ 
          title: 'Search', 
          tabBarLabel: ({ color }) => <Text style={{ color }}>Search</Text>,
          ...screenOptions,
        }} 
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;