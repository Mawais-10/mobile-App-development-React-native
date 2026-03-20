import { useState } from 'react';
import { TextInput, View } from 'react-native';
import { Button } from 'react-native';

interface TodoInputProps {
  addTodo: (task: string) => void;
}
function TodoInput({ addTodo }: TodoInputProps) {
  const [task, setTask] = useState('');


  const handleAdd=()=>{
if (task.trim() !== '') {
  addTodo(task);
  setTask('');
  }
}
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        padding: 10,
        
      }}
    >
      <TextInput
        placeholder="Enter a new task..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add" color="#841584" onPress={handleAdd} />
    </View>
  );
}

export default TodoInput;
