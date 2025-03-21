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
      <Stack.Screen name="input" options={
        {
          headerShown: false
        }
      } />
      <Stack.Screen name="profile" options={
        {
          headerShown: false
        }
      }></Stack.Screen>
    </Stack>
  )
}
