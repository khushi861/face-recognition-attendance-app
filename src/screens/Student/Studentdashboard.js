import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Studentdashboard = (props) => {
  return (
    <View style={{flex:1}}>
      <View style={styles.view1}>
        <Text style={styles.title_Text}>Welcome:Student</Text>
      </View>
      <View style={styles.view2}></View>
      <View style={styles.view3}>
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: '#6b1a9a',
            marginRight: 5,
          }}
          onPress={()=> props.navigation.navigate("Takestudentattendance")}>
          <Icon size={40} name="person" color="white" />
          <View>
            <Text style={styles.text}>Take Attendance</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#273494', marginLeft: 5}}
          onPress={()=> props.navigation.navigate("Studentlogin")}>
          <Icon size={40} name="school" color="white" />
          <View>
            <Text style={styles.text}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.view4}></View>
      <View style={styles.view5}></View>
    </View>
  );
};

export default Studentdashboard;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    backgroundColor: '#103056',
    borderBottomLeftRadius: 15,
    textAlign: 'center',
  },
  view2: {
    flex: 2,
  },
  view3: {
    flex: 3,
    margin: 10,
    padding: 20,
    borderRadius: 25,
    backgroundColor: '#103056',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
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
  view4: {
    flex: 2,
  },
  view5: {
    flex: 2,
    borderTopRightRadius: 25,
    backgroundColor: '#103056',
  },
});
