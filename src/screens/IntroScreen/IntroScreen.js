import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import styled from 'styled-components'

const ImageBacgroundBox = styled(View)`
flex:1;
align-items:center;
justify-content:center;
background-color:#fff;
`


function IntroScreen() {
  return (
    <ImageBacgroundBox>
       <Image style={styles.image} source={require('../../../assets/Logo.jpg')}/>

    </ImageBacgroundBox>
  )
}

export default IntroScreen
const styles = StyleSheet.create({
    image:{
        width:150,
        height:150,
        resizeMode:"cover",
    }
})