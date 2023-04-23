import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

import { React, useLayoutEffect } from 'react'

import { Avatar } from '@rneui/base'

import { AntDesign } from '@expo/vector-icons'

const ChatScreen = ({ navigation, route }) => {
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
      headerRight: () => (
        <View>
          <TouchableOpacity></TouchableOpacity>
        </View>
      ),
    })
  }, [navigation])

  return (
    <View>
      <Text>{route.params.chatName}</Text>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})
