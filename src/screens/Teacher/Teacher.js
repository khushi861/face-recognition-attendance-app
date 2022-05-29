import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react'
import Teacherlogin from './Teacherlogin';
import Teacherdashboard from './Teacherdashboard';
const Stack = createStackNavigator();
const Teacher = () => {
  return (
    <Stack.Navigator
        initialRouteName="Teacherlogin"
        screenOptions={{header: () => null}}>
        
        <Stack.Screen name="Teacherlogin" component={Teacherlogin} />
        <Stack.Screen name="Teacherdashboard" component={Teacherdashboard} />
        
      </Stack.Navigator>
  )
}

export default Teacher