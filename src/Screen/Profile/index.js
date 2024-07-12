import {
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useCallback} from 'react';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppInput from '../../Component/Share/AppInput';
import {Color} from '../../Constant';
import Icon from 'react-native-vector-icons/Ionicons';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/core';

const Profile = () => {
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
            <AppText style={[styles.inputLabel, {marginTop: 10}]}>Name</AppText>
            <AppInput
              height={50}
              placeholder={'Input Name'}
              placeholderTextColor={Color.DARK_GRAY}
            />
            <AppText style={styles.inputLabel}>Phone</AppText>
            <AppInput
              height={50}
              placeholder={'Input Phone Number'}
              placeholderTextColor={Color.DARK_GRAY}
            />
            <AppText style={styles.inputLabel}>Email</AppText>
            <AppInput
              height={50}
              placeholder={'Input Email'}
              placeholderTextColor={Color.DARK_GRAY}
            />
            <AppText style={styles.inputLabel}>Email</AppText>
            <AppInput
              height={50}
              placeholder={'Input Timezone'}
              placeholderTextColor={Color.DARK_GRAY}>
              <View style={styles.arrowContent}>
                <TouchableOpacity>
                  <Icon style={styles.arrowIcon} name="caret-up-sharp" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Icon style={styles.arrowIcon} name="caret-down-sharp" />
                </TouchableOpacity>
              </View>
            </AppInput>
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
      <AppLongButton
        onPress={handleGoBack}
        position={'absolut'}
        bottom={15}
        title={'Save'}
        alignSelf={'center'}
      />
    </Layout>
  );
};

export default Profile;
