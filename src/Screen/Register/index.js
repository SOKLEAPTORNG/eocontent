import React, {useCallback, useState} from 'react';
import {
  Image,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  TextInput,
} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppInput from '../../Component/Share/AppInput';
import AppLongButton from '../../Component/Share/AppLongButton';
import {Color} from '../../Constant';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome6';

export default function Register() {
  const navigation = useNavigation();
  const [isChecked, setIsChecked] = useState(false);
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraHeight={150}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.screen}>
            <Image style={styles.appLogo} source={images.AppLogo()} />
            <AppText style={styles.loginLabel}>Register</AppText>
            <AppText style={styles.defaultText}>Name</AppText>
            <AppInput marginVertical={8} />
            <AppText style={styles.defaultText}>Email address </AppText>
            <AppInput marginVertical={8} />
            <AppText style={styles.defaultText}>Phone</AppText>
            <View style={styles.phoneInputContainer}>
              <TouchableOpacity style={styles.flagSideContainer}>
                <Image style={styles.khFlag} source={images.KhmerFlag()} />
                <AppText style={styles.codeLabel}>+855</AppText>
              </TouchableOpacity>
              <TextInput keyboardType="numeric" style={styles.input} />
            </View>
            <AppText style={styles.defaultText}>Password</AppText>
            <AppInput marginVertical={8} />
            <AppText style={styles.defaultText}>Confirm Password</AppText>
            <AppInput marginTop={8} />
            <View style={styles.rowContainer}>
              <TouchableOpacity
                style={styles.checkBox}
                onPress={() => setIsChecked(!isChecked)}>
                {isChecked && (
                  <View
                    style={[
                      styles.checkBox,
                      {margin: -1, backgroundColor: Color.LIGHT},
                    ]}>
                    <Icon style={styles.checkIcon} name="check" />
                  </View>
                )}
              </TouchableOpacity>
              <AppText style={[styles.agreeTermPrivacy, {marginLeft: 5}]}>
                I agree to the
              </AppText>
              <TouchableOpacity>
                <AppText
                  style={[
                    styles.agreeTermPrivacy,
                    {color: Color.LIGHT_PRIMARY},
                  ]}>
                  {' '}
                  terms of service{' '}
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.agreeTermPrivacy}>and </AppText>
              <TouchableOpacity>
                <AppText
                  style={[
                    styles.agreeTermPrivacy,
                    {color: Color.LIGHT_PRIMARY},
                  ]}>
                  privacy policy
                </AppText>
              </TouchableOpacity>
              <AppText style={styles.agreeTermPrivacy}>.</AppText>
            </View>
            <AppLongButton
              title={'Register'}
              onPress={() => navigation.navigate('VerifyOTP')}
            />
            <View style={[styles.rowContainer, {marginBottom: 15}]}>
              <AppText style={styles.defaultText}>
                Already have an account ?
              </AppText>
              <TouchableOpacity
                onPress={() => navigation.navigate('LoginScreen')}>
                <AppText style={styles.lightPrimaryText}>Login</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </Layout>
  );
}
