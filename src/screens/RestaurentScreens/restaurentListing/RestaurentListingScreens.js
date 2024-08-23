import React from 'react'
import { FlatList, View } from 'react-native'
import { Title } from 'react-native-paper'
import SearchComponent from '../../../components/SearchComponent/SearchComponent'
import SingleRestaurentCards from '../singleRestaurentcards/SingleRestaurentCards'
import styled from 'styled-components'

function RestaurentListingScreens() {
  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      paddingTop: 0,
      paddingBottom: 60,
      paddingRight: 16,
      paddingLeft: 16,
    },
  })``;
  const restaurant = [1,2,3,4,5]
  return (
    <View>
        <SearchComponent/>
        <RestaurantList
        data={restaurant}
        renderItem={(SingleRestaurent)=><SingleRestaurentCards/>}
        />
        
    </View>
  )
}

export default RestaurentListingScreens
