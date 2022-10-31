import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const RestorantItem = ({image, name, rating, mintime, maxtime, fee, id}) => {
  const navigation = useNavigation();

  const onPress = ()=>{
    navigation.navigate("Restorant", {id:id})
  }
  return (
    <Pressable onPress={onPress} className ='w-screen p-2 mb-3'>
          <Image source={{uri:image}}
          className = 'w-screen aspect-[5/3]'/>
          <View className = 'flex flex-row justify-between p-2 mt-2'>
            <View className = 'space-y-1'>
              <Text className = 'font-semibold'>{name}</Text>
              <Text className = 'text-gray-500'>{fee} &#8226; {mintime}-{maxtime} min</Text>
            </View>
            <View className ='bg-gray-300 rounded-full w-10 h-10 flex flex-row items-center justify-center'>
              <Text>{rating}</Text>
            </View>
          </View>
      </Pressable>
  )
}

export default RestorantItem