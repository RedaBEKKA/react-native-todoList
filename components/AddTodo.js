import React,{useState} from 'react';
import { StyleSheet, TextInput, View,TouchableOpacity,Button} from 'react-native';


export default function AddTodo({submitHandler}){
    const [text,setText] = useState('')
    const changeHandler = (val) => {
        setText(val)
    }

    return(
        <View>
            <TextInput 
            placeholder="nouvelle tache ..."
            onChangeText={changeHandler}
            style={styles.input}
        />
        <Button onPress={() => submitHandler(text)} title="Ajouter" color='coral'/>
        </View>
        
    )
    

}


const styles = StyleSheet.create({
    input: {
     
      marginBottom:10,
      borderColor:"#bbb",
      paddingVertical:6,
      paddingHorizontal:8,
      borderBottomWidth:1.5,
      borderBottomColor:"#ddd"
      
    },
   
  });