import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ListItem, Avatar } from '@rneui/base'

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem
      onPress={() => {
        enterChat(id, chatName)
      }}
      key={id}
      bottomDivider
    >
      <Avatar
        rounded
        source={{
          uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>
          {chatName}
        </ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          ABC
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})
