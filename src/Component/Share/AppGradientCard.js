import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Color} from '../../Constant';
import LinearGradient from 'react-native-linear-gradient';

const AppGradientCard = ({
  children,
  marginBottom,
  activeOpacity = 1,
  padding = 15,
  paddingBottom,
  onPress,
  borderRadius = 20,
  backgroundColor = Color.DARK_BLUE,
  height,
  flexDirection,
  alignItems,
  marginTop,
}) => {
  return (
    <LinearGradient
      colors={['#50C3FA', '#CD5EF6', '#EA682A']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={[
        styles.linearGradient,
        {
          marginBottom,
          marginTop,
        },
      ]}>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          onPress={onPress}
          activeOpacity={activeOpacity}
          style={[
            styles.container,
            {
              padding,
              paddingBottom,
              borderRadius,
              backgroundColor,
              height,
              flexDirection,
              alignItems,
            },
          ]}>
          {children}
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  linearGradient: {
    width: '100%',
    borderRadius: 20,
  },
  innerContainer: {
    borderRadius: 20,
    flex: 0.8,
    margin: 1,
    backgroundColor: Color.APP_BACKGROUND,
    justifyContent: 'center',
  },
});

export default AppGradientCard;
