import React, {useState} from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {styles} from './styles';
import Layout from '../../Component/Layout';
import AppText from '../../Component/Share/AppText';
import images from '../../Common/images';
import AppLongButton from '../../Component/Share/AppLongButton';
import {useNavigation} from '@react-navigation/core';

const CELL_COUNT = 6;

const VerifyOTP = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const navigation = useNavigation();

  return (
    <Layout>
      <Image style={styles.appLogo} source={images.AppLogo()} />
      <AppText style={styles.codeVerifyLabel}>Verify Code OTP</AppText>
      <AppText style={styles.codeSendLabel}>
        Code send to your Phone number
      </AppText>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldContent}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <AppText
            key={index}
            style={styles.cell}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </AppText>
        )}
      />
      <View style={styles.rowContainer}>
        <AppText style={styles.countDownTime}>(2:10) </AppText>
        <AppText style={styles.resendCode}>Resend Code? </AppText>
        <TouchableOpacity>
          <AppText style={styles.clickHereLabel}>Click here</AppText>
        </TouchableOpacity>
      </View>
      <AppLongButton
        marginTop={22}
        title={'Verify OTP'}
        // Will handle navigate source screen later
        // onPress={() => navigation.navigate('HOME')}
        onPress={() => navigation.navigate('AfterVerifyOTP')}
      />
    </Layout>
  );
};

export default VerifyOTP;
