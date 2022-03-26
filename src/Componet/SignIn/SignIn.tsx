import React from 'react'
import { Image, SafeAreaView, View,StyleSheet } from 'react-native'
import images from '../../../assert'
import BottomScreen from '../../CommonComponet/BottomScreen/BottomScreen'


type Props = {}

const SignIn = (props: Props) => {
  return (
    <SafeAreaView>
      <View>
        <Image source={images.SignInPage} style={styles.image}/>
      </View>
     <BottomScreen />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  image:{
    height: '50%',
    width: 100
  }
})
export default SignIn