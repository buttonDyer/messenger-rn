import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'

import { React, useLayoutEffect } from 'react'

import CustomListItem from '../components/CustomListItem'

import { Avatar } from '@rneui/base'

import { AntDesign, Entypo } from '@expo/vector-icons'

import { auth, db } from '../firebase'

const HomeScreen = ({ navigation }) => {
  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace('Login')
    })
  }

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
              width: 80,
              marginRight: 20,
            }}
          >
            <TouchableOpacity activeOpacity={0.5}>
              <AntDesign name="camera" size={24} color="#3C1A67" />
            </TouchableOpacity>
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

  return (
    <SafeAreaView>
      <ScrollView>
        <CustomListItem />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})
