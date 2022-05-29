import {StyleSheet, Text, View , TouchableOpacity,} from 'react-native';
import React , {useState} from 'react';
import Addteacher from './Addteacher';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';



const Admindashboard = ({navigation}) => {
    
  return (
    <View style={{flex:1}}>
      <View style={styles.Header}>
      <Icon size={100} name="person" color="white" style={styles.inputIcon}/>
      <Text style={styles.title_Text}>Admin</Text>
      </View>
      
      <View style={styles.button_View}>
        <View style={styles.button_Row}>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: '#1e264a',
              marginRight: 10,
              marginBottom: 10,
            }}
            onPress={()=>{navigation.navigate("Addteacher")} }>
            <Icon size={40} name="person" color="white" />
            <View>
              <Text style={styles.text}>Add or Remove Teacher</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: '#273494',
              marginBottom: 10,
            }}
            onPress={()=> {navigation.navigate("Addstudent")} }>
            <Icon size={40} name="school" color="white" />
            <View>
              <Text style={styles.text}>Add or Remove Student</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.button_Row}>
          <View style={{...styles.button, backgroundColor: '#6b1a9a'}}>
            <FontAwesome5 size={40} name="chalkboard-teacher" color="white" />
            <View>
              <Text style={styles.text}>Generate Today's Attendance</Text>
            </View>
          </View>
          <View
            style={{
              ...styles.button,
              backgroundColor: '#ee8253',
              marginLeft: 10,
            }}>
            <Icon size={40} name="info" color="white" />
            <View>
              <Text style={styles.text}>Attendance Record</Text>
            </View>
          </View>
        </View>

        <View style={styles.button_Row}>
          <View style={{...styles.button, backgroundColor: '#d9a37f',marginTop:10}}>
            <FontAwesome5 size={40} name="chalkboard-teacher" color="white" />
            <View>
              <Text style={styles.text}>Change password</Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              ...styles.button,
              backgroundColor: '#fc8b23',
              marginLeft: 10,marginTop:10
            }}
            onPress={()=> {navigation.navigate("Adminlogin")} }>
            <Icon size={40} name="info" color="white" />
            <View>
              <Text style={styles.text}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Admindashboard;

const styles = StyleSheet.create({
     Header:{
        flex:3,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#103056",
        borderBottomLeftRadius:150
    },
    button_View:{
        flex:4,
        justifyContent:"space-evenly",
        margin:10
    },
    button_Row:{
     flex:1,
     flexDirection:"row",
     justifyContent:"space-evenly",
     alignItems:"stretch"
     
     
     
    },
    button:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
    color:"white",
    fontSize:15
    },
    title_Text:{
        color:"white",
        fontSize:30,
        fontFamily:"Slab Serif ,Araboto Bold",
        fontWeight:"bold"
      }
});

