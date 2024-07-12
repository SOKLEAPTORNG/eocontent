import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Color} from '../../Constant';

const AppCustomHeader = ({
  children,
  flexDirection,
  justifyContent,
  backgroundColor = Color.APP_BACKGROUND,
  alignItems,
  paddingHorizontal = 15,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          flexDirection,
          justifyContent,
          backgroundColor,
          alignItems,
          paddingHorizontal,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    alignItems: 'center',
  },
});

export default AppCustomHeader;
