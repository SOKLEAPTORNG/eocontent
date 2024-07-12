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

const outputItems = [
  '1 Output',
  '2 Output',
  '3 Output',
  '4 Output',
  '5 Output',
];

const creativityItems = [
  'Optimal',
  'None (more factual)',
  'Low',
  'Meduim',
  'High',
  'Max (less factual)',
];

const toneItems = [
  'Professional',
  'Informative',
  'Convincing',
  'Friendly',
  'Appreciation',
  'Auguring',
];

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

export default function Template() {
  const [selectedOutputItem, setSelectedOutputItem] = useState(outputItems[0]);
  const [isOutputDropdownVisible, setIsOutputDropdownVisible] = useState(true);

  const [selectedCreativityItem, setSelectedCreativityItem] = useState(
    creativityItems[0],
  );
  const [isCreativityDropdownVisible, setIsCreativityDropdownVisible] =
    useState(true);

  const [selectedToneItem, setSelectedToneItem] = useState(toneItems[0]);
  const [isToneDropdownVisible, setIsToneDropdownVisible] = useState(true);

  const [selectedLanguageItem, setSelectedLanguageItem] = useState(
    languageItems[0],
  );
  const [isLanguageDropdownVisible, setIsLanguageDropdownVisible] =
    useState(true);

  const [isAdvanceClicked, setIsAdvanceClicked] = useState(false);

  const handleSelectOutputItem = item => {
    setSelectedOutputItem(item);
    setIsOutputDropdownVisible(false);
  };

  const handleSelectCreativityItem = item => {
    setSelectedCreativityItem(item);
    setIsCreativityDropdownVisible(false);
  };

  const handleSelectToneItem = item => {
    setSelectedToneItem(item);
    setIsToneDropdownVisible(false);
  };

  const handleSelectLanguageItem = item => {
    setSelectedLanguageItem(item);
    setIsLanguageDropdownVisible(false);
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
    handleSelectOutputItem(outputItems[0]);
    handleSelectCreativityItem(creativityItems[0]);
    handleSelectToneItem(toneItems[0]);
    handleSelectLanguageItem(languageItems[0]);
  }, []);

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <AppText style={styles.inputLabel}>Content Type</AppText>
        <AppCard
          justifyContent={'space-between'}
          flexDirection={'row'}
          alignItems={'center'}
          height={50}
          backgroundColor={Color.APP_BACKGROUND}
          padding={0}
          paddingHorizontal={15}>
          <AppText style={styles.contentType}>Rewrite Content</AppText>
          <TouchableOpacity>
            <Icon style={styles.contentTypeIcon} name="caret-down-outline" />
          </TouchableOpacity>
        </AppCard>
        <AppText style={styles.inputLabel}>Rewrite Content</AppText>
        <AppInput height={130} textAlignVertical={'top'} multiline={true} />
        <AppText style={styles.inputLabel}>
          Key Word
          <AppText style={styles.optionalLabel}> ( Optional )</AppText>
        </AppText>
        <AppInput />
        {isAdvanceClicked && (
          <>
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
          </>
        )}

        {isAdvanceClicked && (
          <>
            <AppText style={styles.inputLabel}>Language</AppText>
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
                  {selectedLanguageItem}
                </AppText>
                <View style={styles.arrowContent}>
                  <TouchableOpacity
                    onPress={() =>
                      setIsLanguageDropdownVisible(!isLanguageDropdownVisible)
                    }>
                    <Icon style={styles.arrowIcon} name="caret-up-sharp" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      setIsLanguageDropdownVisible(!isLanguageDropdownVisible)
                    }>
                    <Icon style={styles.arrowIcon} name="caret-down-sharp" />
                  </TouchableOpacity>
                </View>
              </AppCard>
              {isLanguageDropdownVisible && (
                <View style={styles.contentDropdown}>
                  {languageItems.map((item, index) => (
                    <TouchableOpacity
                      key={item}
                      style={getItemContainerStyles(
                        index,
                        languageItems.length,
                      )}
                      onPress={() => handleSelectLanguageItem(item)}>
                      <View style={styles.checkWrapper}>
                        {renderCheckIcon(item, selectedLanguageItem)}
                      </View>
                      <AppText style={styles.checkContentLabel}>{item}</AppText>
                    </TouchableOpacity>
                  ))}
                </View>
              )}
            </View>
          </>
        )}

        <AppText style={styles.inputLabel}>Output</AppText>
        <View style={styles.dropdownContent}>
          <AppCard
            justifyContent={'space-between'}
            height={50}
            backgroundColor={Color.APP_BACKGROUND}
            padding={0}
            flexDirection={'row'}
            alignItems={'center'}
            paddingHorizontal={15}>
            <AppText style={styles.contentType}>{selectedOutputItem}</AppText>
            <View style={styles.arrowContent}>
              <TouchableOpacity
                onPress={() =>
                  setIsOutputDropdownVisible(!isOutputDropdownVisible)
                }>
                <Icon style={styles.arrowIcon} name="caret-up-sharp" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setIsOutputDropdownVisible(!isOutputDropdownVisible)
                }>
                <Icon style={styles.arrowIcon} name="caret-down-sharp" />
              </TouchableOpacity>
            </View>
          </AppCard>
          {isOutputDropdownVisible && (
            <View style={styles.contentDropdown}>
              {outputItems.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  style={getItemContainerStyles(index, outputItems.length)}
                  onPress={() => handleSelectOutputItem(item)}>
                  <View style={styles.checkWrapper}>
                    {renderCheckIcon(item, selectedOutputItem)}
                  </View>
                  <AppText style={styles.checkContentLabel}>{item}</AppText>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>

        <AppText style={styles.inputLabel}>Creativity Level</AppText>
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
              {selectedCreativityItem}
            </AppText>
            <View style={styles.arrowContent}>
              <TouchableOpacity
                onPress={() =>
                  setIsCreativityDropdownVisible(!isCreativityDropdownVisible)
                }>
                <Icon style={styles.arrowIcon} name="caret-up-sharp" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  setIsCreativityDropdownVisible(!isCreativityDropdownVisible)
                }>
                <Icon style={styles.arrowIcon} name="caret-down-sharp" />
              </TouchableOpacity>
            </View>
          </AppCard>
          {isCreativityDropdownVisible && (
            <View style={styles.contentDropdown}>
              {creativityItems.map((item, index) => (
                <TouchableOpacity
                  key={item}
                  style={getItemContainerStyles(index, creativityItems.length)}
                  onPress={() => handleSelectCreativityItem(item)}>
                  <View style={styles.checkWrapper}>
                    {renderCheckIcon(item, selectedCreativityItem)}
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
            onPress={() => setIsAdvanceClicked(true)}
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
