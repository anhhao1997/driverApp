import React from "react";
import { Button, TextInput, View, StyleSheet, ImageBackground, TouchableWithoutFeedback, Text } from "react-native";
import { Formik } from "formik";
import image from "../../assets/Home.jpg";

export default function Register({navigation}) {
    return (
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
            <View style={styles.Regis}>
                <Text style={styles.title}>Đăng ký tài khoản</Text>
                <Formik initialValues={{ email: "" }} onSubmit={(values) => {
                    navigation.navigate("UpdateDetail")
                }}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.backgroundForm}>
                            <TextInput
                                style={styles.input}
                                keyboardType="numeric"
                                placeholder="Số điện thoại"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("soDT")}
                                onBlur={handleBlur("soDT")}
                                value={values.soDT}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Họ và tên"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("hoTen")}
                                onBlur={handleBlur("hoTen")}
                                value={values.hoTen}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mật khẩu"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("matKhau")}
                                onBlur={handleBlur("matKhau")}
                                value={values.matKhau}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Nhập lại Mật khẩu"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("xacNhanMatKhau")}
                                onBlur={handleBlur("xacNhanMatKhau")}
                                value={values.xacNhanMatKhau}
                            />
                            <TextInput
                                style={styles.inputE}
                                placeholder="Email"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />
                            <Button color="#f194ff" onPress={handleSubmit} title="Đăng ký" />
                        </View>
                    )}
                </Formik>
                <TouchableWithoutFeedback onPress={() => {navigation.goBack()}}>
                    <View style={styles.back}>
                        <Text style={styles.iconBack}>&lt;</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    Regis: {
        flex: 1,
        justifyContent: 'space-between',
        width: "100%",
        paddingTop: 50,
    },
    title: {
        textAlign: "center",
        color: "#000",
        backgroundColor: "#fff",
        paddingTop: 5,
        paddingBottom: 5,
        marginBottom: 20,
        fontSize: 20,
    },
    backgroundForm: {
        backgroundColor: "#ffffffcf",
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 15,
        borderRadius: 10,
    },
    input: {
        height: 38,
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 3,
        padding: 10,
        borderColor: "#0066cc",
        borderRadius: 5,
        fontSize: 18,
        color: "#0000cc",
    },
    inputE: {
        height: 38,
        margin: 12,
        marginLeft: 30,
        marginRight: 30,
        borderWidth: 3,
        padding: 10,
        borderColor: "#0066cc",
        borderRadius: 5,
        fontSize: 18,
        color: "#0000cc",
        marginBottom: 20,
    },
    back: {
        backgroundColor: "#fff",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 20,
        marginBottom: 100,
        marginTop: 20,
        borderRadius: 10,
    },
    iconBack: {
        fontSize: 25,
    },
});
