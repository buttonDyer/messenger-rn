import { React, useState, useEffect } from 'react'

import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'

import { Button, Input, Image } from '@rneui/base'

import { StatusBar } from 'expo-status-bar'

import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser) {
        navigation.replace('Home')
      }
    })

    return unsubscribe
  }, [])

  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: 'https://i1.sndcdn.com/artworks-ufXX9P49z3xnCzXY-Q5OaYQ-t500x500.jpg',
        }}
        style={{ width: 200, height: 200, borderRadius: 20, marginBottom: 25 }}
      />
      <View style={styles.inputContainer}>
        <Input
          placeholder="Email"
          autoFocus
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          secureTextEntry
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={signIn}
        />
      </View>
      <Button
        color="#3C1A67"
        containerStyle={styles.button}
        onPress={signIn}
        title="Login"
      />
      <Button
        onPress={() => navigation.navigate('Register')}
        titleStyle={{ color: '#3C1A67' }}
        buttonStyle={{ borderColor: '#3C1A67' }}
        containerStyle={styles.button}
        type="outline"
        title="Register"
      />
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
  },
  button: {
    width: 200,
    marginTop: 10,
  },
})
