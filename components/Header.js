import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View,FlatList,TouchableOpacity} from 'react-native';

export default function Header() {

  return (
    <View style={styles.header}>
        <Text style={styles.title}>Ma todo List</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height:90,
    paddingTop:55,
    backgroundColor:'coral'
    
  },
 title:{
     textAlign:'center',
     color:'#fff',
     fontSize:20,
     fontWeight:'bold'
 }
});
