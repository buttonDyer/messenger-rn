import { React, useState } from 'react'

import { StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native'

import { Button, Input, Image } from '@rneui/base'
import { StatusBar } from 'expo-status-bar'

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = () => {}

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={{
          uri: 'https://i1.sndcdn.com/artworks-ufXX9P49z3xnCzXY-Q5OaYQ-t500x500.jpg',
        }}
        style={{ width: 200, height: 200 }}
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
        />
      </View>
      <Button
        color="#67437F"
        containerStyle={styles.button}
        onPress={signIn}
        title="Login"
      />
      <Button
        onPress={() => navigation.navigate('Register')}
        titleStyle={{ color: '#67437F' }}
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
