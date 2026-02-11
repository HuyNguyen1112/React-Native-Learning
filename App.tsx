import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import InputTodo from './components/todo/input.todo';
import ListTodo from './components/todo/list.todo';

export default function App() {



  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "Vinh Huy",
    age: 25,
  })

  const [todoList, setTodoList] = useState<ITodo[]>([])
  const addTodo = (title: String) => {
    const todo = { id: Math.random(), title: title };
    setTodoList([...todoList, todo])
  }
  const deleteTodo = (id: number) => {
    const newTodo = todoList.filter((todo) => {
      return todo.id != id;
    });
    setTodoList(newTodo);
  }

  return (
    <View style={styles.container}>
      <InputTodo
        addTodo={addTodo}
      />

      <ListTodo
        todoList={todoList}
        deleteTodo={deleteTodo}
      />



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 50,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: 'red',
  },
});
