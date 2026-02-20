import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React from 'react'
import WelcomeScreen from './src/screens/auth/WelcomeScreen'
import { NavigationContainer } from '@react-navigation/native'
import RootNavigator from './src/navigation/RootNavigator'
const App = () => {
  return (
       <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})