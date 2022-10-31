import { View, Text, SafeAreaView,FlatList } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useLayoutEffect, useState } from 'react'
import RestorantData from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';
import BasketDishItem from '../../components/BasketDishItem';

const BasketScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  const key = 0;
  const restorant = RestorantData[3] 

  
  return ( 
    <SafeAreaView className ='relative h-[100%] flex justify-between'>
    <View className='space-y-3 shadow-lg  shadow-black border-b border-gray-500 py-10 px-3'>
      <Text className='font-semibold text-2xl'>{restorant.name}</Text>
      <Text>Your Items</Text>
      <FlatList 
        data={restorant.dishes}
        renderItem = {({item})=> <BasketDishItem  basketDish={item}/>}
      />

    </View>

   

    {/* Add Cart Button */}
    <View className = 'bg-black py-5 items-center m-3'>
        <Text className = 'text-white'>
            Create Order
        </Text>
    </View>
    </SafeAreaView>
  )
}

export default BasketScreen