import { View, Text, SafeAreaView,FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import OrderListItem from '../../components/OrderListItem'
import OrderData from '../../../assets/data/orders.json'
import { useNavigation } from '@react-navigation/native'
const OrdersScreen = () => {
    const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])
  return (
    <SafeAreaView className = 'py-10'>
        <View className = 'px-4'>
            <FlatList 
                data={OrderData}
                renderItem = {({item})=><OrderListItem orders={item}/>}
            />
        </View>

    </SafeAreaView>
  )
}

export default OrdersScreen