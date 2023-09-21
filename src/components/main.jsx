import React from 'react';
import {ImageBackground, StyleSheet, View } from 'react-native';
import AppBar from './AppBar.component';
import Profile from './profile.component';
import ImageProfile from './imageProfile.component';



const Main = () => (
    <ImageBackground
    source={require('../../fotos/foto3.png')}
    style={styles.background}
    >    
    <View style={styles.containerProfile}>
        <Profile />
        <ImageProfile />
    </View>
    <AppBar />
    </ImageBackground>
);

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    containerProfile : {
        flexDirection:'row',
        justifyContent:'space-between',
    }
});

export default Main;