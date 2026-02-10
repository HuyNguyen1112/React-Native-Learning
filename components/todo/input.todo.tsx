import { useState } from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

const style = StyleSheet.create({
    todoInput: {
        borderColor: "black",
        borderWidth: 2,
        padding: 10,
        marginBottom: 20,
        borderRadius: 10,
    }
})

interface IProps {
    addTodo: (value: String) => void;
}

const InputTodo = (props: IProps) => {

    const { addTodo } = props

    const [name, setName] = useState<String>("")

    const handleAddNewTodo = () => {
        addTodo(name);
    }

    return (
        <>
            <View>
                <TextInput
                    onChangeText={value => setName(value)}
                    autoCapitalize='none'
                    autoCorrect={false}
                    // keyboardType='numeric'
                    // maxLength={2}
                    // multiline={true}
                    style={style.todoInput} />
                <Button
                    title='submit'
                    onPress={handleAddNewTodo}
                />
            </View>
        </>
    )
}

export default InputTodo