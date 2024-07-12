import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../Constant';

const AppCard = ({
  children,
  marginTop,
  marginBottom,
  activeOpacity = 1,
  padding = 15,
  paddingHorizontal,
  paddingVertical,
  paddingTop,
  paddingBottom,
  onPress,
  borderRadius = 10,
  backgroundColor = Color.DARK_BLUE,
  height,
  justifyContent,
  flexDirection,
  alignItems,
  zIndex,
  borderColor = Color.LIGHT_PRIMARY,
  borderWidth = 0.5,
  isShowShadow = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={activeOpacity}
      style={[
        styles.container,
        {
          marginTop,
          marginBottom,
          padding,
          paddingHorizontal,
          paddingVertical,
          paddingTop,
          paddingBottom,
          borderRadius,
          backgroundColor,
          height,
          justifyContent,
          flexDirection,
          alignItems,
          zIndex,
          borderColor,
          borderWidth,
        },
        isShowShadow ? styles.shadow : null,
      ]}>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  shadow: {
    shadowColor: Color.DARK,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 3,
  },
});

export default AppCard;
