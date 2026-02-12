import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native"

const Like = () => {
    const navigation: any = useNavigation();
    return (
        <View>
            <Text>Like</Text>
            <Button title="Go to detail"
                onPress={() => navigation.navigate("LikeDetail")} />
        </View>
    )
}

export default Like;