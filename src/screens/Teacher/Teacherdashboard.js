import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Teacherdashboard = (props) => {
  return (
    <View style={{flex: 1}}>
      <View style={styles.view1}>
        <Text style={styles.title_Text}>Welcome:Teacher</Text>
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}>
        <View style={styles.middleRow1}> 
          <Text style={{fontSize: 20, color: 'white',textAlign:"center"}}>Select Your Class</Text>
          <View style={styles.input}>
            <Text style={{fontSize:20,fontWeight:"bold"}}>MMED</Text>
          </View>
        </View>
        <View style={styles.middleRow2}>
          <View
            style={{
              ...styles.button,
              backgroundColor: '#6b1a9a',
              marginRight: 5,
            }}>
            <Icon size={40} name="person" color="white" />
            <View>
              <Text style={styles.text}>View Attendance</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.button,
              backgroundColor: '#273494',
              marginLeft: 5,
            }}>
            <Icon size={40} name="school" color="white" />
            <View>
              <Text style={styles.text}>Previous Records</Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.logout_Button}
          onPress={()=> props.navigation.navigate("Teacherlogin")}
          activeOpacity={0.7}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.view4}></View>
      <View style={styles.view5}></View>
    </View>
  );
};

export default Teacherdashboard;

const styles = StyleSheet.create({
  view1: {
    flex: 2,
    backgroundColor: '#103056',
    borderBottomLeftRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title_Text: {
    color: 'white',
    fontSize: 35,
    fontFamily: 'Slab Serif ,Araboto Bold',
    fontWeight: 'bold',
  },
  view2: {
    flex: 1,
  },
  view3: {
    flex: 6,
    margin: 10,
    padding: 10,
    borderRadius: 25,
    backgroundColor: '#103056',
   
    
  },
  input: {
    flex: 1,
    fontSize: 15,
    width: '100%',
    maxHeight: 50,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    justifyContent:"center"
  },
  button: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  middleRow1:{
    flex:2
    
  },
  middleRow2:{
    flex:3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    
  },
  logout_Button: {
      flex:1,
    width: '100%',
    alignItems: 'center',
    justifyContent:"center",
    backgroundColor: '#f08e47',
    marginTop:20,
    borderRadius:50
  },
  view4: {
    flex: 1,
  },
  view5: {
    flex: 2,
    borderTopRightRadius: 75,
    backgroundColor: '#103056',
  },
});
