import { View, Text, SafeAreaView, Image, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';
import OrderData from '../../../assets/data/orders.json'
import restorant from '../../../assets/data/restaurants.json'
import BasketDishItem from '../../components/BasketDishItem'
import Header from '../../components/OrderDetailItem/Header';

const OrderDetailsScreen = () => {
    const navigation = useNavigation();
    useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  const order = OrderData[0]
  return (
    <SafeAreaView>
      <View>
          <FlatList 
            ListHeaderComponent={Header}
            data={restorant[0].dishes}
            renderItem ={({item})=><BasketDishItem basketDish={item}/>}
          />
      </View>
    </SafeAreaView>
  )
}

export default OrderDetailsScreen