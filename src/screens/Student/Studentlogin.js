import { StyleSheet, Text, View,TextInput,TouchableOpacity,Alert} from 'react-native'
import React ,{useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';



const Studentlogin = (props) => {
  const [email,setemail]=useState("")
  const [password,setPassword]=useState("")

  const login = ()=>{
    if ( !email || !password){
      Alert.alert("Please fill all correct  credentials")
    }
    else if(email!=="" && password!==""){
      
          Alert.alert('Logged in successfully');
          props.navigation.navigate("Studentdashboard")
        }
      
     }
  
  
  
  return (
    <View style={styles.login_Body} >
      <View style={styles.login_Header}>
        <View><Icon size={75} name="person" color="white" /></View>
        <View><Text style={styles.title_Text}>Student Login</Text></View>
      
      </View>
      <View style={styles.login_Space}></View>
      <View style={styles.login_Middle}>
      <View style={styles.inputContainer}>
          <TextInput
           style={styles.input}
           placeholder="email"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           keyboardType="email-address"
           value={email}
           onChangeText = {(Data)=> setemail(Data)}
           />
           <Icon size={30} name="person" color="black" style={styles.inputIcon}/>
          </View>
          <View style={styles.inputContainer}>
          
          <TextInput
           style={styles.input}
           placeholder="Password"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           secureTextEntry={true}
           value={password}
           onChangeText = {(Data)=> setPassword(Data)}
           />
           <Icon size={30} name="person" color="black" style={styles.inputIcon}/>
        </View>
        <TouchableOpacity 
        style={styles.button}

        onPress={login}
        activeOpacity={0.7}
        ><Text style={styles.button_Text}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.login_Space}></View>
      <View style={styles.login_footer}></View>
    </View>
  )
}

export default Studentlogin

const styles = StyleSheet.create({
login_Body:{
    flex:1
},
login_Header:{
    flex:3,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#103056",
    borderBottomLeftRadius:150
},
title_Text:{
  color:"white",
  fontSize:30,
  fontFamily:"Slab Serif ,Araboto Bold",
  fontWeight:"bold"
},
login_Space:{
    flex:1
},
login_Middle:{
    flex:5,
    alignItems:"center",
    margin:10,
    borderRadius:20,
    backgroundColor:"#103056"

},
inputContainer:{
  width:"80%",
  margin:20
},
input:{
  paddingLeft:50,
  width:"100%",
  maxHeight:60,
  fontSize:16,
  backgroundColor:"white",
  borderBottomLeftRadius:25,
  borderTopRightRadius:25
},
inputIcon:{
    position:"absolute",
    left:10,
    top:8

},
button:{
  width:"50%",
alignItems:"center",
backgroundColor:"#f08e47",
marginTop:20,
padding:10,
borderRadius:50,
marginHorizontal:40
},
button_Text:{
 color:"white",
 fontSize:25,
 fontWeight:"bold"
},
login_footer:{
  flex:2,
  backgroundColor:"#103056",
  borderTopRightRadius:75

}
})