import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import RestorantsDetails from './src/screens/RestorantDetailsScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen';
import BasketScreen from './src/screens/BasketScreen';
import OrdersScreen from './src/screens/OrdersScreen';
import OrderDetailsScreen from './src/screens/OrderDetailsScreen'
import RootNavigator from './src/navigation';

const Stack = createNativeStackNavigator();
export default function App() {

  return (
    <NavigationContainer>
      <TailwindProvider>
        {/* <Stack.Navigator>
          <Stack.Screen name='Home' component={OrderDetailsScreen}/>
        </Stack.Navigator> */}
        <RootNavigator />
      </TailwindProvider>
    </NavigationContainer>
  );
}

