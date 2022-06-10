import {
  Text,
  StyleSheet,
  TouchableOpacity,
  StyleProp,
  ViewProps,
  ViewStyle,
} from 'react-native';
import React from 'react';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import linearColor from './ButtonStyle';

type Props = {
  onPress?: () => void;
  title: string;
  buttonStyle?: StyleProp<ViewStyle>;
};

const Button = (props: Props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <LinearGradient
        colors={linearColor.primaryColor}
        style={[styles.linearContainer, props.buttonStyle]}
        start={{x: 1, y: 1}}
        end={{x: 0, y: 0}}>
        <Text style={styles.textStyle}>{props.title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {},
  linearContainer: {
    height: '30%',
    borderRadius: 40,
    display: 'flex',
    justifyContent: 'center',
    marginHorizontal: '6%',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25,
    letterSpacing: 4,
    color: 'white',
  },
});
export default Button;
