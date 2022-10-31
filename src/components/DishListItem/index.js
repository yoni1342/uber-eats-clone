import { View, Text, Image } from 'react-native'
import React from 'react'

const DishListItem = ({dish}) => {
  return (
    <View className = 'px-7' >
      <View className="flex flex-row justify-between py-4 space-y-2 border-b border-gray-400">
        <View className = 'flex-[1]'>
            <Text className="font-semibold tracking-wide">{dish.name}</Text>
            <Text className="text-gray-500" numberOfLines={2}>{dish.description}</Text>
            <Text className="text-gray-700">${dish.price}</Text>
        </View>
        <View>
          {dish.image && <Image source={{uri:dish.image}} className = 'aspect-[1] h-[75px]'/>}
        </View>
      </View>
    </View>
  )
}

export default DishListItem