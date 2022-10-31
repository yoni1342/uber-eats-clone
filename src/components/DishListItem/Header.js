import { View, Text, Image } from 'react-native'
import {ArrowLeftIcon} from 'react-native-heroicons/outline'
import RestorantData from '../../../assets/data/restaurants.json'

import React from 'react'

const RestorantHeader = () => {
  const key = 1;
  const restorant = RestorantData[key]
  return (
    <View className = 'relative'>
        <Image 
        source={{uri:restorant.image}}
        className = 'w-screen aspect-[6/3]'
        />
      
        <View className="border-b border-gray-400 px-4 py-5">
            <Text className="font-semibold text-2xl tracking-widest">{restorant.name}</Text>
            <Text> $ &#8226; {restorant.rating} </Text>
        </View>
        <Text className="text-gray-500">Menu</Text>

    </View>
  )
}

export default RestorantHeader