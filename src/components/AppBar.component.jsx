import React, { useState } from 'react';
import { View, SafeAreaView, Text} from 'react-native';
import LogicAppBar from './Appbar.logic';
import Shoppingcart from './Shoppingcart.component';

const AppBar = () => {
    const [activeTab, setActiveTab] = useState('Home'); 
    const handleTabChange = (tabName) => {
    setActiveTab(tabName);
};


const renderContent = () => {
    if (activeTab === 'Home') {
        return (
            <View>
                <Text>zona1</Text>
            </View>
    );
    }else if (activeTab === 'About') {
        return (
            <Shoppingcart />
    );
    }
    else if (activeTab === 'info') {
        return (
            <View>
                <Text>zona3</Text>
            </View>
    );
    }else if (activeTab === 'zona4') {
        return (
            <View>
                <Text>zona3</Text>
            </View>
    );
    }else if (activeTab === 'zona5') {
        return (
            <View>
                <Text>zona3</Text>
            </View>
    );
    }else if (activeTab === 'zona6') {
        return (
            <View>
                <Text>zona3</Text>
            </View>
    );
    }
};

return (
    <SafeAreaView>
        <LogicAppBar onTabChange={handleTabChange}/>
        {renderContent()}
    </SafeAreaView>
    );
};


export default AppBar;
