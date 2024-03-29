import {StyleSheet, Text} from 'react-native';
import React from 'react';
import Colors from '../../constants/color';

const InstructionText = ({children, style}) => {
  return <Text style={[style, styles.instructiontext]}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructiontext: {
    color: Colors.accent500,
    fontSize: 24,
    fontFamily: 'OpenSans-Regular',
  },
});
