import {  View } from 'react-native';
import { StyleSheet } from 'react-native';
// import { Text } from 'react-native';
function Cssdemo() {
  return (
    
    <View style={styles.container}>
      
      <View style={styles.redbox}>A</View>
      <View style={styles.bluebox}>A</View>
      <View style={styles.greenbox}>A</View>
    </View>
  );
}

const styles = StyleSheet.create({
    redbox: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
    },
    bluebox: {
        width: 100,
        height: 100,
        backgroundColor: 'blue',
    },
    greenbox: {
        width: 100,
        height: 100,
        backgroundColor: 'green',
    },
    container:{
        
        flexDirection: 'row',
        gap: 20,
        marginBottom: 60,
        justifyContent: 'space-around',
            alignItems: 'center',
},
  text: {
    
    color: 'red',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Cssdemo;
