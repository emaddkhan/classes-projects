// import { View, Text, SafeAreaView } from 'react-native'
// import React from 'react'
// import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
// import useFetch from '../../hook/useFetch';
// import { COLORS, icons } from '../../constants';
// import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn";

// const JobDetails = () => {
//     const params = useLocalSearchParams();
//     const router = useRouter();
//     const {data,isLoading,reFetch} = useFetch('job-details',{
//         job_id:params.id,
//     })
//   return (
//     <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
//         <Stack.Screen
//         options={{
//             headerStyle:{backgroundColor:COLORS.lightWhite},
//             headerShadowVisible:false,
//             headerBackVisible:false,
//             headerLeft:()=>(
//                 <ScreenHeaderBtn
//                 iconUrl={icons.left}
//                 />
//             )
//         }}></Stack.Screen>
//     </SafeAreaView>
//   )
// }

// export default JobDetails
import { View, Text, SafeAreaView, ActivityIndicator, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import useFetch from '../../hook/useFetch';
import { COLORS, icons } from '../../constants';
import ScreenHeaderBtn from "../../components/common/header/ScreenHeaderBtn"

const JobDetails = () => {
  const params = useLocalSearchParams();
  const router = useRouter();
  const { data, isLoading, error, reFetch } = useFetch('job-details', {
    job_id: params.id,
  });
  const [refreshing,setRefreshing] = useState(false)
  const onRefresh = ()=>{}
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              handlePress={() => router.back()}
              dimension="60%"
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn
              iconUrl={icons.share}
              dimension="60%"
            />
          ),
          headerTitle:"",
        }}
      />

      <>
        <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>}>
        </ScrollView>     
      </>
    </SafeAreaView>
  );
};

export default JobDetails;
