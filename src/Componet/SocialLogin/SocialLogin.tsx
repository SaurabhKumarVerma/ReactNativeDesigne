import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import images, { Facebook, Google } from '../../../assert'
import BottomScreen from '../../CommonComponet/BottomScreen/BottomScreen'


type Props = {}

const SocialLogin = (props: Props) => {
  return (
    <View>
      <Image  source={images.SignInPage} style={{width : '100%', resizeMode: 'cover'}}/>

      <View style={{ height: '60%'}}>
      <BottomScreen style={ { 
        height: '60%', 
        marginBottom: 10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%' 
         } }/>
      </View>
     
     </View>
  )
}

export default SocialLogin

const styles = StyleSheet.create({})