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

const languageItems = [
  'English',
  'French',
  'Italiano',
  'Deutsch',
  'Magyar',
  'Nederlands',
  'Hrvatski',
  'Bahasa Indonesia',
  'Suomi',
  'Español',
];

const creativityItems = [
  'Optimal',
  'None (more factual)',
  'Low',
  'Medium',
  'High',
  'Max (less factual)',
];

const variationItems = ['1', '2', '3', '4', '5'];

const Preference = () => {
  const navigation = useNavigation();

  const [selectedLanguageItem, setSelectedLanguageItem] = useState(
    languageItems[0],
  );
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] =
    useState(true);
  const [selectedCreativityItem, setSelectedCreativityItem] = useState(
    creativityItems[0],
  );
  const [isCreativityDropdownVisible, setIsCreativityDropdownVisible] =
    useState(true);
  const [selectedVariationItem, setSelectedVariationItem] = useState(
    variationItems[0],
  );
  const [isVariationDropdownVisible, setIsVariationDropdownVisible] =
    useState(true);

  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleSelectLanguageItem = item => {
    setSelectedLanguageItem(item);
    setIsLanguageDropdownVisible(false);
  };

  const handleSelectCreativityItem = item => {
    setSelectedCreativityItem(item);
    setIsCreativityDropdownVisible(false);
  };

  const handleSelectVariationItem = item => {
    setSelectedVariationItem(item);
    setIsVariationDropdownVisible(false);
  };

  useEffect(() => {
    handleSelectLanguageItem(languageItems[0]);
    handleSelectCreativityItem(creativityItems[0]);
    handleSelectVariationItem(variationItems[0]);
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

  const renderDropdown = (
    label,
    items,
    selectedValue,
    isDropdownVisible,
    handleDropdownToggle,
    handleItemSelect,
  ) => (
    <>
      <AppText style={styles.inputLabel}>{label}</AppText>
      <View style={styles.dropdownContent}>
        <AppCard
          justifyContent={'space-between'}
          height={50}
          backgroundColor={Color.APP_BACKGROUND}
          padding={0}
          flexDirection={'row'}
          alignItems={'center'}
          paddingHorizontal={15}>
          <AppText style={styles.contentType}>{selectedValue}</AppText>
          <View style={styles.arrowContent}>
            <TouchableOpacity onPress={handleDropdownToggle}>
              <Icon style={styles.arrowIcon} name="caret-up-sharp" />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleDropdownToggle}>
              <Icon style={styles.arrowIcon} name="caret-down-sharp" />
            </TouchableOpacity>
          </View>
        </AppCard>
        {isDropdownVisible && (
          <View style={styles.contentDropdown}>
            {items.map((item, index) => (
              <TouchableOpacity
                key={item}
                style={getItemContainerStyles(index, items.length)}
                onPress={() => handleItemSelect(item)}>
                <View style={styles.checkWrapper}>
                  {renderCheckIcon(item, selectedValue)}
                </View>
                <AppText style={styles.checkContentLabel}>{item}</AppText>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </>
  );

  return (
    <Layout>
      <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          contentContainerStyle={{flexGrow: 1}}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled">
          <View style={styles.screen}>
            <AppLongButton marginTop={10} title={'Templates'} />
            {renderDropdown(
              'Language',
              languageItems,
              selectedLanguageItem,
              isLanguageDropdownVisible,
              () => setIsLanguageDropdownVisible(!isLanguageDropdownVisible),
              handleSelectLanguageItem,
            )}
            {renderDropdown(
              'Creativity Level',
              creativityItems,
              selectedCreativityItem,
              isCreativityDropdownVisible,
              () =>
                setIsCreativityDropdownVisible(!isCreativityDropdownVisible),
              handleSelectCreativityItem,
            )}
            {renderDropdown(
              'Variation',
              variationItems,
              selectedVariationItem,
              isVariationDropdownVisible,
              () => setIsVariationDropdownVisible(!isVariationDropdownVisible),
              handleSelectVariationItem,
            )}
            <AppLongButton
              onPress={handleGoBack}
              title={'Save'}
              alignSelf={'center'}
              bottom={70}
              position={'absolute'}
            />
          </View>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </Layout>
  );
};

export default Preference;
