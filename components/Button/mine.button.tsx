import { StyleSheet, View, Text, Pressable } from "react-native"
import AntDesign from '@expo/vector-icons/AntDesign';
const styles = StyleSheet.create({
    btnContainer: {
        borderColor: "Black",
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        paddingHorizontal: 20,
        flexDirection: "row",
        gap: 10,
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "#ccc"
    },
    text: {
        textTransform: "uppercase",
        fontWeight: "bold",
    }
})

interface IProps {
    title: string;
    onPress: () => void;
}

const MineButton = (props: IProps) => {

    const { title, onPress } = props

    return (
        <Pressable style={({ pressed }) => ({ opacity: pressed === true ? 0.5 : 1 })}
            onPress={() => onPress()}>
            <View style={styles.btnContainer}>
                <AntDesign name="pluscircle" size={24} color="black" />
                <Text style={styles.text}>{title}</Text>
            </View>
        </Pressable>
    )
}

export default MineButton