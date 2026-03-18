import { useState } from "react";
import { Text, TextInput } from "react-native";
import { View } from "react-native";
import { StyleSheet } from "react-native";

function Inputcompnent() {
    const [text, setText] = useState("")
    console.log(text);
    
    return ( 
        <View>
            <Text>Input Component</Text>
            <TextInput  style={styles.Input} placeholder="Type..." value={text} onChangeText={setText} />
        </View>
     );
}
const styles = StyleSheet.create({
  Input: {
    width: 200,
    height: 100,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Inputcompnent;