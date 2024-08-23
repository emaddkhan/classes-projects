import * as React from 'react';
import { Searchbar } from 'react-native-paper';
import { useLocationContext } from '../../services/location/location.context';

const SearchComponent = (isFavoriteToggled=false,onFavoriteHandler=()=>{}) => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const {search,loading,locations,error,restaurants} = useLocationContext();
  console.log({locations,loading,error,restaurants})
  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      icon={isFavoriteToggled?"heart-outline":"heart"}
      onIconPress={onFavoriteHandler}
      onSubmitEditing={()=>{
        // console.log("searc from restaurent map")
        search(searchQuery)
      }}
    />
  ); 
};

export default SearchComponent;
// import * as React from 'react';
// import { Searchbar } from 'react-native-paper';

// const SearchComponent = ({ isFavoriteToggled = false, onFavoriteHandler = () => {} }) => {
//   const [searchQuery, setSearchQuery] = React.useState('');

//   return (
//     <Searchbar
//       placeholder="Search"
//       onChangeText={setSearchQuery}
//       value={searchQuery}
//       icon={isFavoriteToggled ? "heart" : "heart-outline"}
//       onIconPress={onFavoriteHandler}
//       onSubmitEditing={() => {
//         console.log("search from restaurant map");
//       }}
//     />
//   );
// };

// export default SearchComponent;
