import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/screens/Home'
import Admin from './src/screens/admin/Admin';
import Student from './src/screens/Student/Student';
import Teacher from './src/screens/Teacher/Teacher';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{header: () => null}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Admin" component={Admin} />
        <Stack.Screen name="Student" component={Student} />
        <Stack.Screen name="Teacher" component={Teacher} />
        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

