import React from "react";
import { SafeAreaView, ScrollView } from "react-native";
import SingleRestaurentCards from "../singleRestaurentcards/SingleRestaurentCards";



export default function RestaurantDetailScreen(props) {

  const { singleRestaurant } = props?.route?.params;
  
  return  <SafeAreaView>
      <ScrollView>
        <SingleRestaurentCards singleRestaurant={singleRestaurant} />
      </ScrollView>
    </SafeAreaView>
}