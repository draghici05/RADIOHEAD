import React, { useEffect, useRef } from 'react'
import { StyleSheet, Text, View, Animated, Easing, ImageBackground } from 'react-native'
import { Link } from 'expo-router'
import { useFonts } from 'expo-font'


const index = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  })

  return (
    <View style={styles.container}>
      <Text style={{
        fontFamily: 'Poppins', fontSize: 72, color: ''
      }}>TELL ME YOU ARE A LOSER</Text>
      <Link href="/input" style={{ color: 'blue', fontSize: 36, fontFamily: 'Poppins' }}>GO TO INPUT</Link>
    </View>
  )
}
export default index

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },

  text: {
    fontFamily: 'Poppins', fontSize: 72, color: ''
  },

})
