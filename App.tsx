import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Basics from './src/Basic';
import Inputcompnent from './src/Input';
import ScrollVieww from './src/Scrollcomp';
import Cssdemo from './src/Cssdemo';

function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        nestedScrollEnabled={true}
        // contentContainerStyle={{ gap: 20, padding: 20 }}
      >
        <Basics />
        <Inputcompnent />
        <ScrollVieww />
        <Cssdemo />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // stack children vertically
    // gap: 20, // space between children
    // horizontally center
    backgroundColor: '#fff', // white background
  },
});

export default App;
