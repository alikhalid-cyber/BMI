import { View, Text } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../pages/Login/LoginScreen';
import SignScreen from '../pages/SignUp/SignScreen';
import ProfileScreen from '../pages/Profile/ProfileScreen';
import SplashScreen from '../pages/Splash/SplashScreen';
import HomeScreen from '../pages/Home/HomeScreen';
import ResultScreen from '../pages/Result/ResultScreen';
const StackNavigation = () => {
  const Stack = createNativeStackNavigator();
   // const Stack=createStackNavigator();
  return (
    <View style={{ flex: 1 }}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName='SplashScreen'>

<         Stack.Screen options={{headerShown: false}} name="SplashScreen" component={SplashScreen} />
          
          <Stack.Screen options={{headerShown: false}} name="LoginScreen" component={LoginScreen} />
          <Stack.Screen options={{headerShown: false}} name="SignScreen" component={SignScreen} />
          <Stack.Screen options={{headerShown: false}} name="ProfileScreen" component={ProfileScreen} />
          <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="ResultScreen" component={ResultScreen} />
        
          
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  )
}

export default StackNavigation;