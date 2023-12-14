import React from "react";
import { Formik, Field } from "formik";
import { ImageBackground, StyleSheet, Text, View, TouchableWithoutFeedback, TextInput, SafeAreaView, Button, } from "react-native";
import image from "../../assets/Home.jpg";
import * as Yup from 'yup';

export default function Login({navigation}) {

    return (
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ justifyContent: "center", width: "100%", height: "100%" }}>
                    <Text style={styles.text}>Đăng nhập</Text>
                    <Formik initialValues={{ }} onSubmit={(values) => {
                        // Lấy dữ liệu từ form
                        console.log(values);
                        navigation.navigate("Profile")
                        // navigation.navigate("UpdateDetail")
                    }}>
                        {({ handleChange, handleBlur, handleSubmit, values }) => (
                            <View style={styles.backgroundForm}>
                                <TextInput
                                    style={styles.input}
                                    keyboardType="numeric"
                                    placeholder="Số điện thoại"
                                    placeholderTextColor="#fff"
                                    onChangeText={handleChange("soDT")}
                                    onBlur={handleBlur("Sai so DT")}
                                    value={values.soDT}
                                />
                                <TextInput
                                    style={styles.input}
                                    placeholder="Mật khẩu"
                                    placeholderTextColor="#fff"
                                    onChangeText={handleChange("matKhau")}
                                    onBlur={handleBlur("matKhau")}
                                    value={values.matKhau}
                                />
                                <View style={{marginLeft: 100, marginRight: 100,}}>
                                    <Button onPress={handleSubmit} title="Đăng nhập"/>
                                </View>
                            </View>
                        )}
                    </Formik>
                    <View style={styles.forgotRegis}>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("ForgotPassword")}>
                            <View style={styles.buttonForgot}>
                                <Text style={styles.textRe}>Quên mật khẩu?</Text>
                            </View>
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate("Register")}>
                            <View style={styles.buttonRegister}>
                                <Text style={styles.textRe}>Đăng kí</Text>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    text: {
        color: "white",
        fontSize: 30,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0",
    },
    input: {
        height: 50,
        margin: 20,
        borderWidth: 3,
        padding: 10,
        borderColor: "#fff",
        borderRadius: 10,
        fontSize: 20,
        color: "#fff",
    },
    textForgot: {
        color: "#ccc",
        fontSize: 18,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    textRe: {
        color: "#fff",
        fontSize: 18,
        lineHeight: 40,
        fontWeight: "bold",
        textAlign: "center",
    },
    buttonRegister: {
        width: "40%",
        backgroundColor: "#000000c0",
        borderRadius: 10,
    },
    buttonForgot: {
        marginBottom: 20,
        width: "40%",
    },
    forgotRegis: {
        alignItems: "flex-end",
        marginRight: 25,
    },
});
