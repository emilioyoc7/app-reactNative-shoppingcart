import React from "react";
import { View,Text,StyleSheet, Image } from "react-native";


const ImageProfile = () =>{
    return (
        <View style={styles.container}>
            <View>
                <Image
                source={require('../../fotos/profile.jpeg')}
                style={styles.image}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 50,
        marginTop:65,
        marginRight:10,
    },
    image:{
        width:50,
        height:50,
        borderRadius:50,
    }
})
export default ImageProfile