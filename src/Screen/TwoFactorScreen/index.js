import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import {Color} from '../../Constant';
import AppLongButton from '../../Component/Share/AppLongButton';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/core';
import AppCard from '../../Component/Share/AppCard';
import Icon from 'react-native-vector-icons/Ionicons';

const emailItems = ['Disable', 'Enable'];

const TwoFactorScreen = () => {
  const navigation = useNavigation();
  const [selectedEmailItem, setSelectedEmailItem] = useState(emailItems[0]);
  const [isEmailDropdownVisible, setIsEmailDropdownVisible] = useState(true);

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSelectEmailItem = item => {
    setSelectedEmailItem(item);
    setIsEmailDropdownVisible(false);
  };

  useEffect(() => {
    handleSelectEmailItem(emailItems[0]);
  }, []);

  const renderCheckIcon = (item, selectedItem) => {
    if (selectedItem === item) {
      return <Icon style={styles.checkIcon} name="checkmark-sharp" />;
    }
    return null;
  };

  const getItemContainerStyles = (index, totalItems) => {
    const containerStyles = [styles.checkContentContainer];

    if (index === 0) {
      containerStyles.push({
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      });
    } else if (index === totalItems - 1) {
      containerStyles.push({
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        borderBottomWidth: 0,
      });
    }

    return containerStyles;
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
            <AppLongButton
              backgroundColor={Color.APP_BACKGROUND}
              borderColor={Color.DARK_SILVER}
              color={Color.DARK_SILVER}
              marginTop={10}
              title={'Password'}
              onPress={() => navigation.navigate('Security')}
            />
            <AppLongButton marginTop={10} title={'Two-factor authentication'} />
            <AppText style={styles.inputLabel}>Email</AppText>
            <View style={styles.dropdownContent}>
              <AppCard
                justifyContent={'space-between'}
                height={50}
                backgroundColor={Color.APP_BACKGROUND}
                padding={0}
                flexDirection={'row'}
                alignItems={'center'}
                paddingHorizontal={15}>
                <AppText style={styles.contentType}>
                  {selectedEmailItem}
                </AppText>
                <View style={styles.arrowContent}>
                  <TouchableOpacity
                    onPress={() =>
                      setIsEmailDropdownVisible(!isEmailDropdownVisible)
                    }>
                    <Icon style={styles.arrowIcon} name="caret-up-sharp" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      setIsEmailDropdownVisible(!isEmailDropdownVisible)
                    }>
                    <Icon style={styles.arrowIcon} name="caret-down-sharp" />
                  </TouchableOpacity>
                </View>
              </AppCard>
              {isEmailDropdownVisible && (
                <View style={styles.contentDropdown}>
                  {emailItems.map((item, index) => (
                    <TouchableOpacity
                      key={item}
                      style={getItemContainerStyles(index, emailItems.length)}
                      onPress={() => handleSelectEmailItem(item)}>
                      <View style={styles.checkWrapper}>
                        {renderCheckIcon(item, selectedEmailItem)}
                      </View>
                      <AppText style={styles.checkContentLabel}>{item}</AppText>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
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

export default TwoFactorScreen;
