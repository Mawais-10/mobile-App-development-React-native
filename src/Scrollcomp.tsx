import { ScrollView, View } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native';

function scrollvieww() {
  return (
    <View style={styles.container}>
      <Text>ScrollView Component</Text>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        style={styles.scrollview}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        bounces={true}
      >
        {[...Array(20)].map((_, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.textbox}>Item {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: 'lightgray',
  },
  contentContainer: {
    padding: 20,
  },
  scrollview: {
    backgroundColor: 'white',
    height: 150,
  },
  box: {
    height: 50,
    backgroundColor: 'blue',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textbox: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default scrollvieww;
