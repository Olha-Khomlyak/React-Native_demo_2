import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';


export default function Slider(props) {
    const { navigation } = props;
    return (
        <View style={{height:150, alignSelf: 'flex-end', bottom: 0, position:'absolute'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.container}>
                <Image source={require('../assets/cactus.png')} style={styles.image} />
                <View style={styles.textBox}>
                    <Text style={styles.text}>Cactus</Text>
                </View>
            </View>
            <View style={styles.container}>
                <TouchableOpacity  onPress={()=>{navigation.navigate('PlantPage')}}>
                <Image source={require('../assets/fig.png')} style={styles.image} />
                <View style={styles.textBox}>
                    <Text style={styles.text}>Fig</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/bonsai.png')} style={styles.image} />
                <View style={styles.textBox}>
                    <Text style={styles.text}>Bonsai</Text>
                </View>
            </View>
            <View style={styles.container}>
                <Image source={require('../assets/rubber.png')} style={styles.image} />
                <View style={styles.textBox}>
                    <Text style={styles.text}>Rubber</Text>
                </View>
            </View>
        </ScrollView>
        </View>

    )

}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20
    },
    image: {
        width: 140,
        height: 120,
        resizeMode: 'stretch',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
    },
    textBox: {
        backgroundColor: "#F1F1F1",
        width: 140, height: 30,
        justifyContent: 'center',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold',
        paddingLeft: 30
    }
})