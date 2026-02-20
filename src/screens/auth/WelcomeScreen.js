import { StyleSheet, Text, View, Image, ImageBackground, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import Button from '../../assets/components/Button'
import colors from '../../theme/colors'
const WelcomeScreen = () => {
    return (
        <ImageBackground style={{ flex: 1 }}
            source={require('../../assets/images/backgroundimage.png')}
            resizeMode='cover'
        >
            <SafeAreaView style={styles.main} >

            </SafeAreaView>
            <SafeAreaView style={styles.main1} >
                <Button />
                <View style={styles.textview}>
                    <Text style={styles.text}>
                        Already have an Account ?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.touchabletext}>
                            LOGIN
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.textview1}>
                    <Text style={styles.text}>
                        Sign-Up as an Agent ?
                    </Text>
                    <TouchableOpacity>
                        <Text style={styles.touchabletext}>
                            SIGN-UP
                        </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>

        </ImageBackground >
    )
}

export default WelcomeScreen

const styles = StyleSheet.create({
    main: {
        flex: 1 / 1.4,

    },
    main1: {
        flex: 1 / 2,
        // backgroundColor:'blue',
        // justifyContent:'center',
        alignContent: 'center',
        alignItems: 'center'
    },
    textview: {
        flexDirection: 'row',
        marginTop: 30
    },
    text: {
        fontSize: 14,
        // color:colors.themecolor
        // fontWeight:'bold'

    },
    touchabletext: {
        fontSize: 16,
        marginLeft: 8,
        textDecorationLine: 'underline',
        color: colors.backgroundColor,
        fontWeight: 'bold'
    },
    textview1: {
        flexDirection: 'row',
        marginTop: 15,

    },
})