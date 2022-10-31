import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import HomeScreen from '../screens/HomeScreen';
import RestorantsDetails from '../screens/RestorantDetailsScreen';
import OrderDetailsScreen from '../screens/OrderDetailsScreen';
import { Foundation, MaterialIcons, FontAwesome5} from '@expo/vector-icons'

const Stack = createNativeStackNavigator();
 
const RootNavigator = ()=>{
    return(
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restorant' component={RestorantsDetails} />
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();
const HomeTabs = ()=>{
    return(
        <Tab.Navigator barStyle= {{backgroundColor: "white"}}>
            <Tab.Screen 
                name = 'Home' 
                component={HomeScreen} 
                options={{tabBarIcon: ({color})=>(<Foundation name='home' size={24} color={color}/>)}}
            />
            <Tab.Screen 
                name = 'Orders' 
                component={OrderDetailsScreen}
                options={{tabBarIcon: ({color})=>(<MaterialIcons name='list-alt' size={24} color={color}/>)}}    
            />
            <Tab.Screen 
                name = 'Profile' 
                component={OrderDetailsScreen}
                options={{tabBarIcon: ({color})=>(<FontAwesome5 name='user-alt' size={24} color={color}/>)}}    
            />
        </Tab.Navigator>
    )
}

export default HomeTabs