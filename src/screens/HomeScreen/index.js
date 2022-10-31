import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import RestorantItem from '../../components/RestorantItem';
import restorantData from '../../../assets/data/restaurants.json'

const HomeScreen = () => {
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  return (
    <SafeAreaView>
     <ScrollView className = 'pt-8'>
        {
          restorantData.map((res)=>(
            <RestorantItem 
              image={res.image}
              name = {res.name}
              fee = {res.deliveryFee}
              maxtime = {res.maxDeliveryTime}
              mintime = {res.minDeliveryTime}
              rating = {res.rating}
              id={res.id}
              key = {res.id}
            />
          ))
        }
     </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen