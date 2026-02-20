import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from '../screens/auth/LoginScreen'
import RegisterScreen from '../screens/auth/RegisterScreen'
import WelcomeScreen from '../screens/auth/WelcomeScreen'
import Home from '../screens/home/Home'
const Stack = createNativeStackNavigator()

const RootNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="WelcomeScreen" component={WelcomeScreen} />
            <Stack.Screen options={{ headerShown: false }} name="LoginScreen" component={LoginScreen} />
            <Stack.Screen options={{ headerShown: false }} name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />

        </Stack.Navigator>
    )
}
export default RootNavigator