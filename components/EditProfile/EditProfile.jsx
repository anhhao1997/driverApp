import { Button, TextInput, Image, View, StyleSheet, ImageBackground, TouchableWithoutFeedback, Text } from "react-native";
import React from "react";
import image from "../../assets/Home.jpg";
import { Formik, Field } from "formik";

export default function EditProfile() {
    return (
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
            <View style={styles.form}>
                <Image source={require("../../assets/edit.png")} style={{ width: 80, height: 80, marginBottom: 20, borderRadius: 20 }} resizeMode="stretch" />
                <Formik initialValues={{}} onSubmit={(values) => console.log(values)}>
                    {({ handleChange, handleBlur, handleSubmit, values }) => (
                        <>
                            <View style={styles.txt}>
                                <Text style={styles.txtStyle}>Họ tên:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="hoTen"
                                    placeholderTextColor="#8080ff"
                                    onChangeText={handleChange("hoTen")}
                                    onBlur={handleBlur("Họ tên")}
                                    value={values.hoTen}
                                />
                            </View>
                            <View style={styles.txt}>
                                <Text style={styles.txtStyle}>Email:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="email"
                                    placeholderTextColor="#8080ff"
                                    onChangeText={handleChange("email")}
                                    onBlur={handleBlur("Email")}
                                    value={values.hoTen}
                                />
                            </View>
                            <View style={styles.txt}>
                                <Text style={styles.txtStyle}>Ngày sinh:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Ngày sinh"
                                    placeholderTextColor="#8080ff"
                                    onChangeText={handleChange("ngaySinh")}
                                    onBlur={handleBlur("ngaySinh")}
                                    value={values.hoTen}
                                />
                            </View>
                            <View style={styles.txt}>
                                <Text style={styles.txtStyle}>Mã bàng lái:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Mã bằng lái"
                                    placeholderTextColor="#8080ff"
                                    onChangeText={handleChange("maBangLai")}
                                    onBlur={handleBlur("maBangLai")}
                                    value={values.maBangLai}
                                />
                            </View>
                            <View style={styles.txt}>
                                <Text style={styles.txtStyle}>Loại phương tiện:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Loại phương tiện"
                                    placeholderTextColor="#8080ff"
                                    onChangeText={handleChange("loaiPhuongTien")}
                                    onBlur={handleBlur("loaiPhuongTien")}
                                    value={values.loaiPhuongTien}
                                />
                            </View>
                            <View style={styles.txt}>
                                <Text style={styles.txtStyle}>Biển số xe:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Biển số xe"
                                    placeholderTextColor="#8080ff"
                                    onChangeText={handleChange("bienSoXe")}
                                    onBlur={handleBlur("bienSoXe")}
                                    value={values.bienSoXe}
                                />
                            </View>
                            <View style={styles.txt}>
                                <Text style={styles.txtStyle}>Màu xe:</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholder="Màu xe"
                                    placeholderTextColor="#8080ff"
                                    onChangeText={handleChange("mauXe")}
                                    onBlur={handleBlur("mauXe")}
                                    value={values.mauXe}
                                />
                            </View>
                            <View style={styles.margin}></View>
                            <Button color="#f194ff" onPress={handleSubmit} title="Cập nhật thông tin" />
                        </>
                    )}
                </Formik>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
    },
    form: {
        backgroundColor: "#ffffffcf",
        width: "100%",
        alignItems: "center",
        paddingTop: 30,
        paddingBottom: 30,
        borderRadius: 20,
    },
    txt: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        backgroundColor: "#ffffffff",
    },
    txtStyle: {
        marginLeft: 20,
        fontSize: 15,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: "#0066cc",
        fontSize: 15,
        color: "#0000cc",
        marginRight: 20,
    },
    margin: {
        marginTop: 20,
    },
});
