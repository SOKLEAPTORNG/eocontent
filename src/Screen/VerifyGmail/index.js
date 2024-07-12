import React from 'react';
import {Image, View, TouchableOpacity} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import {useNavigation} from '@react-navigation/core';

export default function VerifyGmail() {
  const navigation = useNavigation();

  return (
    <Layout alignItems={'center'}>
      <Image style={styles.appLogo} source={images.AppLogo()} />
      <Image
        style={styles.verifyAccountImage}
        source={images.VerifyAccount()}
      />
      <AppText style={styles.verifyAccountLabel}>Verify Account</AppText>
      <AppText style={styles.verifyDescription}>
        Verify your account by accessing the link sent through email.
      </AppText>
      <View style={styles.rowContainer}>
        <AppText style={styles.noEmailRecieve}>
          Didn’t recieve the email ?{' '}
        </AppText>
        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <AppText style={styles.resendLabel}>Resend</AppText>
        </TouchableOpacity>
      </View>
    </Layout>
  );
}
