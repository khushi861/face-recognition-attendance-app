
import { StyleSheet, Text, View ,Image , TouchableOpacity} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


const Home = (props) => {
  return (
    <View style={styles.body}>
    <View style={styles.image_View}>
    <Image
        style={styles.image}
        source={require("../../assets/Images/homeImage.webp")}
        // resizeMode="stretch"

      />
      <Text style={styles.title_Text}>Attendance System</Text>
    </View>
    <View style={styles.button_View}>
        <View style={styles.button_Row}>
        <TouchableOpacity style={{...styles.button , backgroundColor:"#6b1a9a", marginRight:10 ,marginBottom:10}}
        onPress={()=> props.navigation.navigate("Admin")}>
        <Icon size={40} name="person" color="white"/>
         <View><Text style={styles.text}>Admin</Text></View>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.button , backgroundColor:"#273494",marginBottom:10}}
        onPress={()=> props.navigation.navigate("Student")}>
          <Icon size={40} name="school" color="white"/>
          <View><Text style={styles.text}>Student</Text></View>
        </TouchableOpacity>
        </View>
        
      <View style={styles.button_Row}>
      <TouchableOpacity style={{...styles.button , backgroundColor:"#ae1357"}}
      onPress={()=> props.navigation.navigate("Teacher")}>
          <FontAwesome5 size={40} name="chalkboard-teacher" color="white"/>
          <View><Text style={styles.text}>Teacher</Text></View>
         </TouchableOpacity>
        <TouchableOpacity style={{...styles.button , backgroundColor:"#f06c00" , marginLeft:10}}>
            <Icon size={40} name="info" color="white"/>
            <View><Text style={styles.text}>Info</Text></View>
         </TouchableOpacity>
      </View>
        
    </View>
    <View style={styles.footer_View}></View>


    </View>
  )
}

export default Home

const styles = StyleSheet.create({
body:{
flex:1},
image_View:{
flex:3,
borderBottomLeftRadius:150,
backgroundColor:"#103056",
justifyContent:"center",
alignItems:"center"
},
image:{
  width:"70%",
  height:"70%",
  borderBottomLeftRadius:150
},
button_View:{
    flex:3,
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
fontSize:20
},
title_Text:{
  color:"white",
  fontSize:30,
  fontFamily:"Slab Serif ,Araboto Bold",
  fontWeight:"bold"
},
footer_View:{
    flex:1,
    backgroundColor:"#103056",
    borderTopRightRadius:75
}})