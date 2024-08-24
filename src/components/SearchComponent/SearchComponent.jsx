import React, { useState } from "react";
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
        // console.log("searc from restaurent map")
        search(searchQuery)
      }}
    />
  ); 
};

export default SearchComponent;
// import React, { useState } from "react";
// import { Searchbar } from "react-native-paper";
// import {useLocationContext} from '../../services/location/location.context'


// function SearchComponent({
//   isFavoriteToggled = false,
//   onFavoriteHandler = () => {},
// }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const { search } = useLocationContext();

//   return (
//     <Searchbar
//       placeholder="Search for a location"
//       onChangeText={setSearchQuery}
//       value={searchQuery}
//       icon={isFavoriteToggled ? "heart" : "heart-outline"}
//       onIconPress={onFavoriteHandler}
//       onSubmitEditing={() => {
//         // console.log("search restaurant from location");
//         search(searchQuery);
//       }}
//     />
//   );
// }

// export default SearchComponent;