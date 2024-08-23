import React, { useContext, useEffect, useState } from "react";
import { LocationRequest } from "./Location.service";
import { restaurantRequest } from "../Restaurant/Restaurent.service";


export const locationContext = React.createContext();

const LocationContextComponent = ({children})=>{
    const [loading,setLoading] = useState(false);
    const [keyword,setKeyword] = useState("");
    const [error,setError] = useState(null);
    const [locations,setLocations] = useState(null);
    const [restaurants,setRestaurants] = useState(null);


   const onSearchHandler = (searchKeyword)=>{
        if(searchKeyword){
            setLoading(true)
            setError(null)
            setTimeout(()=>{
                setKeyword(searchKeyword)
            },500)
        }
    }
    useEffect(()=>{
        if(!keyword.length){
            return
        }
        LocationRequest().then((result)=>{
            setError(null);
            setLocations(result)
            const {lat,lng} = result;
            const payLoad = `${lat},${lng}`;
            restaurantRequest(payLoad).then((result)=>{
                setRestaurants(result)
                setLoading(false)

            }).catch((error)=>{
                setError(error);
                setLoading(false);
            })

            // console.log(results,"results")
        }).catch((error)=>{
            setError(error);
            setLoading(false);
        })
    },[keyword]);


    return <locationContext.Provider
    value={{
        search:onSearchHandler,
        loading,
        keyword,
        error,
        restaurants,
        locations,
    }}
        >
        {children}
        </locationContext.Provider>
}
export default LocationContextComponent;

export const useLocationContext = () =>{
    return useContext(locationContext)
}