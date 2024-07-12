import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Modal, Animated} from 'react-native';
import {Color} from '../../Constant';
import AppText from './AppText';
import AppButton from '../../Component/Share/AppButton';
import {useNavigation} from '@react-navigation/core';

const AppLogout = ({visible, onPress}) => {
  const animatedValue = useState(new Animated.Value(0))[0];
  const navigation = useNavigation();

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

  const handleCancel = () => {
    if (onPress) {
      onPress(false);
    }
  };

  const handleLogout = () => {
    if (onPress) {
      onPress(true);
      navigation.navigate('LoginScreen');
    }
  };

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.modalContainer}>
        <Animated.View style={[styles.bottomSheet, modalAnimatedStyle]}>
          <View style={styles.screen}>
            <AppText style={styles.logoutLabel}>Log out</AppText>
            <View style={styles.line} />
            <AppText style={styles.logoutText}>
              Are you sure you want to Log out?
            </AppText>
            <View style={styles.rowContainer}>
              <AppButton
                borderColor={Color.DARK_SILVER}
                backgroundColor="transparent"
                marginRight={10}
                title={'Cancel'}
                onPress={handleCancel}
              />
              <AppButton
                borderColor={Color.DANGER}
                backgroundColor={Color.DANGER}
                title={'Yes I am Sure'}
                onPress={handleLogout}
              />
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
    backgroundColor: 'rgba(50, 50, 67, 0.85)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  screen: {
    width: '100%',
    backgroundColor: 'rgba(50, 50, 67, 0.85)',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 15,
  },

  logoutLabel: {
    fontSize: 24,
    color: Color.LIGHT,
    marginTop: 20,
  },
  line: {
    width: '100%',
    height: 0.5,
    backgroundColor: Color.DARK_SILVER,
    marginTop: 20,
    marginBottom: 30,
  },
  logoutText: {
    fontSize: 16,
    color: Color.LIGHT,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    marginTop: 30,
    marginBottom: 50,
  },
});

export default AppLogout;
