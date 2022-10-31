import { View, Text, Image } from 'react-native'
import React from 'react'
import OrderData from '../../../assets/data/orders.json'


const Header = () => {
    const order = OrderData[0]
  return (
    <View>
      <Image 
        source={{uri:order.Restaurant.image}}
        className = 'w-screen h-60'
      />
      <View className="px-4 py-5 space-y-2">
          <Text className="font-semibold text-2xl tracking-widest">{order.Restaurant.name}</Text>
          <Text>{order.status} &#8226; {order.updatedAt} </Text>
          <Text className = 'font-bold text-xl'>Your Order </Text>
          
      </View>
    </View>
  )
}

export default Header