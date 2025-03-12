import React, { useEffect, useRef, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationAction, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import { Pressable } from 'react-native'

const Stack = createNativeStackNavigator();

const ActualPage = ({ navigation }: { navigation: any }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>RADIOHEAD</Text>
      <Pressable 
          onPress={() => navigation.navigate('input')}
        style={({ hovered, pressed}) => [
          styles.button,
          hovered && styles.buttonHover,
          pressed && styles.buttonPressed,
        ]}>
          <Text style={styles.buttonText}>Go to input </Text>
      </Pressable>
    </View>
  )
}

const index = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  })

  return (
    <Stack.Navigator>
      <Stack.Screen name='ActualPage' component={ActualPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}
export default index

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#91A092'
  },  

  text: {
    fontFamily: 'Poppins', fontSize: 52, color: ''
  },

  button: {
    marginTop: 20,
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 7,
  },

  buttonText: {
    fontFamily: 'Poppins',
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonHover: {
    backgroundColor: 'green'
  },

  buttonPressed: {
    backgroundColor: 'navy'
  }

})
