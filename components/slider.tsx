import { View, Text, StyleSheet, FlatList} from 'react-native'
import React from 'react'
import { ImageSlider } from '@/data/SliderData'
import SliderItem from './SliderItem'

const slider = () => {
  return (
    <View>
      <FlatList 
      data = {ImageSlider} 
      renderItem={({item, index }) => (
        <SliderItem item ={item} index={index}/>)} />
    </View>
  )
}

export default slider

const styles = StyleSheet.create({
    
})