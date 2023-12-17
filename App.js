import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Register from "./components/Register/Register";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import UpdateDetail from "./components/UpdateDetail/UpdateDetail";
import Login from "./components/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from './Redux/index';
import Profile from './components/Profile/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <View style={styles.container}>
                    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="Login" component={Login} />
                        <Stack.Screen name="Profile" component={Profile} />
                        <Stack.Screen name="Register" component={Register} />
                        <Stack.Screen name="UpdateDetail" component={UpdateDetail} />
                        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
                    </Stack.Navigator>
                </View>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
    },
});
