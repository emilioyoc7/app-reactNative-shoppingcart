import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, ScrollView} from 'react-native';
import Icono from 'react-native-vector-icons/AntDesign'
import IconoTwo from 'react-native-vector-icons/Entypo'
import IconoThree from 'react-native-vector-icons/FontAwesome5'

const LogicAppBar = ({ onTabChange }) => {
    const [activeTab, setActiveTab] = useState('Home');

    const handleTabPress = (tabName) => {
    setActiveTab(tabName);
    onTabChange(tabName); 
};

return (
    <View style={styles.container}>
            <TouchableOpacity
            style={[styles.tab, activeTab === 'Home' && styles.activeTab]}
            onPress={() => handleTabPress('Home')}
            >
            <Icono name='plus' style={styles.tabText} />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.tab, activeTab === 'About' && styles.activeTab]}
            onPress={() => handleTabPress('About')}
            >
            <Icono name='shoppingcart' style={styles.tabText} />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.tab, activeTab === 'info' && styles.activeTab]}
            onPress={() => handleTabPress('info')}
            >
            <IconoTwo name='book' style={styles.tabText} />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.tab, activeTab === 'zona4' && styles.activeTab]}
            onPress={() => handleTabPress('zona4')}
            >
            <IconoTwo name='layers' style={styles.tabText} />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.tab, activeTab === 'noticias' && styles.activeTab]}
            onPress={() => handleTabPress('noticias')}
            >
            <IconoThree name='globe' style={styles.tabText} />
            </TouchableOpacity>
            <TouchableOpacity
            style={[styles.tab, activeTab === 'zona6' && styles.activeTab]}
            onPress={() => handleTabPress('zona6')}
            >
            <IconoTwo name='users' style={styles.tabText} />
            </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 60,
    },
    tab: {
    padding: 10,
    },
    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: 'white',
    },
    tabText: {
        color: 'white',
        fontSize: 25,
        marginLeft: 10,
        marginRight:10
    },
});

export default LogicAppBar;
