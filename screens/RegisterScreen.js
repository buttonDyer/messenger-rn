import { React, useState, useLayoutEffect } from 'react'

import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'

import { Button, Input, Text } from '@rneui/base'

import { StatusBar } from 'expo-status-bar'

import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'

const RegisterScreen = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const register = async () => {
    try {
      const authUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )
      await updateProfile(authUser.user, {
        displayName: name,
        photoURL:
          imageUrl ||
          'https://cencup.com/wp-content/uploads/2019/07/avatar-placeholder.png',
      })
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Become a Gigachad
      </Text>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Full name"
          autoFocus
          type="text"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <Input
          placeholder="Email"
          type="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          placeholder="Password"
          type="password"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
        <Input
          placeholder="Profile Picture URL (optional)"
          type="text"
          value={imageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register}
        />
      </View>

      <Button
        containerStyle={styles.button}
        raised
        color="#3C1A67"
        onPress={register}
        title="Register"
      />
    </KeyboardAvoidingView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',
  },
  button: {
    width: 200,
    marginTop: 10,
  },
  inputContainer: {
    width: 300,
  },
})
