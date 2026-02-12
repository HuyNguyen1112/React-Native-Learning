import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native"

const Home = () => {
    const navigation: any = useNavigation();
    return (
        <View>
            <Text>Home</Text>
            <Button title="Go to detail"
                onPress={() => navigation.navigate("HomeDetail")} />
        </View>
    )
}

export default Home;