import { Stack } from "expo-router";
import { StyleSheet, Text, } from "react-native";


export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={
        {
          headerShown: false
        } 
      } />
    </Stack>
  )
}
