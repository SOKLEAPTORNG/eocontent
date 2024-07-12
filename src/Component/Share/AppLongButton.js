import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import {Color} from '../../Constant';

const AppLongButton = ({
  title,
  marginTop,
  onPress,
  marginBottom,
  marginVertical,
  position,
  bottom,
  alignSelf,
  height = 49,
  borderRadius = 10,
  color = Color.LIGHT,
  backgroundColor = Color.LIGHT_PRIMARY,
  borderColor = Color.LIGHT_PRIMARY,
  width = '100%',
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.continer,
        {
          marginTop,
          marginBottom,
          marginVertical,
          position,
          bottom,
          alignSelf,
          height,
          borderRadius,
          backgroundColor,
          borderColor,
          width,
        },
      ]}>
      <AppText style={[styles.label, {color}]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  continer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  label: {
    fontSize: 16,
  },
});

export default AppLongButton;
