import React from "react";
import { View,Text, StyleSheet } from "react-native";
import Box1 from "./Shoppingcart1.children";
import Box2 from "./Shoppingcart2.children";
import Box3 from "./Shoppingcart3.children";

const Shoppingcart = () => {
    return (
        <View>
            <Box1 />
            <Box2 />
            <Box3 />
        </View>
    )
}

export default Shoppingcart