import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Animated, { useAnimatedStyle, useSharedValue, withRepeat,  withTiming } from 'react-native-reanimated';

const SearchingLayout= () => {

    const scaleValue = useSharedValue(1);
    const opacityValue = useSharedValue(1);
    const textScaleValue = useSharedValue(0.4)

    const animatedCircle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleValue.value }],
            opacity: opacityValue.value,
        }
    })

    const animatedTextStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: textScaleValue.value }],
        }
    })

    const startRippleAnimation = () => {
        scaleValue.value = withRepeat(withTiming(3, { duration: 1000 }), -1);
        opacityValue.value = withRepeat(withTiming(0, { duration: 1500 }), -1);
        textScaleValue.value = withRepeat(withTiming(1, { duration: 1500 }), -1);
    };

    useEffect(() => {
        startRippleAnimation()
    }, [])

    return (
        <View style={styles.rippleView}>
            <View style={[styles.circle]}>
                <Animated.View style={[animatedCircle, styles.innerCircle]}>
                </Animated.View>
                <Animated.Text style={[animatedTextStyle, styles.innerText]}>Searching</Animated.Text>
            </View>
        </View>
    )
}

export default SearchingLayout

const styles = StyleSheet.create({
    rippleView: {
        width: wp(80),
        height: wp(80),
        justifyContent: "center",
        alignItems: "center"
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 200,
        backgroundColor: 'green'
    },
    innerCircle: {
        width: "100%",
        height: "100%",
        borderRadius: 200,
        backgroundColor: 'green',
        justifyContent: "center",
    },
    innerText: {
        fontSize: 14,
        alignSelf: "center",
        fontWeight: "bold",
        position: "absolute",
        top: wp(10),
        color:'white'
    }
})