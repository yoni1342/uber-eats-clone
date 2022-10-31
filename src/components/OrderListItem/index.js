import { View, Text, Image } from 'react-native'
import React from 'react'

const OrderListItem = ({orders}) => {
  return (
    <View className = 'flex flex-row space-y-8 border-b border-gray-500 pb-3'>
        <View>
            <Image 
                source={{uri:orders.Restaurant.Image}}
                className = "aspect-[1] h-[75px]'"
            />
        </View>
        <View>
            <Text className = 'font-bold'>{orders.Restaurant.name}</Text>
            <Text className = 'font-light'>items &#8226; $38.45</Text>
            <Text className = 'font-light'>{orders.updatedAt} &#8226; {orders.status}</Text>
        </View>
    </View>
  )
}

export default OrderListItem