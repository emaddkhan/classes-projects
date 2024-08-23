import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import RestaurentNavigater from './RestaurentNavigator';
import BottomNavigationHandler from './BottomNavigationHandler';
import LoginNavigator from './LoginNavigator';

function NavigationHandlerComponent() {
    // const {isAuthenticated} = useAuthenticationContext();
    const isAuthenticated =true
  return (
    <NavigationContainer>
     {/* {!isAuthenticated ? <LoginNavigator/>:<RestaurentNavigater/>} */}
     {isAuthenticated ? <BottomNavigationHandler/>:<LoginNavigator/>}

    </NavigationContainer>
  )
}

export default NavigationHandlerComponent
