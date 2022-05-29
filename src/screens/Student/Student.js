import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createStackNavigator} from '@react-navigation/stack';
import Studentlogin from './Studentlogin';
import Studentdashboard from './Studentdashboard';
import Takestudentattendance from './Takestudentattendance';

const Stack = createStackNavigator();
const Student = () => {
  return (
    <Stack.Navigator
        initialRouteName="Studentlogin"
        screenOptions={{header: () => null}}>
        
        <Stack.Screen name="Studentlogin" component={Studentlogin} />
        <Stack.Screen name="Studentdashboard" component={Studentdashboard} />
        <Stack.Screen name="Takestudentattendance" component={Takestudentattendance} />
             
        
      </Stack.Navigator>
  )
}

export default Student