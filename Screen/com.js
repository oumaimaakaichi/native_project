import React  , {useState , useEffect}from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";

const App5 = ({ navigation }) => {
  const[data , setData]=useState('')
  
  const componentDidMount =  () =>{
    const url="http://192.168.43.230:3001/reservation/getAllReservation"
    fetch(url).then((res)=>res.json())
    .then((resJson)=>{
     // alert(JSON.stringify(resJson))
     setData({data:resJson})
     console.warn(data)
    })
  }
  return (
    <View style={{ paddingTop: 30 }}>
        <TouchableOpacity onPress={()=>{componentDidMount()}} style={styles.boutton}>
        <Text style={{color:"black"}}>Cliqer</Text>
        </TouchableOpacity>
      </View>

          
    
  );
};

export default App5;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fc8783",
  },
  
  boutton:{
    height:42,
    width:200,
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    borderRadius:42,
    backgroundColor:"pink"
  }
});