import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

export default function SliderImage(props){
    const { imageSource } = props;
    console.log('props', props)
    return (
        <View>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textBox}>
                <Text style={styles.text}>Cactus</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 170,
        height: 150,
        resizeMode: 'stretch',
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20
    },
    textBox: {
        backgroundColor: "#F1F1F1", 
        width: 170, height: 30, 
        justifyContent: 'center', 
        borderBottomLeftRadius: 20, 
        borderBottomRightRadius: 20 
    },
    text:{ 
        fontSize: 15, 
        fontWeight: 'bold', 
        paddingLeft: 30 
    }
})