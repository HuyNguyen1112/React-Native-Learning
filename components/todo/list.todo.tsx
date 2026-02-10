import { FlatList, StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
    todo: {
        backgroundColor: 'red',
        fontSize: 20,
        padding: 10,
        margin: 10,
        textAlign: 'center'
    },
    flatList: {
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 2,
    }
})

interface IProps {
    todoList: ITodo[];
}

const ListTodo = (props: IProps) => {
    const { todoList } = props
    return (
        <>
            <FlatList style={styles.flatList}
                data={todoList}
                keyExtractor={item => item.id + ""}
                renderItem={({ item }) => {
                    return (
                        <Text key={item.id} style={styles.todo}> {item.title} </Text>
                    )
                }}
            />
        </>
    )
}

export default ListTodo