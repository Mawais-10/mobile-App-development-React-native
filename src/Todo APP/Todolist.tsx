import { View } from 'react-native';
import { Text } from 'react-native';

function Todolist({ todos }: { todos: string[] }) {
  return <View style={{ flex: 1, padding: 20 }}>

    {todos.map((todo, index) => (
      <View key={index} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
        <Text>{todos}</Text>
      </View>
    ))}
  </View>;
}

export default Todolist;
