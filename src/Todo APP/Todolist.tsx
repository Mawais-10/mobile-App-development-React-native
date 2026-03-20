import { View } from 'react-native';
import { Text } from 'react-native';
import TodoItem from './TodoItem';

interface TodolistProps {
  todos: string[];
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newTask: string) => void;
}
function Todolist({ todos, deleteTodo, editTodo }: TodolistProps) {
  return (
    <View
      style={{
        flex: 1,
        padding: 3,
        backgroundColor: '#f9f9f9',
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <View style={{ padding: 10 }}>
        {todos.map((todo, index) => (
          <View
            key={index}
            style={{
              padding: 10,
              borderBottomWidth: 1,
              borderBottomColor: '#ccc',
            }}
          >
            <Text>{todo}</Text>
          </View>
        ))}
      </View>
      <View>
        {todos.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))}
      </View>
    </View>
  );
}

export default Todolist;
