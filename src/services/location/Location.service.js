import camelize from "camelize";
import { locations } from "./Location.mocks"

export const LocationRequest = (search = "toronto")=>{
    return new Promise((resolve,reject)=>{
        const locationMockData = locations[search];
        if(!locationMockData){
            reject("location not found");
        }
        const transformLocationData = loacationTranformData(locationMockData)
        resolve(transformLocationData)
    })
}
const loacationTranformData = (locationData)=>{
    const {results} = locationData;
    const formattedResponse = camelize(results);
    const {geometry} = formattedResponse[0];
    return {
        lat:geometry.location.lat,
        lnt:geometry.location.lnt,
        viewport:geometry.viewport,
    };

};