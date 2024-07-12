import React, {useCallback} from 'react';
import {Image, Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppInput from '../../Component/Share/AppInput';
import AppLongButton from '../../Component/Share/AppLongButton';
import {useNavigation} from '@react-navigation/core';

export default function ForgotPassword() {
  const navigation = useNavigation();
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <View style={styles.screen}>
          <Image style={styles.appLogo} source={images.AppLogo()} />
          <AppText style={styles.forgotPassLabel}>Forgot Password</AppText>
          <AppText style={styles.emailLabel}>Email Address</AppText>
          <AppInput marginVertical={8} />
          <AppText style={styles.descriptionText}>
            Please enter your gmail registration, so that we can sent recovery
            code to your gmail
          </AppText>
          <AppLongButton
            marginTop={90}
            title={'Send Password Reset Link'}
            onPress={() => navigation.navigate('VerifyGmail')}
          />
        </View>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
