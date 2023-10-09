
import { View, StyleSheet, Text, ImageBackground } from "react-native";
import IconFive from "react-native-vector-icons/Fontisto";
import IconoThree from "react-native-vector-icons/FontAwesome5";

const Box1Book = () => {
    function generarColorAleatorio() {
        const letras = "0123456789ABCDE";
        let color = "#";
        for (let i = 0; i < 6; i++) {
        color += letras[Math.floor(Math.random() * 15)];
        }
        return color;
    }


    const boxIconBackgroundColor = generarColorAleatorio();

    return (
        <View style={styles.boxP}>
            <View style={styles.boxS}>
                <ImageBackground
                source={require('../../fotos/google-maps.png')}
                style={[styles.background,{borderRadius:15}]}
                resizeMode="cover"
                >
                <Text style={styles.text}>Hello, World!</Text>
                </ImageBackground>
            </View>
            <View style={styles.boxS}>
                <View>
                    <View style={styles.boxIcon}>
                        <View style={[styles.boderBox,{ backgroundColor: boxIconBackgroundColor }]}>
                            <IconFive style={styles.icono} name="laboratory" />
                        </View>
                        <View style={[ styles.boderBox,{ backgroundColor: boxIconBackgroundColor }]}>
                            <IconoThree style={styles.icono} name="swimmer" />
                        </View>
                    </View>
                    <View style={styles.boxIcon}>
                        <View style={[ styles.boderBox,{ backgroundColor: boxIconBackgroundColor }]}>
                            <IconoThree style={styles.icono} name="tv" />
                        </View>
                        <View style={[styles.boderBox,{ backgroundColor: boxIconBackgroundColor }]}>
                            <IconoThree style={styles.icono} name="baseball-ball" />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    boxS: {
        backgroundColor: "#fff",
        margin: 20,
        borderRadius:15,
    },
    boxP: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
    },
    icono: {
        fontSize: 50,
        margin: 10,
        color:'#FFFFFF',
    },
    boxIcon: {
        display: "flex",
        flexDirection:'row',
    },
    boderBox:{
        borderRadius:15,
        margin:5,
        marginTop:13
    },
    background: {
        flex: 1,
        justifyContent: 'center',
    }
});

export default Box1Book;
