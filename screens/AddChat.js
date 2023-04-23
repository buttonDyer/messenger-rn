import React, { useLayoutEffect, useState } from 'react'

import { StyleSheet, Text, View } from 'react-native'

import { Button, Input } from '@rneui/base'

import { Entypo } from '@expo/vector-icons'

import { db } from '../firebase'
import { collection, addDoc } from 'firebase/firestore'

const AddChat = ({ navigation }) => {
  const [input, setInput] = useState('')
  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Add a new Chat',
    })
  }, [navigation])

  const createChat = async () => {
    try {
      await addDoc(collection(db, 'chats'), {
        chatName: input,
      })
      navigation.goBack()
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <View style={styles.container}>
      <Input
        placeholder="Enter a chat name"
        value={input}
        onChangeText={(text) => setInput(text)}
        onSubmitEditing={createChat}
        leftIcon={<Entypo name="chat" size={24} color="#3C1A67" />}
      />
      <Button onPress={createChat} title="Create new Chat" />
    </View>
  )
}

export default AddChat

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 30,
    height: '100%',
  },
})
