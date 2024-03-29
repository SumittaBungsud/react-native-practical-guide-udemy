import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import Colors from '../../constants/color';

const NumberContainer = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numbertext}>{children}</Text>
    </View>
  );
};

export default NumberContainer;

const Width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: Colors.accent500,
    padding: Width < 400 ? 12:24,
    margin: Width < 400 ? 12:24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numbertext: {
    color: Colors.accent500,
    fontSize: Width < 400 ? 28:36,
    fontFamily: 'OpenSans-Bold',
  },
});
