import React, {useCallback} from 'react';
import {
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppLongButton from '../../Component/Share/AppLongButton';
import {Color} from '../../Constant';
import {useNavigation} from '@react-navigation/core';

export default function PhoneNumberLogin() {
  const navigation = useNavigation();
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.screen}>
          <Image style={styles.appLogo} source={images.AppLogo()} />
          <AppText style={styles.regiterLabel}>Register</AppText>
          <AppText style={styles.signUpText}>
            Sign up with your phone number
          </AppText>
          <AppText style={styles.phoneNumLabel}>Phone number</AppText>
          <View style={styles.phoneInputContainer}>
            <TouchableOpacity style={styles.flagSideContainer}>
              <Image style={styles.khFlag} source={images.KhmerFlag()} />
              <AppText style={styles.codeLabel}>+855</AppText>
            </TouchableOpacity>
            <TextInput
              placeholderTextColor={Color.DARK_GRAY}
              keyboardType="numeric"
              placeholder="Phone Number"
              style={styles.input}
            />
          </View>
          <AppLongButton
            marginTop={100}
            title={'Login'}
            onPress={() => navigation.navigate('VerifyOTP')}
          />
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
