import React from 'react'
import { View, Text, SafeAreaView, TouchableOpacity,StyleProp,ViewStyle, StyleSheet } from 'react-native'
import { Facebook, Google } from '../../../assert'
import Button from '../Button/Button'
import TextComponent from '../TextComponent/TextComponent'
import Input from '../TextInput/TextInput'

interface Props{
  style?: StyleProp<ViewStyle>
}

const BottomScreen = (props:Props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={{ height: '30%', justifyContent: 'center', marginTop: 15}}>
        <Input
          styleContainer={{ height: '50%' }}
          placeholder='Email'
          secureTextEntry={false}
        />
        <Input
        styleContainer={{  height: '50%'  }}
          placeholder='Password'
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity style={{ marginTop: 15}}>
      <Text
        style={{ letterSpacing: 5, fontSize: 20, color: '#5252C7',textAlign: 'center'}}
      >
        FORGOT PASSWORD
      </Text>
      </TouchableOpacity>

      <View style={{ justifyContent: 'center', height: '19%', marginVertical: '2%'}}>
      <Button
        title='Login'
        buttonStyle={{ height: 50}}
      />
      </View>
     
      <TextComponent
        heading='OR LOG IN BY'
        style={{ letterSpacing: 2, fontSize: 20, color: '#606060' }}
        description={''} containerStyle={undefined}      />

      <View style={{
        width: '100%',
        justifyContent: 'space-between',
        alignContent: 'space-between',
        flexDirection: 'row'
      }}
      >
        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'flex-end',
            marginVertical: 10,
            marginRight: 10
          }}
        >
          <Google style={{ height: 110, width: 110 }} />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '50%',
            alignItems: 'flex-start',
            marginHorizontal: 10,
            marginVertical: 10
          }}
        >
          <Facebook />
        </TouchableOpacity>

      </View>

      <View style={{ alignItems: 'center', marginVertical: '2%' }}>
        <TouchableOpacity style={{ flexDirection: 'row', marginTop: 5 }}>
          <Text style={{ fontSize: 20 }}>
          Don't Have A Account
          </Text>
          <Text style={{ fontSize: 20, color: '#5252C7' }}>  SIGN UP</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{

  }
})
export default BottomScreen