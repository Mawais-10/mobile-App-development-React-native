import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import TodoInput from './src/Todo APP/TodoInput';
import Todolist from './src/Todo APP/Todolist';
// import { add } from 'react-native/types_generated/Libraries/Animated/AnimatedExports';
// import Basics from './src/Basic';
// import Inputcompnent from './src/Input';
// import ScrollVieww from './src/Scrollcomp';
// import Cssdemo from './src/Cssdemo';

function App() {
  const [todos, setTodos] = React.useState<string[]>([]);

  const addtodo = (task: string) => {
    setTodos([...todos, task]);
  };

  console.log(todos);

  return (
    <View style={styles.container}>
      <ScrollView
      // nestedScrollEnabled={true}
      // contentContainerStyle={{ gap: 20, padding: 20 }}
      >
        <TodoInput addTodo={addtodo} />
        <Todolist todos={todos} />
        {/* <Basics />
        <Inputcompnent />
        <ScrollVieww />
        <Cssdemo /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    flex: 1,
    flexDirection: 'row', // stack children vertically
    // gap: 20, // space between children
    // horizontally center
    backgroundColor: '#fff', // white background
  },
});

export default App;
