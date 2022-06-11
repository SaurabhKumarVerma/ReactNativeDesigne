import React from "react";
import { SafeAreaView,  StyleSheet, Text,View,Dimensions  } from "react-native";
import { COLOR } from "../Asset/color";
import { Phone } from "../Asset/images/images";
import { Button } from "../CommonButton/Button/Button";

const { height,width} = Dimensions.get('window');


const Home: React.FC<{}> = () => {
  return (
    <View style={styles.container} >
        <View style={styles.imgView}>
          <Phone height={height - 240} width={ width}/>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.textStyle}>Your personal crypto {'\n'}wallet</Text>
          <View style={styles.subTextContainer}>
            <Text style={styles.subText}>Its secure and support near about hundred cryto currencies </Text>
          </View>
        </View>
      <View style={styles.btnContainer}>
        <Button label='Get Started'  icoName={"arrow-right"} iconSize={20}/>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLOR.appTheme,
    flex: 1
  },
  imgView:{
    alignItems: "center",
    marginHorizontal: 15,
  },
  textContainer:{
    marginHorizontal: 15,
    marginTop: 10,
  },
  textStyle:{
    fontFamily: "SFUIDisplay-Bold",
    fontSize: 26,
    color: COLOR.surface,
    fontWeight: "700",
    fontStyle: "normal",
    letterSpacing: 0.5,
    flexGrow: 0
  },
  subText:{
    fontFamily: "SFUIDisplay",
    color: COLOR.surface,
    letterSpacing: 0.5,
    opacity: 0.8,
    flexGrow: 0

  },
  subTextContainer:{
    marginTop: 5
  },
  btnContainer:{
    marginHorizontal: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  }

})

export default Home