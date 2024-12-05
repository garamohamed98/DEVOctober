import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductScreen from "./screens/ProductScreen";

const Stack = createNativeStackNavigator();

const Navigation = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Products" component={ProductScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;