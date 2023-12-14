import { View, Text, Image } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ProfileDetail from "./../ProfileDetail/ProfileDetail";
import Product from "./../Product/Product";
import EditProfile from "./../EditProfile/EditProfile";

const Tab = createBottomTabNavigator();

export default function Profile() {
    return (
        <Tab.Navigator >
            <Tab.Screen name="Thông tin cá nhân" component={ProfileDetail} options={{
              tabBarIcon:() => (
                <Image source={require("../../assets/icon.png")} style={{width: 30, height: 30,}} resizeMode="stretch" />
              )
            }} />
            <Tab.Screen name="Cập nhật" component={EditProfile} options={{
              tabBarIcon:() => (
                <Image source={require("../../assets/edit.png")} style={{width: 30, height: 30,}} resizeMode="stretch" />
              )
            }}/>
            <Tab.Screen name="Đơn hàng" component={Product} options={{
              tabBarIcon:() => (
                <Image source={require("../../assets/detail.png")} style={{width: 30, height: 30,}} resizeMode="stretch" />
              )
            }}/>
        </Tab.Navigator>
    );
}
