import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from './AppText';
import {Color} from '../../Constant';

const AppButton = ({
  title,
  color = Color.LIGHT,
  borderColor = Color.LIGHT_PRIMARY,
  backgroundColor = Color.LIGHT_PRIMARY,
  marginRight,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {borderWidth: 1, borderColor, backgroundColor, marginRight},
      ]}>
      <AppText style={[styles.titleLabel, {color}]}>{title}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 49,
    flex: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleLabel: {
    fontSize: 16,
  },
});

export default AppButton;
