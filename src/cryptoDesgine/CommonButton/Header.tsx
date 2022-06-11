import React from "react";
import { Image, SafeAreaView, StyleSheet, ImageProps, Dimensions, Text, View, TouchableOpacity } from "react-native";
import { Notiofication } from "../Asset/images/images";
import { COLOR } from "../Asset/color";
import { matrixTransform } from "react-native-svg/lib/typescript/elements/Shape";

interface HeaderProps {
  image: ImageProps
}

const windows = Dimensions.get("screen")

export const Header: React.FC<HeaderProps> = ({ image }) => {
  return (
    <SafeAreaView >
      <View style={styles.container}>
        <Image source={image} style={styles.imageStyle}/>
        <TouchableOpacity>
          <Notiofication height={25} width={25}/>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container:{
   justifyContent: "space-between",
    flexDirection: "row",
    marginHorizontal: 10,
    marginTop: 10

  },
  imageStyle:{
      height: 25,
    width: 25,
    borderRadius: 6,
    flexGrow: 0,
  }
})