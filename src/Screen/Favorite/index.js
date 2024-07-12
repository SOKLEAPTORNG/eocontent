import React, {useCallback, useState} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Modal,
} from 'react-native';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/Octicons';
import SearchContent from '../../Component/Share/AppCard';
import images from '../../Common/images';
import {Color} from '../../Constant';
import Item from '../../Component/Share/AppCard';
import FilterItem from '../../Component/Share/AppCard';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLongButton from '../../Component/Share/AppLongButton';

const Favorite = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleKeyboardDismiss = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  const renderHeaderContent = () => (
    <View style={styles.headerContent}>
      <View style={styles.imageContentWrapper}>
        <View style={styles.imageWrapper}>
          <AppText style={styles.contentLabel}>Image</AppText>
        </View>
        <View style={styles.templateWrapper}>
          <AppText style={styles.contentLabel}>Template</AppText>
        </View>
      </View>
      <View style={styles.wordCreateWrapper}>
        <View style={styles.wordWrapper}>
          <AppText style={styles.contentLabel}>Word</AppText>
        </View>
        <View style={styles.dateWrapper}>
          <AppText style={styles.contentLabel}>Create at</AppText>
        </View>
      </View>
    </View>
  );

  const renderItem = (icon, label, amount, date) => (
    <Item
      key={label}
      height={75}
      marginBottom={10}
      flexDirection={'row'}
      padding={0}
      backgroundColor={Color.FAVORITE_ITEM}
      borderColor={Color.FAVORITE_ITEM}>
      <View style={styles.imageContentWrapper}>
        <View style={styles.imageWrapper}>
          <Image style={styles.itemIcon} source={icon} />
        </View>
        <View style={styles.templateWrapper}>
          <AppText style={styles.itemLabel}>{label}</AppText>
        </View>
      </View>
      <View style={styles.wordCreateWrapper}>
        <View style={styles.wordWrapper}>
          <AppText style={styles.itemLabel}>{amount}</AppText>
        </View>
        <View style={styles.dateWrapper}>
          <AppText style={styles.itemLabel}>{date}</AppText>
        </View>
      </View>
    </Item>
  );

  const items = [
    {
      icon: images.RewriteIcon(),
      label: 'Rewrite Content',
      amount: '1400',
      date: '2 hours ago',
    },
    {
      icon: images.ReviewIcon(),
      label: 'Review Content',
      amount: '400',
      date: '12 hours ago',
    },
    {
      icon: images.WriteIcon(),
      label: 'Write Email',
      amount: '140',
      date: '20 hours ago',
    },
  ];

  const generateFilterItem = (label, options) => (
    <>
      <AppText style={styles.filterLabel}>{label}</AppText>
      <FilterItem
        justifyContent={'space-between'}
        height={35}
        backgroundColor={Color.LIGHT}
        borderColor={Color.DARK_SILVER}
        padding={0}
        borderRadius={12}
        flexDirection={'row'}
        alignItems={'center'}
        paddingHorizontal={15}
        marginBottom={15}>
        <AppText style={styles.filterItemLabel}>{options.label}</AppText>
        <View style={styles.arrowContent}>
          <TouchableOpacity>
            <Ionicons style={styles.arrowIcon} name="caret-up-sharp" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons style={styles.arrowIcon} name="caret-down-sharp" />
          </TouchableOpacity>
        </View>
      </FilterItem>
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={handleKeyboardDismiss}>
      <Layout>
        <SearchContent
          flexDirection={'row'}
          alignItems={'center'}
          height={50}
          marginTop={10}
          backgroundColor={Color.APP_BACKGROUND}
          padding={0}>
          <View style={styles.searchWrapper}>
            <Icon style={styles.searchIcon} name="search" />
          </View>
          <TextInput
            style={styles.input}
            placeholderTextColor={Color.DARK_SILVER}
            placeholder="Search"
          />
          <TouchableOpacity
            style={styles.filterWrapper}
            onPress={() => setModalVisible(true)}>
            <Image style={styles.filterIcon} source={images.FilterIcon()} />
          </TouchableOpacity>
        </SearchContent>
        {renderHeaderContent()}
        {items.map(item =>
          renderItem(item.icon, item.label, item.amount, item.date),
        )}
        <Modal
          animationType="pop"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              {generateFilterItem('Search by', {label: 'Name'})}
              {generateFilterItem('Template', {label: 'All'})}
              {generateFilterItem('Favorite', {label: 'All'})}
              {generateFilterItem('Sort by', {label: 'Date created'})}
              {generateFilterItem('Sort', {label: 'Descending'})}
              {generateFilterItem('Results per page', {label: '10'})}
              <AppLongButton
                width={'75%'}
                alignSelf={'center'}
                title={'Search'}
                marginVertical={5}
                onPress={() => setModalVisible(false)}
              />
            </View>
          </View>
        </Modal>
      </Layout>
    </TouchableWithoutFeedback>
  );
};

export default Favorite;
