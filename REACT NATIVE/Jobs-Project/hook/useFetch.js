import { useEffect, useState } from "react"
import axios from "axios";

const useFetch = (endpoint,query)=>{
    const [data,setData] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [error,setError] = useState(null)
    

    
const options = {
  method: 'GET',
  url: `https://jsearch.p.rapidapi.com/${endpoint}`,
  headers: {
    'x-rapidapi-key':'19cf7f83e6mshaecf1caf9030f55p1e731fjsna43602238d87',
    'x-rapidapi-host': 'jsearch.p.rapidapi.com'
  },
  params: {...query},
};

const fetchData =async ()=>{
    setIsLoading(true)
    try{
        const response = await axios.request(options);
        setData(response.data.data);
        
        setIsLoading(false);
    }catch(error){
        setError(error)
        alert("There is an error")
    }finally{
        setIsLoading(false)
    }
}
useEffect(()=>{
    fetchData();
},[])
const reFetch = ()=>{
    setIsLoading(true)
    fetchData();
}
return {data,isLoading,error,reFetch}
}
export default useFetch;