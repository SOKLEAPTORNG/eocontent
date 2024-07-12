import React, {useCallback} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ScrollView,
} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppInput from '../../Component/Share/AppInput';
import AppLongButton from '../../Component/Share/AppLongButton';
import {Color} from '../../Constant';
import {useNavigation} from '@react-navigation/core';

export default function LoginScreen() {
  const navigation = useNavigation();
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
          <View style={styles.screen}>
            <Image style={styles.appLogo} source={images.AppLogo()} />
            <AppText style={styles.loginLabel}>Login</AppText>
            <AppText style={styles.inputLabel}>Email address</AppText>
            <AppInput marginVertical={8} />
            <AppText style={styles.inputLabel}>Password </AppText>
            <AppInput marginVertical={8} />
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgotPassword')}>
              <AppText style={styles.forgrtPassLabel}>
                Forgot your Password ?
              </AppText>
            </TouchableOpacity>
            <AppLongButton
              marginTop={20}
              marginBottom={30}
              title={'Login'}
              onPress={() => navigation.navigate('HOME')}
            />
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => navigation.navigate('PhoneNumberLogin')}>
              <Image
                style={styles.signInIconDefault}
                source={images.PhoneIcon()}
              />
              <AppText style={styles.signInLabelDefault}>Phone number</AppText>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => navigation.navigate('AfterRegisterGoogle')}>
              <Image
                style={styles.signInIconDefault}
                source={images.GoogleIcon()}
              />
              <AppText style={styles.signInLabelDefault}>
                Sign in with Google
              </AppText>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.signInButton, {backgroundColor: Color.PRIMARY}]}>
              <Image
                style={styles.signInIconDefault}
                source={images.FacebookIcon()}
              />
              <AppText
                style={[styles.signInLabelDefault, {color: Color.LIGHT}]}>
                Sign in with Facebook
              </AppText>
            </TouchableOpacity>
            <View style={styles.rowContainer}>
              <AppText style={styles.noAccountLabel}>
                Dont’ have an account ?
              </AppText>
              <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <AppText style={styles.registerLabel}>Register</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Layout>
  );
}
