import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';

interface str {
  heading: string;
  description?: string;
  style?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const TextComponent: React.FC<str> = props => {
  return (
    <View style={[styles.container, props.containerStyle]}>
      {props.heading ? (
        <Text style={[styles.headingStyle, props.style]}>{props.heading}</Text>
      ) : null}

      <View style={styles.descriptionContainer}>
        {props.description ? (
          <Text style={styles.description}>{props.description}</Text>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    textAlign: 'center',
    position: 'absolute',
    numberofLine: 1,
  },
  container: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: '2%',
  },
  descriptionContainer: {
    backgroundColor: '#F1F1FE',
    borderRadius: 12,
    margin: '5%',
  },
  description: {
    fontSize: 20,
    padding: 20,
    fontFamily: 'CircularStdFont',
    fontStyle: 'normal',
    textAlign: 'center',
    letterSpacing: 4,
  },
  headingstyle: {fontSize: 20},
});

export default TextComponent;
