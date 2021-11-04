import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Details from './screens/Details';


export default function App() { 
  const MainNavigator = createStackNavigator();
  return (
    <View style = {{flex: 1}}>
      <NavigationContainer>
        <MainNavigator.Navigator 
          screenOptions = {{headerShown: false}} 
          initialRouteName = "Welcome"
        >
          <MainNavigator.Screen name = "Welcome" component = {Welcome} />
          <MainNavigator.Screen name = "Login" component={Login} />
          <MainNavigator.Screen name = "Home" component = {Home}/>
          <MainNavigator.Screen name = "Details" component = {Details}/>
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({

});
