import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { ListItem, Avatar } from '@rneui/base'

const CustomListItem = ({ id, chatName, enterChat }) => {
  return (
    <ListItem>
      <Avatar
        rounded
        source={{
          uri: 'https://www.mtsolar.us/wp-content/uploads/2020/04/avatar-placeholder.png',
        }}
      />

      <ListItem.Content>
        <ListItem.Title style={{ fontWeight: '800' }}>Babushka</ListItem.Title>
        <ListItem.Subtitle numberOfLines={1} ellipsizeMode="tail">
          Test subtitle
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})
