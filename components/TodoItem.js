
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native';

export default function TodoItem({item,pressKey}) {

  return (
    <TouchableOpacity onPress={()=>pressKey(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop:16,
    borderColor:"#bbb",
    borderWidth:1.5,
    borderRadius:10,
    borderStyle:"dashed"
    
  },
 
});
