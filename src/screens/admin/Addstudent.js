import { StyleSheet, Text,View,TextInput,TouchableOpacity,Alert} from 'react-native'
import React, {useState} from 'react'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Addstudent = ({navigation}) => {
  
  const [student_id,setstudent_id] = useState("")
  const [name,setName] = useState("")
  const [email,setemail] = useState("")
  const [password,setPassword] = useState("")

  const onAdd =()=>{
      if( email === "khushi_k@mt.iitr.ac.in") {
      Alert.alert("New student added successfully")
      navigation.navigate("Admindashboard")
    }
    else{
      Alert.alert("New student added successfully")
    }
    
    
    
  }
  const onRemove =()=>{
    Alert.alert("Student removed successfully")
    navigation.navigate("Admindashboard")
  }
  return (
    <KeyboardAwareScrollView
    resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={{
        flex: 1,
        flexDirection: "column"
    }}
      scrollEnabled={false}>
    <View
    style={{flex:1} }
  >
    <View style={styles.upper_View}>
      <View style={styles.View_Title}><Text style={styles.title_Text}>Add/Remove Student</Text></View>
      <View style={styles.View_Space}></View>
    </View>
    <View style={styles.center_View}>
    <TextInput
           style={styles.input}
           placeholder="student_id"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           value={student_id}
           onChangeText = {(Data)=> setstudent_id(Data)}
           />
           <TextInput
           style={styles.input}
           placeholder="name"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           value={name}
           onChangeText = {(Data)=>setName(Data)}
           />
           <TextInput
           style={styles.input}
           placeholder="email"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           keyboardType="email-address"
           value={email}
           onChangeText = {(Data)=>setemail(Data)}
           />
           
           <TextInput
           style={styles.input}
           placeholder="password"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           secureTextEntry={true}
           value={password}
           onChangeText = {(Data)=> setPassword(Data)}
           />
           <View style={styles.input_Button}>
           <TouchableOpacity 
        style={styles.button}
        onPress={onAdd}
        activeOpacity={0.7}
        ><Text style={styles.button_Text}>Add</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.button}
        onPress={()=> onRemove}
        activeOpacity={0.7}
        ><Text style={styles.button_Text}>Remove</Text>
        </TouchableOpacity>
     
           </View>
    </View>
    <View style={styles.lower_View}></View>
  </View>
  </KeyboardAwareScrollView>
  )
}

export default Addstudent
const styles = StyleSheet.create({
  upper_View:{
 flex:3,
 justifyContent:"flex-start",
 backgroundColor:"#30323f"
  },
  View_Title:{
    flex:1,
    justifyContent:"center"
  },
  View_Space:{
    flex:2,
    backgroundColor:"white"
  },
  title_Text:{
    color:"white",
    textAlign:"center"
  },
  center_View:{
 flex:8,
 margin:10,
 backgroundColor:"#103056",
 borderRadius:25,
 justifyContent:"space-evenly",
 alignItems:"center"
},
  input:{
    flex:1,
    fontSize:15,
    width:"80%",
    maxHeight:50,
    paddingLeft:20,
    backgroundColor:"white",
    borderBottomLeftRadius:15,
  borderTopRightRadius:15
},
lower_View:{
flex:2,
backgroundColor:"#103056",
borderTopRightRadius:75
  },
  input_Button:{
    flexDirection:'row',
    justifyContent:"space-between"
  },
  button:{
        alignItems:"center",
        backgroundColor:"#f08e47",
        width:"30%",
        padding:10,
        borderRadius:50,
        marginHorizontal:10
        },
        button_Text:{
            color:"white",
            fontSize:15,
            fontWeight:"bold"
           }
})

