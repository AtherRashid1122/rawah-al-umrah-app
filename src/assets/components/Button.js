import { StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native'
import React from 'react'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import colors from '../../theme/colors'
const Button = () => {
    return (
        <TouchableOpacity style={styles.buttonstyle}>
            <Text style={styles.textcolor}>Book Transport</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    buttonstyle: {
        height: 40, width: width/1.6, backgroundColor: colors.buttoncolor,
        justifyContent:'center',
        alignContent:'center',
        alignItems:'center',
        borderRadius:10,
    },
    textcolor:{
        color:colors.textcolor,
        fontSize:16
    }
})