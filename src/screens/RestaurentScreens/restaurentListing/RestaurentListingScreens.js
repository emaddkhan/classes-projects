import React from 'react'
import { ActivityIndicator, FlatList, View ,Text} from 'react-native'
import {   Title } from 'react-native-paper'
import SearchComponent from '../../../components/SearchComponent/SearchComponent'
import SingleRestaurentCards from '../singleRestaurentcards/SingleRestaurentCards'
import styled from 'styled-components'
import { useLocationContext } from '../../../services/location/location.context'
import TextComponents from '../../../components/TextComponent/TextComponents'

function RestaurentListingScreens() {
  const RestaurantList = styled(FlatList).attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;
  const NoRestaurantWrapper = styled(View)`
  margin: 0 auto;
  margin-top: 40px;
  flex: 1;
`;
    const {search,loading,location,error,restaurants=[],keyword} = useLocationContext();
  return (
    <>
    <View>
        <SearchComponent/>
        {loading && (<ActivityIndicator size={50} animating={true} color="#0000ff"/>)}
        {/* {restaurants?.length > 0?<RestaurantList
        data={restaurants}
        renderItem={(singleRestaurant)=><SingleRestaurentCards singleRestaurant={singleRestaurant.item}/>}
        />:(<View>
          <View>
          <Text>restaurants do not found</Text>
        </View>
        </View>)} */}
        {restaurants?.length > 0 ? (
        <RestaurantList
          data={restaurants}
          renderItem={(singleRestaurant) => (
            <SingleRestaurentCards singleRestaurant={singleRestaurant.item} />
          )}
        />
      ) : (
        keyword?.length > 0 &&
        !loading && (
          <NoRestaurantWrapper>
            <View>
              <TextComponents variant="label">
                No Restaurants Found!
              </TextComponents>
            </View>
          </NoRestaurantWrapper>
        )
      )}
        
    </View>
    </>
  )
}

export default RestaurentListingScreens
