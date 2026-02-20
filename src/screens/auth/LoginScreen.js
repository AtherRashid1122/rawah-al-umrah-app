import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import colors from '../../theme/colors'
import Icon from 'react-native-vector-icons/Feather'
const height = Dimensions.get('window').height
const width = Dimensions.get('window').width
import Button from '../../assets/components/Button'
const LoginScreen = () => {
  const navigation=useNavigation()
  const [secure, setSecure] = useState(true)
  return (
    <SafeAreaView style={styles.main}>
      <ImageBackground
        source={require('../../assets/images/backgroundimage.png')}
        style={styles.logo}>
      </ImageBackground>
      <View style={styles.formpage}>
        <Text style={styles.Logintext}>
          Log In
        </Text>
        <View style={styles.inputContainer}>
          <Icon name="mail" size={20} color="#666" style={styles.leftIcon} />
          <TextInput
            placeholder="Type your email"
            placeholderTextColor="#999"
            style={styles.input}
          />
        </View>

        <View style={styles.inputContainer}>
          <Icon name="lock" size={20} color="#666" style={styles.leftIcon} />
          <TextInput
            placeholder="Type your Password"
            placeholderTextColor="#999"
            style={styles.input}
            secureTextEntry={secure}
          />
          <TouchableOpacity onPress={() => setSecure(!secure)}>
            <Icon name={secure ? 'eye-off' : 'eye'} size={20} color="#666" style={styles.leftIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.forgotpass}>
          <TouchableOpacity>
            <Text style={styles.fortgottext}>
              ForgotPassword?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonview}>
          <Button
           title="LOG IN" 
           onPress={()=>navigation.navigate('Home')}
           />
        </View>
                 <View style={styles.textview1}>
                            <Text style={styles.text}>
                                Sign-Up as an Agent ?
                            </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
                                <Text style={styles.touchabletext}>
                                    SIGN-UP
                                </Text>
                            </TouchableOpacity>
                        </View>
      </View>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({

  main: {
    flex: 1,
    backgroundColor: 'rgba(252,242,235,0.85)',

  },
  logo: {
    flex: 0.50,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    overflow: 'hidden',   // VERY IMPORTANT for border radius
    justifyContent: 'center',
    alignItems: 'center',
  },
  formpage: {
    backgroundColor: 'white',
    borderWidth: 0.5,
    flex: 0.50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 10,
    transform: [{ translateY: -40 }],
    alignContent: 'center',
    alignItems: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    height: 55,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    width: width / 1.2,
    marginTop:20
  },

  leftIcon: {
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  forgotpass: {
    alignItems: 'flex-end',
    width: width / 1.2,
    marginTop: 5

  },
  fortgottext: {
    textDecorationLine: 'underline',
    color: '#8c004f',
  },
  buttonview:{
    marginTop:40
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
        marginTop: 25,

    },
    Logintext:{
      fontSize:40,
      fontWeight:'bold',
      color:colors.backgroundColor
    }
})