import React from "react";
import { Button, TextInput, View, StyleSheet, ImageBackground, TouchableWithoutFeedback, Text } from "react-native";
import { Formik, Field } from "formik";
import image from "../../assets/Home.jpg";
import * as Yup from "yup";

export default function UpdateDetail({ navigation }) {
    return (
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
            <View style={styles.Regis}>
                <Text style={styles.title}>Cập nhật thông tin</Text>
                <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <View style={styles.backgroundForm}>
                            <TextInput
                                style={styles.input}
                                placeholder="Ngày sinh"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("ngaySinh")}
                                onBlur={handleBlur("ngaySinh")}
                                value={values.ngaySinh}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Mã bằng lái"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("maBangLai")}
                                onBlur={handleBlur("maBangLai")}
                                value={values.maBangLai}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Loại phương tiện"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("loaiPhuongTien")}
                                onBlur={handleBlur("loaiPhuongTien")}
                                value={values.loaiPhuongTien}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Biển số xe"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("bienSoXe")}
                                onBlur={handleBlur("bienSoXe")}
                                value={values.bienSoXe}
                            />
                            <TextInput
                                style={styles.input}
                                placeholder="Màu xe"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("mauXe")}
                                onBlur={handleBlur("mauXe")}
                                value={values.mauXe}
                            />
                            <TextInput
                                style={styles.inputE}
                                placeholder="Email"
                                placeholderTextColor="#8080ff"
                                onChangeText={handleChange("email")}
                                onBlur={handleBlur("email")}
                                value={values.email}
                            />
                            <Button color="#f194ff" onPress={handleSubmit} title="Cập nhật thông tin" />
                        </View>
                    )}
                </Formik>
                <TouchableWithoutFeedback
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
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
        justifyContent: "space-between",
        width: "100%",
        paddingTop: 50,
    },
    title: {
        textAlign: "center",
        color: "#000",
        backgroundColor: "#ffffffcf",
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
        backgroundColor: "#ffffffcf",
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
