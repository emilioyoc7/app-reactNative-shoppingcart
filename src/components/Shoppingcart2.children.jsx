import React from "react";
import { View,StyleSheet,Text,ScrollView, Image } from "react-native";



const Box2 = () => {
    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>
                Student Store
            </Text>
            <Text style={styles.subTitle}>
                Merchandise
            </Text>
            <View style={styles.row}>
                <ScrollView horizontal>
                <View style={styles.box1group}>
                    <View style={styles.box1}>
                        <Image
                        source={require('../../fotos/batman.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Playera
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $199
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box2}> 
                    <Image
                        source={require('../../fotos/spikes2.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Spikes
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $2500
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box3}>
                        <Image
                        source={require('../../fotos/sudadera.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Sudadera
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $799
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box4}>
                        <Image
                        source={require('../../fotos/balon.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Balon
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $1200
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
        color: '#D5CB0A'
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