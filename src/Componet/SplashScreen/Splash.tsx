import React from 'react'
import { 
  View, 
  Image, 
  StyleSheet,
  Dimensions 
} from 'react-native';
import images from '../../../assert'

const win = Dimensions.get('window');

interface StartImage {
  source?: any
}

const Splash:  React.FC<StartImage> = () => {
  return (
    <View style={{ backgroundColor:' green'}}>
      <Image source={images.StartUpImage}  style={style.img}/>
    </View>
  )
}

const style = StyleSheet.create({
  img:{

    height:win.height,
    width:win.width,
    resizeMode: 'cover'
  }
})

export default Splash