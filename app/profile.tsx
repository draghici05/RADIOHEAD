import React, { useEffect, useRef, useState } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Card, Button } from 'react-native-paper'
import { NavigationAction, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'


const data = [
  {id: 1, title: 'test'},
  {id: 2, title: 'test2'}
]

const Profile = () => {
  return (
    <Text>
      a
    </Text>
  )
}

export default Profile

const styles = StyleSheet.create({})