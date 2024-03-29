import {StyleSheet, Text, View, Pressable} from 'react-native';
import React from 'react';
import Colors from '../../constants/color';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.btnoutercontainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.pressed, styles.btninnercontainer]
            : styles.btninnercontainer
        }
        onPress={onPress}
        android_ripple={{color: Colors.primary600}}>
        <Text style={styles.buttontext}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  btnoutercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  btninnercontainer: {
    backgroundColor: Colors.primary500,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttontext: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
