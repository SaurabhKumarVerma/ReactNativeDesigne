import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { COLOR } from "../Asset/color";
import { Header } from "../CommonButton/Header";
import images from "../Asset/images/images";
import Card from "../CommonButton/Card";


export const MainScreen: React.FC<{  }> = props => {
  return (
    <View style={styles.container}>
      <View >
        <Header image={images.Avatar}  />
      </View>
      <View >
        {/*<Card />*/}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    backgroundColor: COLOR.appTheme,
    flex: 1
  },
  headerContainer:{
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: 'red',
    marginTop: 10

  }
})