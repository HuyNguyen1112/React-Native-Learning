import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<String>("Vinh Huy")

  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "Vinh Huy",
    age: 25,
  })

  const [todoList, setTodoList] = useState([
    { id: 1, title: "Learn React Native" },
    { id: 2, title: "Learn React.js" },
    { id: 3, title: "Watching Netflix" },
    { id: 4, title: "Playing ESport" },
    { id: 5, title: "Subscribe Hỏi Dân IT :v" },
    { id: 6, title: "Watching Youtube" },
    { id: 7, title: "CR 7" },
    { id: 8, title: "Tony Kroos" },
    { id: 9, title: "Nine" },
    { id: 10, title: "M10" },
  ])


  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{person.age}</Text>
      <Text style={styles.text}>{JSON.stringify(person)}</Text>
      <TextInput
        onChangeText={value => setName(value)}
        autoCapitalize='none'
        autoCorrect={false}
        // keyboardType='numeric'
        // maxLength={2}
        // multiline={true}
        style={styles.textInput} />
      <Button
        title='submit'
        onPress={() => alert('Hello')}
      />
      <ScrollView >
        {todoList.map(todo => {
          return (
            <Text style={styles.todo}> {todo.title} </Text>
          )
        })}
      </ScrollView>
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
  text: {
    fontSize: 20,
    color: 'red',
  },
  textInput: {
    borderColor: "black",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    fontSize: 20,
  },
  todo: {
    backgroundColor: 'red',
    fontSize: 20,
    padding: 10,
    margin: 10,
    textAlign: 'center'
  }
});
