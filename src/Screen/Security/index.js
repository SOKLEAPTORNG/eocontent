import {View, TouchableWithoutFeedback, Keyboard} from 'react-native';
import React, {useCallback} from 'react';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppInput from '../../Component/Share/AppInput';
import {Color} from '../../Constant';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/core';

const Security = () => {
  const navigation = useNavigation();
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.screen}>
            <AppLongButton marginTop={10} title={'Password'} />
            <AppLongButton
              marginTop={10}
              backgroundColor={Color.APP_BACKGROUND}
              borderColor={Color.DARK_SILVER}
              title={'Two-factor authentication'}
              color={Color.DARK_SILVER}
              onPress={() => navigation.navigate('TwoFactorScreen')}
            />
            <AppText style={styles.inputLabel}>Current Password</AppText>
            <AppInput
              height={50}
              placeholder={'Input Current Password'}
              placeholderTextColor={Color.DARK_GRAY}
            />
            <AppText style={styles.inputLabel}>New Password</AppText>
            <AppInput
              height={50}
              placeholder={'Input New Password'}
              placeholderTextColor={Color.DARK_GRAY}
            />
            <AppText style={styles.inputLabel}>Confirm new Password</AppText>
            <AppInput
              height={50}
              placeholder={'Confim Password'}
              placeholderTextColor={Color.DARK_GRAY}
            />
          </View>
          <AppLongButton
            onPress={handleGoBack}
            title={'Save'}
            alignSelf={'center'}
            bottom={70}
            position={'absolute'}
          />
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default Security;
