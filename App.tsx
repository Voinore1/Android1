import "./global.css";
import { NavigationContainer } from '@react-navigation/native';
import { Stack } from './navigation';
import LoginScreen from "./components/LoginScreen";
import RegisterScreen from "./components/RegisterScreen";

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
