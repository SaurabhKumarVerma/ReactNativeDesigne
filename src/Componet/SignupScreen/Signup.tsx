import { ImageBackground, Image,StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import images from '../../../assert'

type Props = {}

const Signup = (props: Props) => {
  return (
    <SafeAreaView style={{ height: '60%', width: '100%'}}>
      
      <ImageBackground source={images.StartUpImage} resizeMode='cover'>
      <Text>HELLO</Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Signup

const styles = StyleSheet.create({
    image:{
        flex:1,
        justifyContent: 'center',
        // height: '1155%'
    }
})