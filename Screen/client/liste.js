import React , {useState,useEffect} from 'react';
import {Text, View, StyleSheet, FlatList,Image, ActivityIndicator, ImageBackground} from 'react-native';
import { Constants } from 'expo-constants';

export default function Liste_stas() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
useEffect(()=> {
  fetch('http://192.168.43.230:3001/utilisateur/getAll')
 .then(res => res.json())
 .then((resJSON) => {
setData(resJSON)
setLoading(false)
 })
 .catch(err => console.error(err))
}, [])
if(loading) {
  return (
    
    <View style={styles.container}>
      <ActivityIndicator/>
    </View>
  );
} else {
return (


  
<View
style={{
  flex:1,
  flexDirection: 'column',
 backgroundColor: '#E6E6E6'
}}

>
  <View style={StyleSheet.container}>
    <FlatList data={data}
    renderItem={({item}) => {
return (
<>
               {/* <Text>{item.email}</Text>
                <Text>{item.Nom_station}</Text>
                <Text>{item.Role}</Text>
                <Text>{item.avatar}</Text>
                <Image
                  style={{ height: 250, width: 250 }}
                  //source={item.email}
                  source={require("./assets/photo.jpg")}
                  alt="not found"
/>*/}

<View style={{
  flex:1,
  flexDirection: 'row',
  backgroundColor: '#E0F2F7',
   marginBottom:20,
  borderRadius: 10,
  backgroundColor: '#fff',
  shadowColor: '#000',
  shadowOffset: {
    width:0,
    height: 10
  },
  shadowOpacity: .3,
  shadowRadius: 20,
  padding: 10
}}> 

<Image 
source={require("../../assets/ooo.jpg")}
style={{width: 100, height: 100, margin: 5}}
></Image>

<View style={{flex:1,
flexDirection: 'column' , marginStart:20}}>
 <Text style={styles.WrapText}>{item.email}</Text>
<Text style={styles.WrapText}>{item.Nom_station}</Text>
</View>
<View>
<Image 
//source={require("./assets/photo.jpg")}
style={{width: 30, height: 30, margin: 5,
}}
source={{uri: item.avatar}}
></Image>
</View>
</View>

                
      <View style={{
        height: 1,
        backgroundColor: 'white'
      }}></View>    
</>


)
   } }
    />
  </View>
  </View>
);}
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'black',

  },

  WrapText:{
    flex:1,
    marginLeft: 10,
    justifyContent: 'center'
  }
});