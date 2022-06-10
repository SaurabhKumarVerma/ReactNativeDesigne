import {
  StyleSheet,
  View,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import React from 'react';

interface Props {
  secureTextEntry?: boolean;
  placeholder: string;
  autoCorrect?: boolean;
  value?: string;
  style?: StyleProp<TextStyle>;
  styleContainer?: StyleProp<ViewStyle>;
  onChangeText?: () => void;
}

const Input = (props: Props) => {
  return (
    <View style={[styles.container, props.styleContainer]}>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        placeholder={props.placeholder}
        autoCorrect={props.autoCorrect}
        value={props.value}
        style={[styles.input, props.style]}
        onChangeText={props.onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F5F7',
    marginHorizontal: '5%',
    borderRadius: 20,
    height: '10%',
    marginVertical: 10,
  },
  input: {
    display: 'flex',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    fontFamily: 'CircularStdFont',
    fontStyle: 'normal',
    letterSpacing: 4,
    width: '100%',
    borderRadius: 20,
    fontSize: 20,
  },
});
