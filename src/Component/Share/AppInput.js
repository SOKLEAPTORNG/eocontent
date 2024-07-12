import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import {Color} from '../../Constant';

const AppInput = ({
  placeholder,
  marginTop,
  children,
  marginBottom,
  marginVertical,
  width = '100%',
  flex,
  marginLeft,
  placeholderTextColor = Color.LIGHT,
  height = 50,
  textAlignVertical,
  multiline = false,
}) => {
  return (
    <View
      style={[
        styles.container,
        {
          marginTop,
          marginBottom,
          marginVertical,
          width,
          flex,
          marginLeft,
          height,
        },
      ]}>
      <TextInput
        multiline={multiline}
        style={[styles.input, {textAlignVertical}]}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    height: '100%',
    width: '100%',
    backgroundColor: Color.APP_BACKGROUND,
    fontSize: 16,
    color: Color.LIGHT,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: Color.LIGHT_PRIMARY,
    borderWidth: 0.5,
  },
});

export default AppInput;
