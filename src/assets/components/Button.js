import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import colors from '../../theme/colors'
import { useNavigation } from '@react-navigation/native'
const Button = ({ title, onPress }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={onPress}  style={styles.buttonstyle}>
            <Text style={styles.textcolor}>{title}</Text>
        </TouchableOpacity>
    )
}
export default Button

const styles = StyleSheet.create({
    buttonstyle: {
        height: 40, width: width / 1.6, backgroundColor: colors.buttoncolor,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textcolor: {
        color: colors.textcolor,
        fontSize: 16
    }
})