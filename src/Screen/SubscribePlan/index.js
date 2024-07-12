import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import images from '../../Common/images';
import Icon from 'react-native-vector-icons/FontAwesome6';
import AppLongButton from '../../Component/Share/AppLongButton';
import AppBottomSheet from '../../Component/Share/AppBottomSheet';
import PaywayOptionContainer from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import GradientButton from '../../Component/Share/AppGradientCard';

const CheckItem = ({label}) => (
  <View style={styles.rowContainer}>
    <View style={styles.checkIconWrapper}>
      <Icon style={styles.checkIcon} name="check" />
    </View>
    <AppText style={styles.checkLabel}>{label}</AppText>
  </View>
);

const SubscribePlan = () => {
  const [selectedOption, setSelectedOption] = useState('yearly');
  const [isPayWayBottomSheetVisible, setPayWayBottomSheetVisible] =
    useState(false);
  const [isSuccessBottomSheetVisible, setSuccessBottomSheetVisible] =
    useState(false);

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  const handleShowPayWayBottomSheet = () => {
    setPayWayBottomSheetVisible(true);
  };

  const handleClosePayWayBottomSheet = () => {
    setPayWayBottomSheetVisible(false);
  };

  const handleShowSuccessBottomSheet = () => {
    setSuccessBottomSheetVisible(true);
  };

  const handleCloseSuccessBottomSheet = () => {
    setSuccessBottomSheetVisible(false);
  };

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Image style={styles.featureLogo} source={images.FeatureLogo()} />
        <AppText style={styles.mainLabel}>Access all Features</AppText>
        <CheckItem label={'Unlimited Words'} />
        <CheckItem label={'Unlimited documents'} />
        <CheckItem label={'Templates'} />
        <CheckItem label={'Custom templates'} />
        <CheckItem label={'Data export'} />
        <CheckItem label={'API'} />
        <TouchableOpacity
          style={styles.optionContainer}
          onPress={() => handleOptionSelect('yearly')}>
          <View style={styles.activeContentSide}>
            {selectedOption === 'yearly' ? (
              <Image
                style={styles.activeOptionIcon}
                source={images.ActiveOption()}
              />
            ) : (
              <View style={styles.inactiveOption} />
            )}
          </View>
          <View style={styles.optionInfo}>
            <AppText style={styles.durationLabel}>Yearly</AppText>
            <AppText style={styles.durationType}>2 months free</AppText>
          </View>
          <View style={styles.optionPriceContainer}>
            <AppText style={styles.dollar}>$</AppText>
            <AppText style={styles.priceLabel}> 790 </AppText>
            <AppText style={styles.perDuriation}>/y</AppText>
          </View>
          <Image
            style={styles.traingleStarImage}
            source={images.TraingleStar()}
          />
        </TouchableOpacity>
        <GradientButton
          height={90}
          padding={0}
          flexDirection={'row'}
          alignItems={'center'}
          marginTop={15}
          activeOpacity={0.2}
          backgroundColor={Color.APP_BACKGROUND}
          onPress={() => handleOptionSelect('monthly')}>
          <View style={styles.activeContentSide}>
            {selectedOption === 'monthly' ? (
              <Image
                style={styles.activeOptionIcon}
                source={images.ActiveOption()}
              />
            ) : (
              <View style={styles.inactiveOption} />
            )}
          </View>
          <View style={styles.optionInfo}>
            <AppText style={styles.durationLabel}>Monthly</AppText>
            <AppText style={styles.durationType}>
              subscript monthly plan{' '}
            </AppText>
          </View>
          <View style={styles.optionPriceContainer}>
            <AppText style={styles.dollar}>$</AppText>
            <AppText style={styles.priceLabel}> 79 </AppText>
            <AppText style={styles.perDuriation}>/m</AppText>
          </View>
        </GradientButton>
        <AppLongButton
          marginTop={20}
          marginBottom={15}
          title={'Continue'}
          onPress={handleShowPayWayBottomSheet}
        />
        <AppText style={styles.termText}>
          Terms of use | Privacy policy | Restore
        </AppText>
      </ScrollView>
      <AppBottomSheet
        visible={isPayWayBottomSheetVisible}
        closeModal={() => setPayWayBottomSheetVisible(false)}>
        <AppText style={styles.payWayLabel}>Choose way to pay</AppText>
        <PaywayOptionContainer
          flexDirection={'row'}
          alignItems={'center'}
          isShowShadow={true}
          borderWidth={0}
          backgroundColor={Color.LIGHT}
          activeOpacity={0.2}
          marginBottom={10}
          onPress={handleClosePayWayBottomSheet}>
          <Image style={styles.khqrIcon} source={images.KHQRICon()} />
          <View style={styles.culumnWrapper}>
            <AppText style={styles.buttonLabel}>ABA PAY</AppText>
            <AppText
              style={styles.subButtonLabel}
              numberOfLines={1}
              ellipsizeMode="tail">
              Scan to pay wiith any banking app
            </AppText>
          </View>
          <View style={styles.rightIconWrapper}>
            <Icon style={styles.rightIcon} name="angle-right" />
          </View>
        </PaywayOptionContainer>
        <PaywayOptionContainer
          flexDirection={'row'}
          alignItems={'center'}
          isShowShadow={true}
          borderWidth={0}
          backgroundColor={Color.LIGHT}
          marginBottom={40}
          activeOpacity={0.2}
          onPress={handleClosePayWayBottomSheet}>
          <Image style={styles.khqrIcon} source={images.MainCreditIcon()} />
          <View style={styles.culumnWrapper}>
            <AppText style={styles.buttonLabel}>Credit/Debit Card</AppText>
            <Image style={styles.creditIcon} source={images.CreditIcon()} />
          </View>
          <View style={styles.rightIconWrapper}>
            <Icon style={styles.rightIcon} name="angle-right" />
          </View>
        </PaywayOptionContainer>
      </AppBottomSheet>
      {/* display this bottom sheet after pay success */}
      <AppBottomSheet
        visible={isSuccessBottomSheetVisible}
        closeModal={() => setSuccessBottomSheetVisible(false)}>
        <Image style={styles.paySuccesImage} source={images.PaySuccess()} />
        <AppText style={styles.successLabel}>Success</AppText>
        <AppText style={styles.confirmOrderText}>
          Order confirmation details send to your email:
        </AppText>
        <AppText style={[styles.confirmOrderText, {fontWeight: 'bold'}]}>
          yourname@email.com
        </AppText>
        <AppLongButton
          onPress={handleCloseSuccessBottomSheet}
          title={'Back to Home'}
          marginTop={60}
          marginBottom={15}
        />
      </AppBottomSheet>
    </Layout>
  );
};

export default SubscribePlan;
