import { View, Text, Image, StyleSheet, ImageBackground, Button } from "react-native";
import React from "react";
import image from "../../assets/Home.jpg";
import { useDispatch, useSelector } from "react-redux";

export default function ProfileDetail({ navigation }) {
    const { driver } = useSelector((state) => state.ReducerDriver);
    return (
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
            <View style={styles.form}>
                <Image source={require("../../assets/profile.png")} style={{ width: 80, height: 80, marginBottom: 35,  }} resizeMode="stretch" />
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Họ tên:</Text>
                    <Text style={styles.txtStyle1}>{driver.data.hoTen}</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Email:</Text>
                    <Text style={styles.txtStyle1}>{driver.data.email}</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Ngày sinh:</Text>
                    <Text style={styles.txtStyle1}>{driver.data.soDT}</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Số điện thoại</Text>
                    <Text style={styles.txtStyle1}>{driver.data.loaiTK}</Text>
                </View>   
                <View style={styles.margin}></View>

                <Button color="#f194ff" onPress={() => {
                    navigation.navigate("Login")
                }} title="Đăng xuất" />
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
        borderRadius: 20
    },
    txt: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 12,
        backgroundColor: "#ffffffff",
        borderWidth: 0.2,
    },
    txtStyle: {
        marginLeft: 20,
        fontSize: 15,
    },
    txtStyle1: {
        marginRight: 20,
        fontSize: 15,
    },
    margin: {
        marginTop: 20,
    },
});
