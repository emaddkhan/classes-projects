import React from 'react'
import { ActivityIndicator, Text } from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import MapSearch from './MapSearch'
import { useLocationContext } from '../../../services/location/location.context';
import MapView from 'react-native-maps';

function Map() {
  const {loading,location={}} = useLocationContext();
  console.log(location,"location")
  const {lat,lng,viewport} = location;
  return (
    <SafeAreaView>
      <MapSearch/>
      {loading && (<ActivityIndicator size={50} animating={true} color="#0000ff"/>)}
      <MapView style={{
        height:"100%",
        width:"100%",
      }}
      // initialRegion={{
      //   latitude:lat,
      //   longitude:lng,
      //   // latitudeDelta:latDelta,
      //   // longitudeDelta:0.02,
      // }}
      >
      </MapView>
    </SafeAreaView>
  )
}

export default Map
