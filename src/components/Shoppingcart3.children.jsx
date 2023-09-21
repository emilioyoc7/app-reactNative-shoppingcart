import React from "react";
import { View,StyleSheet,Text,ScrollView, Image } from "react-native";



const Box2 = () => {
    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>
                Marketplace
            </Text>
            <Text style={styles.subTitle}>
                Art
            </Text>
            <View style={styles.row}>
                <ScrollView horizontal>
                <View style={styles.box1group}>
                    <View style={styles.box1}>
                        <Image
                        source={require('../../fotos/cuadro1.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Burbujas
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $300
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box2}> 
                    <Image
                        source={require('../../fotos/cuadro2.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Hojas verdes
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $599
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box3}>
                        <Image
                        source={require('../../fotos/cuadro3.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Nubes
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $99
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box4}>
                        <Image
                        source={require('../../fotos/cuadro4.jpg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Caminos
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $249
                    </Text>
                </View>
                </ScrollView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        backgroundColor:'#FFFFFF',
        marginLeft:10,
        marginRight:10,
        borderRadius:15,
        marginTop:20,
        padding:10
    },
    textTitle:{
        fontSize:20,
        color: '#309DED'
    },
    subTitle:{
        marginLeft:10,
        fontSize:14,
        color:'#6E6E6E'
    },
    box1:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    box2:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    box3:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    box4:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    textBotton:{
        fontSize:11,
    },
    textBottonPrice:{
        fontSize:12,
        color:'#389F1A'
    },
    box1group:{
        alignItems: 'center',
        marginLeft:30,
    },
    row :{
        flexDirection:'row'
    },
    imagen: {
        width:110,
        height:100,
    }
})

export default Box2