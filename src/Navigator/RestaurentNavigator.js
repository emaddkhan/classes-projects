import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import AccountsScreens from '../screens/AccountsScreens/AccountsScreens';
import LoginScreens from '../screens/LoginScreen/LoginScreens';
import RegisterScreen from '../screens/RegisterScreen/RegisterScreen';
import RestaurentListingScreens from '../screens/RestaurentScreens/restaurentListing/RestaurentListingScreens';

function RestaurentNavigater() {
    const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator 
    screenOptions={{
      headerShown:false,
    }}
    >
      <Stack.Screen name="RestaurentListinig" component={RestaurentListingScreens}  />
    </Stack.Navigator>
  )
}

export default RestaurentNavigater
