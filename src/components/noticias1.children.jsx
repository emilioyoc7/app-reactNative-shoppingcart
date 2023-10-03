import React from "react";
import { View,StyleSheet,Text,ScrollView, Image } from "react-native";



const BoxNoticias1 = () => {
    return(
        <View style={styles.box}>
            <Image
            source={require('../../fotos/HULT_IBS_Logo_Outline_Black_(cropped).png')}
            style={{width:120, height:60}}
            />
            <Text style={styles.textTitle}>
                Headlines
            </Text>
            <Text style={styles.subTitle}>
                Merchandise
            </Text>
            <Text>
                Stressed about midterms? Find out what other students are doing
                to keep calm and relaxed.
            </Text>
            <Text style={styles.subTitle}>
                ED HELP SERVICE LAUNCHED
            </Text>
            <Text>
                The new service will make it easy for students to access
                key topics, including learning resources, IT help, and...
            </Text>
            <Text  style={styles.textTitle2}>
                Media
            </Text>
            <View style={styles.row}>
                <ScrollView horizontal>
                <View style={styles.box1group}>
                    <View style={styles.box1}>
                        <Image
                        source={require('../../fotos/noticia1.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text>
                        entrevista a cientifico
                    </Text>
                    <Text style={styles.gris}>
                        4,4 mil views
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box2}> 
                    <Image
                        source={require('../../fotos/noticia2.avif')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        virus mundial
                    </Text>
                    <Text style={styles.gris}>
                        1,1 mill views
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box3}>
                        <Image
                        source={require('../../fotos/noticias3.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        new books
                    </Text>
                    <Text style={styles.gris}>
                        100 mill views
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box4}>
                        <Image
                        source={require('../../fotos/noticia4.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        corredora
                    </Text>
                    <Text style={styles.gris}>
                        10 mill views
                    </Text>
                </View>
                </ScrollView>
            </View>
            <Text style={styles.textTitle3}>
                Collage News
            </Text>
            <Text style={styles.subTitle}>
                Boston
            </Text>
            <View style={styles.row}>
                <ScrollView horizontal>
                <View style={styles.box1group}>
                    <View style={styles.box1collage}>
                        <Image
                        source={require('../../fotos/collage1.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Graficas
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        Dolar
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box2collage}> 
                    <Image
                        source={require('../../fotos/collage2.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Oficina
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        Preguntar
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box3collage}>
                        <Image
                        source={require('../../fotos/collage3.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Reporte
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        Mas informacion
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box4collage}>
                        <Image
                        source={require('../../fotos/collage4.jpeg')}
                        style={styles.imagen}
                        />
                    </View>
                    <Text style={styles.textBotton}>
                        Curso
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        Registrarse
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
        color: '#DC391F'
    },
    textTitle2:{
        marginTop:10,
        fontSize:20,
        color: '#2980E3'
    },
    textTitle3:{
        fontSize:20,
        color: '#8E29E3'
    },
    subTitle:{
        marginTop:10,
        marginBottom:10,
        fontSize:14,
        color:'#6E6E6E'
    },
    imagen: {
        width:130,
        height:90,
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
        marginLeft:20,
    },
    box4:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
        marginLeft:20,
    },
    box1group:{
        alignItems: 'center',
        marginLeft:30,
    },
    row :{
        flexDirection:'row'
    },
    gris:{
        fontSize:14,
        color:'#6E6E6E'
    },
    textBottonPrice:{
        fontSize:12,
        color:'#389F1A'
    },
    textBotton:{
        fontSize:11,
    },
    box1collage:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
        marginLeft:26,
    },
    box2collage:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
        marginLeft:20,
    },
    box3collage:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
        marginLeft:20,
    },
    box4collage:{
        width:90,
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
        marginLeft:20,
    },
})

export default BoxNoticias1