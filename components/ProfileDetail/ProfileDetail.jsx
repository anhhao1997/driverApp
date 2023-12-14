import { View, Text, Image, StyleSheet, ImageBackground } from "react-native";
import React from "react";
import image from "../../assets/Home.jpg";

export default function ProfileDetail() {
    return (
        <ImageBackground source={image} resizeMode="stretch" style={styles.image}>
            <View style={styles.form}>
                <Image source={require("../../assets/profile.png")} style={{ width: 80, height: 80, marginBottom: 35,  }} resizeMode="stretch" />
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Họ tên:</Text>
                    <Text style={styles.txtStyle1}>Nguyễn Văn A</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Email:</Text>
                    <Text style={styles.txtStyle1}>nguyenVanA@gmail.com</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Ngày sinh:</Text>
                    <Text style={styles.txtStyle1}>04/07/1999</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Loại tài khoản:</Text>
                    <Text style={styles.txtStyle1}>Tài xế</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Mã bàng lái:</Text>
                    <Text style={styles.txtStyle1}>123456</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Loại phương tiện:</Text>
                    <Text style={styles.txtStyle1}>123456</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Biển số xe:</Text>
                    <Text style={styles.txtStyle1}>123456</Text>
                </View>
                <View style={styles.txt}>
                    <Text style={styles.txtStyle}>Màu xe:</Text>
                    <Text style={styles.txtStyle1}>123456</Text>
                </View>
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
        paddingTop: 35,
        paddingBottom: 35,
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
        fontSize: 17,
    },
    txtStyle1: {
        marginRight: 20,
        fontSize: 17,
    },
});
