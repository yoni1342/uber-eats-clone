import { View, Text, SafeAreaView } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import React, { useLayoutEffect, useState } from 'react'
import RestorantData from '../../../assets/data/restaurants.json'
import { AntDesign } from '@expo/vector-icons';

const DishDetailsScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  const key = 0;
  const dish = RestorantData[1].dishes[0]

  const [quantity, setQuantity] = useState(1)
  const Dicrese = ()=>{
    quantity>1 && setQuantity(quantity-1)
  }
  const Increse = ()=>{
    setQuantity(quantity+1)
  }
  const getTotal = ()=>{
    return (quantity*dish.price).toFixed(2);
  }
  return ( 
    <SafeAreaView className ='relative h-[100%] flex justify-between'>
    <View className='space-y-3 shadow-lg  shadow-black border-b border-gray-500 py-10 px-3'>
      <Text className='font-semibold text-2xl'>{dish.name}</Text>
      <Text className = 'text-gray-600 pl-2'>{dish.description}</Text>
    </View>
    {/* Counter */}
    <View className = 'flex items-center justify-center'>
        <View className = 'flex flex-row space-x-5 items-center'>
            <AntDesign  name="minuscircleo" size={60} color="black" onPress={()=>Dicrese()} />
            <Text className = 'text-3xl font-semibold'>{quantity}</Text>
            <AntDesign name="pluscircleo" size={60} color="black" onPress={()=>Increse()} />
        </View>
    </View>

    {/* Add Cart Button */}
    <View className = 'bg-black py-5 items-center m-3'>
        <Text className = 'text-white'>
            Add {quantity} to basket &#8226; ($ {getTotal()})
        </Text>
    </View>
    </SafeAreaView>
  )
}

export default DishDetailsScreen