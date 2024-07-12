import React, {useCallback} from 'react';
import {View, Keyboard, TouchableWithoutFeedback} from 'react-native';
import {Layout} from '../../Component';
import AppText from '../../Component/Share/AppText';
import AppInput from '../../Component/Share/AppInput';
import {styles} from './styles';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/core';

export default function AfterVerifyOTP() {
  const navigation = useNavigation();
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.screen}>
            <AppText style={styles.inputLabel}>Name</AppText>
            <AppInput />
            <AppText style={styles.inputLabel}>Phone</AppText>
            <AppText style={styles.cantChangeNumText}>
              Phone number can not changing
            </AppText>
            <View style={styles.fixPhoneContainer}>
              <AppText style={styles.fixPhoneNumber}>098 899 7997</AppText>
            </View>
            <AppText style={styles.inputLabel}>Email</AppText>
            <AppInput />
            <AppText style={styles.inputLabel}>Password</AppText>
            <AppInput />
            <AppText style={styles.inputLabel}>Confirm Password</AppText>
            <AppInput />
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <AppLongButton
        title={'Submit'}
        position={'absolute'}
        bottom={15}
        alignSelf={'center'}
        onPress={() => navigation.navigate('HOME')}
      />
    </Layout>
  );
}
