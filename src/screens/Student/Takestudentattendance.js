import { StyleSheet, View ,Button , Image , Alert} from 'react-native'
import React ,{useState} from 'react'
import {Picker} from '@react-native-picker/picker';
import ImagePicker from "react-native-image-crop-picker"
  const Takestudentattendance = (props)=> {

     const [course,setCourse] = useState("")
    //  const [imageUri,setimageUri] = useState("")
     const [show,setShow] = useState(false)
const openGallery = ()=>{
  ImagePicker.openPicker({
    width: 300,
    height: 400,
    cropping: true
  }).then(image => {
    console.log(image);
    // setimageUri(image.path)
    setShow(!show)
    
  },(error)=>{Alert.alert("Taken attendance")});
  Alert.alert("Taken attendance")
}
const openCamera =()=>{
  ImagePicker.openCamera({
    width: 300,
    height: 400,
    cropping: true,
  }).then(image => {
    console.log(image);
    // setimageUri(image.path)
    setShow(!show)
  },(error)=>{Alert.alert("Taken attendance")})
  Alert.alert("Taken attendance");
}

  return (
      <View style={styles.body}>
          <Picker
  selectedValue={course}
  style={styles.input}
  onValueChange={(itemValue, itemIndex) =>
    setCourse(itemValue)
  }>
  <Picker.Item label="MTN-101" value="MTN-101" />
  <Picker.Item label="ECN-102" value="ECN-102" />
</Picker>
{/* <Image
    source={imageUri}
    style={styles.image}
    resizeMode="cover"
    resizeMethod="scale"/> */}
    

 <View >
 { show ? <Button 
             style={styles.button}
             title="Upload"
             onPress={()=> {
              setTimeout(()=> Alert.alert("made attendance successfully") , 2000)
               props.navigation.navigate("Studentdashboard")} } />
            :
            <View>
            <Button 
             style={styles.button}
             title="Take Photo"
             onPress={openCamera} />
             <Button 
             style={styles.button}
             title="Choose from Gallery"
             onPress={openGallery} />
             </View>
             }            
   </View>                

                  
    

         
      </View>
  );
}
export default Takestudentattendance

const styles = StyleSheet.create({
  body: {
      flex: 1,
  },
  preview: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
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
image:{
    width:"250",
    height:"250",
    borderRadius:250

},
button:{
  width:"100%",
  marginTop:15,
  marginHorizontal:10,
  backgroundColor:"#ae1357"
}
});