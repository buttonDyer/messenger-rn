import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import { React, useEffect, useLayoutEffect, useState } from 'react'

import CustomListItem from '../components/CustomListItem'

import { Avatar } from '@rneui/base'

import { Entypo } from '@expo/vector-icons'

import { auth, db } from '../firebase'
import { collection, onSnapshot } from 'firebase/firestore'

const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([])

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login')
    })
  }

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'chats'), (snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    })

    return () => unsubscribe()
  }, [])

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Anime',
      headerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: '#3C1A67',
      },
      headerTitleStyle: { color: '#3C1A67' },
      headerTintColor: '#3C1A67',
      headerLeft: () => (
        <View style={{ marginLeft: 20 }}>
          <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
            <Avatar
              rounded
              source={{
                uri: auth?.currentUser?.photoURL,
              }}
            />
          </TouchableOpacity>
        </View>
      ),
      headerRight: () => {
        return (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 20,
            }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate('AddChat')}
              activeOpacity={0.5}
            >
              <Entypo name="pencil" size={24} color="#3C1A67" />
            </TouchableOpacity>
          </View>
        )
      },
    })
  }, [navigation])

  const enterChat = (id, chatName) => {
    navigation.navigate('Chat', {
      id,
      chatName,
    })
  }

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
})
