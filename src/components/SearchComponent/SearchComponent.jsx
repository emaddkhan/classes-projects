import React, { useEffect, useState } from "react";
import { Searchbar } from 'react-native-paper';
import { useLocationContext } from '../../services/location/location.context';

const SearchComponent = ({isFavoriteToggled=false,onFavoriteHandler=()=>{},}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const {search} = useLocationContext();
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      icon={isFavoriteToggled ? "heart" : "heart-outline"}
      onIconPress={onFavoriteHandler}
      onSubmitEditing={()=>{
        search(searchQuery)
      }}
    />
  ); 
};

export default SearchComponent;
