import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { useFonts } from 'expo-font'

const input = () => {
  const [fontsLoaded] = useFonts({
    Poppins: require('../assets/fonts/Poppins-Regular.ttf')
  })

  const [value, onChangeText] = React.useState('bitch ass hoe');
  return (
    <View style={styles.container}>
      <TextInput
        editable
        numberOfLines={1}
        maxLength={20}
        onChangeText={text => onChangeText(text)}
        value={value}
        style={styles.input}
      >
      </TextInput>
    </View>
  )
}
export default input

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    padding: 5,
    borderColor: 'black',
    borderRadius: 3,
    borderWidth: 1.5
  }
})
