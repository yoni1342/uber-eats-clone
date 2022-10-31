import { View, Text } from 'react-native'
import React from 'react'

const BasketDishItem = ({basketDish}) => {
  return (
    <View className = 'flex flex-row justify-between px-2 mb-5 items-center'>
        <View className = 'flex flex-row space-x-4 items-center'>
            <Text className ='bg-gray-300 rounded-lg w-8 h-7 text-center'>1</Text>
            <Text className ="font-semibold">{basketDish.name}</Text>
        </View>
        <Text>${basketDish.price}</Text>
    </View>
  )
}

export default BasketDishItem