import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Button,
    Image,
    ImageBackground,
    Animated
} from 'react-native';
import SliderImage from '../components/SliderComponent';
import Slider from '../components/Slider';
import { Icon } from 'react-native-elements'
import { RectButton } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";
import SwipeableButton from '../components/SwipeableButton';


export default class Home extends Component {
    static navigationOptions = {
        headerShown: false,
        title: "",
        headerStyle: {
            shadowOpacity: 0,
        },
    };

    render() {
        const imageSource = require('../assets/fig.png')
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <View style={{ backgroundColor: '#fff', height: 300 }}>
                    <ImageBackground
                        style={{ width: '100%', height: '100%' }}
                        imageStyle={{ height: '75%', borderBottomRightRadius: 30, borderBottomLeftRadius: 30 }}
                        source={require('../assets/background.png')} >
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingTop: 65 }}>
                            <View>
                                <Text style={{ fontSize: 30, color: '#fff', fontWeight: '600' }}>Hi Josh!</Text>
                                <Text style={{ fontSize: 17, color: '#fff', fontWeight: '600' }}>Browsw through your plans</Text>
                            </View>
                            <Icon
                                name='plus'
                                type='antdesign'
                                color='#fff'
                                iconStyle={{ padding: 10 }}
                                containerStyle={{ backgroundColor: "#FDE834", borderRadius: 15 }}
                            />
                        </View>
                        <Slider imageSource={imageSource} navigation={this.props.navigation} />
                    </ImageBackground>
                </View>

                <View style={{ flexDirection: "row", paddingHorizontal: 20, paddingVertical: 30, alignItems: 'center' }}>
                    <Icon
                        name='bells'
                        type='antdesign'
                        color='#8BC349'
                        containerStyle={{ paddingRight: 5 }} />
                    <Text style={{ color: '#000', fontWeight: '600', fontSize: 17 }}>Alerts</Text>
                </View>
                <SwipeableButton
                    iconType='feather'
                    iconName='droplet'
                    iconColor='#8fc0d2'
                    title="Cactus"
                    subTitle="water (125 ml)"
                />
                <SwipeableButton
                    iconType='entypo'
                    iconName='leaf'
                    iconColor='#a5cc70'
                    title="Bansai"
                    subTitle="fertilizer (10 ml)"
                />
                <SwipeableButton
                    iconType='feather'
                    iconName='droplet'
                    iconColor='#8fc0d2'
                    title="Fig"
                    subTitle="water (125 ml)"
                />
                <SwipeableButton
                    iconType='entypo'
                    iconName='leaf'
                    iconColor='#a5cc70'
                    title="Rubber"
                    subTitle="fertilizer (10 ml)"
                />
            </View>
        )
    }
}