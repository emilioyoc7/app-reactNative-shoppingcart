import React from "react";
import { View,StyleSheet,Text,ScrollView } from "react-native";
import IconoThree from 'react-native-vector-icons/FontAwesome5'
import IconoFor from 'react-native-vector-icons/Feather'




const Box1 = () => {
    return(
        <View style={styles.box}>
            <Text style={styles.textTitle}>
                Student Spaces
            </Text>
            <Text style={styles.subTitle}>
                Jobs/ work Experencie
            </Text>
            <View style={styles.row}>
                <ScrollView horizontal>
                <View style={styles.box1group}>
                    <View style={styles.box1}>
                        <IconoThree style={styles.icono} name="hamburger" />
                    </View>
                    <Text style={styles.textBotton}>
                        Restaurants & Bars
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        $25
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box2}>
                        <IconoThree style={styles.icono} name="file-signature" />
                    </View>
                    <Text style={styles.textBotton}>
                        Interships
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        Find
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box3}>
                        <IconoFor style={styles.icono} name="refresh-ccw" />
                    </View>
                    <Text style={styles.textBotton}>
                        Volunteering
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        Join
                    </Text>
                </View>
                <View style={styles.box1group}>
                    <View style={styles.box4}>
                        <IconoThree style={styles.icono} name="lightbulb" />
                    </View>
                    <Text style={styles.textBotton}>
                        Studen startups
                    </Text>
                    <Text style={styles.textBottonPrice}>
                        Create
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
        color: '#DC2504'
    },
    subTitle:{
        marginLeft:10,
        fontSize:14,
        color:'#6E6E6E'
    },
    box1:{
        width:90,
        backgroundColor:'#E1DB06',
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    box2:{
        width:90,
        backgroundColor:'#1DB505',
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    box3:{
        width:90,
        backgroundColor:'#056DB5',
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    box4:{
        width:90,
        backgroundColor:'#BB31EF',
        alignItems: 'center',
        borderRadius:15,
        marginTop:10,
    },
    icono:{
        fontSize:60,
        color:'#fff'
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
        marginLeft:10,
    },
    row :{
        flexDirection:'row'
    }
})

export default Box1