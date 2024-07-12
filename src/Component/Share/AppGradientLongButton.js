import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import AppText from './AppText';
import {Color} from '../../Constant';
import LinearGradient from 'react-native-linear-gradient';

const AppGradientLongButton = ({
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
  fontWeight,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
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
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#22AAD4', '#3DD2CF']}>
        <AppText style={[styles.label, {color, fontWeight}]}>{title}</AppText>
      </LinearGradient>
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

export default AppGradientLongButton;
