import React, {useState} from 'react';
import {View, Image, ScrollView, TouchableOpacity} from 'react-native';
import Layout from '../../Component/Layout';
import AppText from '../../Component/Share/AppText';
import images from '../../Common/images';
import {styles} from './styles';
import AppButton from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AppLogout from '../../Component/Share/AppLogout';

const Profile = () => {
  const navigation = useNavigation();
  const [logoutVisible, setLogoutVisible] = useState(false);

  const navigateToScreen = screenName => {
    navigation.navigate(screenName);
  };

  const ListButton = (iconSource, labelText, screenName, isLogout) => (
    <AppButton
      activeOpacity={0.2}
      isShowShadow={true}
      marginTop={10}
      flexDirection={'row'}
      alignItems={'center'}
      width={'99%'}
      alignSelf={'center'}
      marginBottom={isLogout ? 15 : 0}
      borderWidth={0}
      backgroundColor={Color.APP_BACKGROUND}
      onPress={() =>
        isLogout ? setLogoutVisible(true) : navigateToScreen(screenName)
      }>
      <Image style={styles.defaultIcon} source={iconSource} />
      <AppText style={[styles.defaultLabel, isLogout && {color: Color.DANGER}]}>
        {labelText}
      </AppText>
      <Icon style={styles.rightArrowIcon} name="angle-right" />
    </AppButton>
  );

  const handleLogout = () => {
    console.log('Logging out...');
    setLogoutVisible(false);
  };

  return (
    <Layout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          backgroundColor: Color.APP_BACKGROUND,
        }}>
        <View style={styles.screen}>
          <Image style={styles.appLogo} source={images.AppLogo()} />
          <AppButton
            height={86}
            flexDirection={'row'}
            alignItems={'center'}
            backgroundColor={Color.DARK}
            marginTop={20}
            marginBottom={5}
            borderRadius={20}
            onPress={() => navigation.navigate('SubscribePlan')}>
            <Image style={styles.premiumIcon} source={images.PremiumIcon()} />
            <View style={styles.culumnContent}>
              <AppText style={styles.proLabel}>Update to PRO!</AppText>
              <AppText style={styles.proText}>
                Sorem ipsum dolor sit amet consectetur
              </AppText>
            </View>
            <Icon style={styles.premiumRightArrow} name="angle-right" />
          </AppButton>
          {ListButton(images.PersonIcon(), 'Profile', 'Profile')}
          {ListButton(images.HistoryIcon(), 'History', 'HistoryScreen')}
          {ListButton(images.HeartIcon(), 'Favorite', 'Favorite')}
          {ListButton(images.EditIcon(), 'Edit', 'NormalEdit')}
          {ListButton(images.BillingIcon(), 'Billing', 'BILLING_TAB')}
          {ListButton(images.SecurityIcon(), 'Security', 'Security')}
          {ListButton(
            images.TermIcon(),
            'Terms & Conditions',
            'TermAndCondition',
          )}
          {ListButton(
            images.PrivacyIcon(),
            'Privacy & Policy',
            'PrivacyAndPolicy',
          )}
          {ListButton(images.PersonIcon(), 'About Us', 'AboutUs')}
          {ListButton(images.LogoutIcon(), 'Logout', null, true)}
        </View>
      </ScrollView>
      <AppLogout visible={logoutVisible} onPress={handleLogout} />
    </Layout>
  );
};

export default Profile;
