import { View, Text } from 'react-native'
import React from 'react'
import { ImageSliderType } from '@/data/SliderData'

type Props = {
    item: ImageSliderType;
    index: number;
}

const SliderItem = ({item, index}: Props) => {
  return (
    <View>
      <Text>{item.title}</Text>
    </View>
  )
}

export default SliderItem