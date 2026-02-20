import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import WelcomeScreen from './src/screens/auth/WelcomeScreen'
const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      <WelcomeScreen/>
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({})