import React, { Component } from 'react';
import { StyleSheet, View, EventEmitter, Text } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { Icon } from 'react-native-elements';

const {
    set,
    cond,
    eq,
    spring,
    startClock,
    stopClock,
    clockRunning,
    defined,
    Value,
    Clock,
    event
} = Animated;

function runSpring(clock, value, velocity, dest) {
    const state = {
        finished: new Value(0),
        velocity: new Value(0),
        position: new Value(0),
        time: new Value(0)
    };

    const config = {
        damping: 100,
        mass: 2,
        stiffness: 121.6,
        overshootClamping: false,
        restSpeedThreshold: 0.001,
        restDisplacementThreshold: 0.001,
        toValue: new Value(0)
    };

    return [
        cond(clockRunning(clock), 0, [
            set(state.finished, 0),
            set(state.velocity, velocity),
            set(state.position, value),
            set(config.toValue, dest),
            startClock(clock)
        ]),
        spring(clock, state, config),
        cond(state.finished, stopClock(clock)),
        state.position
    ];
}

export default class SwipeableButton extends Component {

    constructor() {
        super()
        this.translateX = new Value(0)
        const dragX = new Value(0)
        const state = new Value(-1)
        const dragVX = new Value(0)


        this.onGestureEvent = Animated.event([
            {
                nativeEvent: {
                    translationX: dragX,
                    velocity: dragVX,
                    state: state
                }
            }
        ]);
        const clock = new Clock()
        const transX = new Value()
        this.translateX = cond(eq(state, State.ACTIVE), [
            //state active
            stopClock(clock),
            set(transX, dragX),
            transX
        ], [
            //state inactive
            set(transX, cond(
                defined(transX), runSpring(clock, transX, dragVX, 0), 0
            )),
        ])
    }

    render() {
        return (
            <View style={styles.container}>

                <PanGestureHandler activeOffsetX={-1} onGestureEvent={this.onGestureEvent} onHandlerStateChange={this.onGestureEvent}>
                    <Animated.View style={[styles.button,
                    {
                        transform: [{ translateX: this.translateX }]
                    }]}
                    >
                        <View style={styles.buttonContainer}>
                            <Icon
                                name={this.props.iconName}
                                type={this.props.iconType}
                                size={30}
                                color={this,this.props.iconColor}
                                iconStyle={{ padding: 10 }}
                                containerStyle={{ backgroundColor: '#fff', borderRadius: 15, marginRight: 20 }}
                            />
                            <View>
                                <Text style={styles.title}>{this.props.title}</Text>
                                <Text style={styles.subTitle}>This plant needs {this.props.subTitle}</Text>
                            </View>


                        </View>
                    </Animated.View>
                </PanGestureHandler>
                <View style={styles.boxBehind}>
                    <Icon
                        name='check'
                        type='feather'
                        size={40}
                        color='#fff'
                        iconStyle={{ marginRight: 10 }}
                    />
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        height: 80,
        marginBottom:25
    },
    button: {
        width: '90%',
        height: 80,
        backgroundColor: '#F1F1F1',
        position: "absolute",
        zIndex: 1,
        borderRadius: 20
    },
    boxBehind: {
        width: '90%',
        height: 80,
        backgroundColor: '#A5CC70',
        borderRadius: 20,
        justifyContent: "center",
        alignItems: 'flex-end',
    },
    buttonContainer: {
        flexDirection: 'row',
        flex: 1,
        alignItems: "center",
        paddingLeft:20,
    },
    title: {
        fontSize: 17,
        fontWeight: '600',
        paddingBottom: 5,
        color: '#000'
    },
    subTitle: {
        fontSize: 15,
        color: 'gray'
    }

})