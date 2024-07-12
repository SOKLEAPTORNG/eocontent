import React, {useState, useEffect} from 'react';
import {Image, TouchableOpacity, View, ScrollView} from 'react-native';
import {Layout} from '../../Component';
import {Color} from '../../Constant';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';
import AppInput from '../../Component/Share/AppInput';
import Icon from 'react-native-vector-icons/Ionicons';
import AppCard from '../../Component/Share/AppCard';
import AppButton from '../../Component/Share/AppButton';
import {useNavigation} from '@react-navigation/core';

const toneItems = [
  '🤵‍♂️ Professional',
  '🤵‍♀️ Informative',
  '💪 Convincing',
  '😊 Friendly',
  '😃 Appreciation',
  '😎 Augring',
];

export default function NormalEdit() {
  const [selectedToneItem, setSelectedToneItem] = useState(toneItems[0]);
  const [isToneDropdownVisible, setIsToneDropdownVisible] = useState(true);
  const navigation = useNavigation();

  const handleSelectToneItem = item => {
    setSelectedToneItem(item);
    setIsToneDropdownVisible(false);
  };

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

  useEffect(() => {
    handleSelectToneItem(toneItems[0]);
  }, []);

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <AppText style={[styles.inputLabel, {marginTop: 10}]}>
          Rewrite Content
        </AppText>
        <AppInput height={130} textAlignVertical={'top'} multiline={true} />
        <AppText style={styles.inputLabel}>Tone</AppText>
        <View style={styles.dropdownContent}>
          <AppCard
            justifyContent={'space-between'}
            height={50}
            backgroundColor={Color.APP_BACKGROUND}
            padding={0}
            flexDirection={'row'}
            alignItems={'center'}
            paddingHorizontal={15}>
            <AppText style={styles.contentType}>{selectedToneItem}</AppText>
            <View style={styles.arrowContent}>
              <TouchableOpacity
                onPress={() =>
                  setIsToneDropdownVisible(!isToneDropdownVisible)
                }>
                <Icon style={styles.arrowIcon} name="caret-up-sharp" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setIsToneDropdownVisible(!isToneDropdownVisible)
                }>
                <Icon style={styles.arrowIcon} name="caret-down-sharp" />
              </TouchableOpacity>
            </View>
          </AppCard>
          {isToneDropdownVisible && (
            <View style={styles.contentDropdown}>
              {toneItems.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  style={getItemContainerStyles(index, toneItems.length)}
                  onPress={() => handleSelectToneItem(item)}>
                  <View style={styles.checkWrapper}>
                    {renderCheckIcon(item, selectedToneItem)}
                  </View>
                  <AppText style={styles.checkContentLabel}>{item}</AppText>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <View style={styles.rowContainer}>
          <AppButton title={'Write For Me'} marginRight={15} />
          <AppButton
            borderColor={Color.DARK_SILVER}
            backgroundColor={Color.APP_BACKGROUND}
            title={'Advance'}
            color={Color.DARK_SILVER}
            onPress={() => navigation.navigate('AdvanceEdit')}
          />
        </View>
        <View style={styles.fillOutContainer}>
          <Image style={styles.fillOutImage} source={images.FillOutIcon()} />
          <AppText style={styles.fillOutText}>
            Fill out the detail and click “ WRITE FOR ME “.
          </AppText>
        </View>
      </ScrollView>
    </Layout>
  );
}
