import React from "react";
import { View,Text,StyleSheet } from "react-native";


const Profile = () =>{
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Hello Wolf
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        marginTop:65,
        justifyContent: 'flex-start',
    },
    text:{
        fontSize:30,
        marginLeft:10,
        color:'white',
    }
})
export default Profile