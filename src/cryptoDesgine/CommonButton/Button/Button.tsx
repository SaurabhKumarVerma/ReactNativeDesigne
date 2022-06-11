import React from "react";
import { StyleSheet, Text, TouchableOpacity, Dimensions, View } from "react-native";
// @ts-ignore
import FontAwesome from "react-native-vector-icons/FontAwesome5";
import { COLOR } from "../../Asset/color";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const  window = Dimensions.get("screen")

interface propsButton {
  label: string,
  onPress?: () => void,
  icoName?: string,
  iconSize?: number,
}
type RootStackParamList = {
  name: {name: string}
};
export const Button: React.FC<propsButton > = ({ label, onPress ,icoName,iconSize}) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()
  return (
      <TouchableOpacity
        style={styles.btnContainer}
        onPress={() => {
          navigation.navigate({name: "MainScreen" })
        }}
      >
        <Text style={styles.textStyle}>{label}</Text>
        <View style={{marginHorizontal: 20}}>

          <FontAwesome
            name= {icoName}
            size= {iconSize}
            color={COLOR.appTheme}
          />
        </View>
      </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: COLOR.btnColor,
    aspectRatio: 6.2,
    width: window.width ,
    borderRadius: 10,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    marginTop: 20

  },
  textStyle: {
    fontFamily: "SFUIDisplay",
    marginStart: 10,
    color: COLOR.appTheme,
    fontWeight: "700",
    letterSpacing: 0.5,
    opacity: 0.8,
    fontSize: 16,
    lineHeight: 19.09,
  }

})