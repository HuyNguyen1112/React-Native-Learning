import { useState } from "react"
import { Alert, Button, StyleSheet, TextInput, View } from "react-native"
import MineButton from "../Button/mine.button";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    todoInput: {
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
    }
})

interface IProps {
    addTodo: (value: string) => void;
}

const InputTodo = (props: IProps) => {

    const { addTodo } = props

    const [name, setName] = useState<string>("")

    const handleAddNewTodo = () => {
        if (!name) {
            Alert.alert("Error", "Null")
            return;
        }

        addTodo(name);
        setName("");
    }

    return (
        <>
            <View style={styles.container}>
                <TextInput
                    onChangeText={value => setName(value)}
                    value={name}
                    autoCapitalize='none'
                    autoCorrect={false}
                    // keyboardType='numeric'
                    // maxLength={2}
                    // multiline={true}
                    style={styles.todoInput} />

                <MineButton
                    title="add new"
                    onPress={handleAddNewTodo}
                />
            </View>
        </>
    )
}

export default InputTodo