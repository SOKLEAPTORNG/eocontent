import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  Modal,
  Animated,
} from 'react-native';
import {Color} from '../../Constant';

const AppBottomSheet = ({
  visible,
  children,
  paddingTop = 15,
  paddinBottom,
  width = '92%',
  height,
}) => {
  const animatedValue = useState(new Animated.Value(0))[0];

  const toggleModal = () => {
    Animated.timing(animatedValue, {
      toValue: visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const modalAnimatedStyle = {
    transform: [
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 1],
          outputRange: [500, 0],
        }),
      },
    ],
  };

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.bottomSheet, modalAnimatedStyle]}>
          <View style={styles.screen}>
            <View style={[{paddingTop, paddinBottom, width, height}]}>
              <View style={styles.topLine} />
              {children}
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'flex-end',
  },
  bottomSheet: {
    backgroundColor: Color.LIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  screen: {
    width: '100%',
    backgroundColor: Color.LIGHT,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
  },
  topLine: {
    height: 3.5,
    width: 50,
    borderRadius: 20,
    backgroundColor: Color.TOP_LINE,
    alignSelf: 'center',
  },
});

export default AppBottomSheet;
