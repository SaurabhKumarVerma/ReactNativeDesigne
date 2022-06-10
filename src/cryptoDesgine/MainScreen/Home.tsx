import React from "react";
import { SafeAreaViewComponent, StyleSheet } from "react-native";
import create = StyleSheet.create;
import { COLOR } from "../Asset/color";

export const Home: React.FC<{  }> = props => {
  return (
    <SafeAreaViewComponent style={styles.container}>

    </SafeAreaViewComponent>
  );
};

const styles = create({
  container:{
    backgroundColor: COLOR.appTheme
  }

})