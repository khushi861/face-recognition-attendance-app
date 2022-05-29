import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const Addteacher = ({navigation}) => {
  
  const [teacher_id,setteacher_id] = useState("")
  const [name,setName] = useState("")
  const [email,setemail] = useState("")
  const [course,setCourse]=useState("")
  const [password,setPassword] = useState("")
  const onAdd =()=>{
    Alert.alert("New teacher added successfully");
    navigation.navigate("Admindashboard");
  }
  const onRemove =()=>{
    Alert.alert("Teacher removed successfully")
    navigation.navigate("Admindashboard");
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
      <View style={styles.View_Title}><Text style={styles.title_Text}>Add/Remove Teacher</Text></View>
      <View style={styles.View_Space}></View>
    </View>
    <View style={styles.center_View}>
    <TextInput
           style={styles.input}
           placeholder="Teacher_id"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           value={teacher_id}
           onChangeText = {(Data)=> setteacher_id(Data)}
           />
           <TextInput
           style={styles.input}
           placeholder="Name"
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           value={name}
           onChangeText = {(Data)=> setName(Data)}
           />

<Picker
  selectedValue={course}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) =>
    setCourse(itemValue)
  }>
  <Picker.Item label="MTN-101" value="MTN-101" />
  <Picker.Item label="ECN-102" value="ECN-102" />
</Picker>
           <TextInput
           style={styles.input}
           placeholder="email "
           placeholderTextColor="#D3D3D3"
           autoCapitalize="none"
           autoCorrect={false}
           value={email}
           onChangeText = {(Data)=> setemail(Data)}
           />
           
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
           <View style={styles.input_Button}>
           <TouchableOpacity 
        style={styles.button}
        onPress={()=> onAdd}
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

export default Addteacher

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