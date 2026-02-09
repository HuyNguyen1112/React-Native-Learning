import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<String>("Vinh Huy")

  const [person, setPerson] = useState<{
    name: string;
    age: number;
  }>({
    name: "Vinh Huy",
    age: 25,
  })

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello world!</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.text}>{person.age}</Text>
      <Text style={styles.text}>{JSON.stringify(person)}</Text>
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
  },
  text: {
    fontSize: 40,
    color: 'red',
  },
});
