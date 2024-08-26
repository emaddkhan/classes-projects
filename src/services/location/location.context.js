// import React, { useContext, useEffect, useState } from "react";
// import {locationRequest, LocationRequest} from "./Location.service"
// import { restaurantRequest } from "../Restaurant/Restaurent.service";


// export const locationContext = React.createContext();

// const LocationContextComponent = ({children})=>{
//     const [loading,setLoading] = useState(false);
//     const [keyword,setKeyword] = useState("");
//     const [error,setError] = useState(null);
//     const [locations,setLocations] = useState(null);
//     const [restaurants,setRestaurants] = useState(null);


//    const onSearchHandler = (searchKeyword)=>{
//         if(searchKeyword){
//             setLoading(true)
//             setError(null)
//             setTimeout(()=>{
//                 setKeyword(searchKeyword)
//             },500)
//         };
//     };
//     useEffect(()=>{
//         if(!keyword.length){
//             return;
//         }
//         locationRequest(keyword).then((result)=>{
//             setError(null);
//             setLocations(result)
//             const {lat,lng} = result;
//             const payLoad = `${lat},${lng}`;
//             restaurantRequest(payLoad).then((result)=>{
//                 setRestaurants(result)
//                 setLoading(false)

//             }).catch((error)=>{
//                 setError(error);
//                 setLoading(false);
//             })

//             // console.log(results,"results")
//         }).catch((error)=>{
//             setError(error);
//             setLoading(false);
//         })
//     },[keyword]);


//     return <locationContext.Provider
//     value={{
//         search:onSearchHandler,
//         loading,
//         keyword,
//         error,
//         restaurants,
//         locations,
//     }}
//         >
//         {children}
//         </locationContext.Provider>
// }
// export default LocationContextComponent;

// export const useLocationContext = () =>{
//     return useContext(locationContext)
// }
import React, { useContext, useEffect, useState } from "react";
import {locationRequest} from "./Location.service"
import {restaurantRequest} from "../Restaurant/Restaurent.service"

const LocationContext = React.createContext();

const LocationContextComponent = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [error, setError] = useState(null);
  const [location, setLocation] = useState(null);
  const [restaurants, setRestaurants] = useState(null);

  const onSearchHandler = (searchKeyword) => {
    if (searchKeyword) {
      setLoading(true);
      setError(null);

      setTimeout(() => {
        setKeyword(searchKeyword);
      }, 500);
    }
  };

  useEffect(() => {
    if (!keyword.length) {
      return;
    }

    locationRequest(keyword)
      .then((results) => {
        // setLoading(false);
        setError(null);
        setLocation(results);
        const { lat, lng } = results;
        const payload = `${lat},${lng}`;
        restaurantRequest(payload)
          .then((results) => {
            setRestaurants(results);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
            setRestaurants([]);
          });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        setRestaurants([]);
      });
  }, [keyword]);
  return (
    <LocationContext.Provider
      value={{
        search: onSearchHandler,
        loading,
        keyword,
        error,
        location,
        restaurants,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContextComponent;

export const useLocationContext = () => {
  return useContext(LocationContext);
};