import { Stack, useRouter } from "expo-router";
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { COLORS, SIZES } from "../constants/theme";
import ScreenHeaderBtn from "../components/common/header/ScreenHeaderBtn";
import { icons, images } from "../constants";
import { Nearbyjobs, Popularjobs, Welcome } from "../components";

const Home =()=>{
    const router = useRouter();
    return(
        <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen
            options={{
                headerStyle:{backgroundColor:COLORS.lightWhite},
                headerShadowVisible:false,
                headerLeft:()=>(
                    <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%"/>
                ),
                headerRight:()=>(
                    <ScreenHeaderBtn iconUrl={images.profile} dimension="100%"/>
                ),
                headerTitle:"",
            }}
            />
            <ScrollView showsVerticalScrollIndicator={false}>
                <>
                <View style={{
                    flex:1,
                    padding:SIZES.medium,
                }}>
                    <Welcome/>
                    <Popularjobs/>
                    <Nearbyjobs/>
                </View></>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Home;