import { useState } from "react";
import {  Image, Text, View } from "react-native";
import { Button } from "react-native";
import { StyleSheet } from "react-native";

function Basics() {

      const [count, setCount] = useState<number>(0)
  return (
    <View style={styles.container}>
      <View style={styles.redbox1}>
        <Text>A</Text>
      </View>
      <View style={styles.bluebox2}>
        <Text>B</Text>
      </View>
      <View style={styles.greenbox3}>
        <Text>C</Text>
      </View>
      <View>
        <Text style={styles.text}>
          Hold these <Text style={styles.nestedText}>Tab</Text>
        </Text>
      </View>
      <Image
        style={styles.image}
        source={{
          uri: 'https://picsum.photos/200/300',
        }}
      />
      <Button title="Press me" onPress={() => setCount(count + 1)} />
      <Text>Count: {count}</Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // stack children vertically
    gap: 20, // space between children
    justifyContent: 'center', // vertically center
    alignItems: 'center', // horizontally center
    backgroundColor: '#fff', // white background
  },
  text: {
    fontSize: 24,
    color: '#000',
  },
  redbox1: {
    width: 100,
    height: 100,
    backgroundColor: 'red',

    marginBottom: 20, // space between the box and the text
  },
  bluebox2: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    marginBottom: 20, // space between the box and the text
  },
  greenbox3: {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    marginBottom: 20, // space between the box and the text
  },
  nestedText: {
    fontSize: 28,
    fontWeight: '900',
    color: 'purple',
  },
  image: {
    width: 150,
    height: 150,
    resizeMode:"contain"
  },
});
export default Basics;
