import React, { useState } from 'react';
import { Button, Text, View, TextInput } from 'react-native';

function TodoItem({
  item,
  index,
  deleteTodo,
  editTodo,
}: {
  item: string;
  index: number;
  deleteTodo: (index: number) => void;
  editTodo: (index: number, newTask: string) => void;
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(item);

  
  if (isEditing) {
    return (
      <View
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#ccc',
        }}
      >
        <TextInput
          value={newText}
          onChangeText={setNewText}
          style={{
            borderWidth: 1,
            padding: 8,
            marginBottom: 10,
          }}
        />

        <Button
          title="Save"
          onPress={() => {
            if (newText.trim() === '') return;

            editTodo(index, newText); // 🔥 parent call
            setIsEditing(false); // back to normal mode
          }}
        />
      </View>
    );
  }

  // 🔥 NORMAL MODE UI
  return (
    <View
      style={{
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }}
    >
      <Text>{item}</Text>

      <Button
        title="Delete"
        color="#ff0000"
        onPress={() => deleteTodo(index)}
      />

      <Button
        title="Edit"
        color="#0000ff"
        onPress={() => setIsEditing(true)} // 🔥 edit mode ON
      />
    </View>
  );
}

export default TodoItem;
