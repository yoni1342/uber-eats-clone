import { View, Text, Image, SafeAreaView, ScrollView, FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import {useNavigation} from '@react-navigation/native'
import RestorantData from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem'
import RestorantHeader from '../../components/DishListItem/Header'
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native'

const RestorantsDetails = () => {
  const route = useRoute();
  const id = route.params.id;
  const navigate = useNavigation()

  
  const navigation = useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown: false
    })
  },[])

  const key = 1;
  const restorant = RestorantData[key]
  return (
    <View>
      <View className = 'w-screen relative'>
            <View className="rounded-3xl z-4">
                <View className="">
                    <FlatList
                      ListHeaderComponent={RestorantHeader}
                      data={restorant.dishes}
                      renderItem={({item})=><DishListItem dish={item}/>}
                    />
                     <View className = "absolute top-[6%] left-2" >
                        <Ionicons onPress={()=>navigate.goBack()}  name="md-arrow-back-circle" size={40} color="white" />
                    </View>
                    
                </View>
            </View>
      </View>
    </View>
  )
}

export default RestorantsDetails