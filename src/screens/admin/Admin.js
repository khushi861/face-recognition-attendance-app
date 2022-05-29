import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Addteacher from './Addteacher';
import Addstudent from './Addstudent';
import Admindashboard from './Admindashboard';
import Adminlogin from './Adminlogin';
import {NavigationContainer} from '@react-navigation/native';

const Stack = createStackNavigator();

// const adminComponent = ()=>{
//   <Stack.Navigator initialRouteName="Ad">
       
//   </Stack.Navigator>
// }
const Admin = () => {
  return (
   
      <Stack.Navigator
        initialRouteName="Adminlogin"
        screenOptions={{header: () => null}}>
        <Stack.Screen name="Adminlogin" component={Adminlogin} />
        <Stack.Screen name="Admindashboard" component={Admindashboard}/>
        <Stack.Screen name="Addteacher" component={Addteacher} />
        <Stack.Screen name="Addstudent" component={Addstudent} />
                
        
        
      </Stack.Navigator>
   
  );
};

export default Admin;

const styles = StyleSheet.create({});
