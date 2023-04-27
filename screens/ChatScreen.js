import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  ScrollView,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native'

import { React, useLayoutEffect, useState } from 'react'

import { Avatar } from '@rneui/base'

import { AntDesign } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'

import firebase from 'firebase/app'

import { auth, db } from '../firebase'

const ChatScreen = ({ navigation, route }) => {
  const [input, setInput] = useState('')

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Chat',
      headerTitleAlign: 'left',
      headerTitle: () => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <Avatar
            rounded
            source={{
              uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
            }}
          />
          <Text
            style={{
              color: 'white',
              marginLeft: 10,
              fontWeight: 700,
            }}
          >
            {route.params.chatName}
          </Text>
        </View>
      ),
      headerLeft: () => (
        <TouchableOpacity
          style={{
            marginLeft: 10,
          }}
          onPress={navigation.goBack}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>
      ),
    })
  }, [navigation])

  const sendMessage = () => {
    Keyboard.dismiss()

    db.collection('chats').doc(route.params.id).collection('messages').add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      displayName: auth.currentUser.displayName,
      email: auth.currentUser.email,
      photoURL: auth.currentUser.photoURL,
    })

    setInput('')
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        style={styles.container}
        keyboardVerticalOffset={90}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <>
            <ScrollView>{/* Chat */}</ScrollView>
            <View style={styles.footer}>
              <TextInput
                value={input}
                onChangeText={(text) => setInput(text)}
                onSubmitEditing={sendMessage}
                placeholder="The Boss's message"
                style={styles.textInput}
              />
              <TouchableOpacity onPress={sendMessage} activeOpacity={0.5}>
                <FontAwesome name="send" size={24} color="#3C1A67" />
              </TouchableOpacity>
            </View>
          </>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 15,
  },
  textInput: {
    bottom: 0,
    height: 40,
    flex: 1,
    marginRight: 15,
    borderColor: 'transparent',
    backgroundColor: '#ECECEC',
    padding: 10,
    color: 'grey',
    borderRadius: 30,
  },
})
