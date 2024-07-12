import {View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import images from '../../Common/images';
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import GradientButton from '../../Component/Share/AppGradientCard';

const Billing = () => {
  const [selectedOption, setSelectedOption] = useState('yearly');

  const handleOptionSelect = option => {
    setSelectedOption(option);
  };

  return (
    <Layout>
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        showsVerticalScrollIndicator={false}>
        <Image
          style={styles.billingVisaIcon}
          source={images.BillingVisaIcon()}
        />
        <AppText style={[styles.mainLabel, {marginTop: 20}]}>
          Current Plan
        </AppText>
        <AppCard
          backgroundColor={Color.LIGHT}
          borderColor={Color.LIGHT}
          height={50}
          marginBottom={10}>
          <AppText style={[styles.dataText, {fontWeight: 'bold'}]}>
            Current Plan : <AppText style={{fontWeight: 'normal'}}>No</AppText>
          </AppText>
        </AppCard>
        <AppCard
          backgroundColor={Color.LIGHT}
          borderColor={Color.LIGHT}
          height={50}
          marginBottom={10}>
          <AppText style={[styles.dataText, {fontWeight: 'bold'}]}>
            Plan Limit :{' '}
            <AppText style={{fontWeight: 'normal'}}>0 Word</AppText>
          </AppText>
        </AppCard>
        <AppText style={[styles.mainLabel, {marginTop: 10}]}>
          Manage Billing
        </AppText>
        <AppCard
          activeOpacity={0.2}
          backgroundColor={Color.LIGHT}
          borderColor={Color.LIGHT}
          height={50}
          flexDirection={'row'}
          alignItems={'center'}>
          <Image style={styles.invoiceIcon} source={images.InvoiceIcon()} />
          <AppText style={styles.dataText}>View Invoice</AppText>
        </AppCard>
        <AppText style={[styles.mainLabel, {marginTop: 10}]}>
          Upgrade Plan
        </AppText>
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
          marginBottom={15}
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
      </ScrollView>
    </Layout>
  );
};

export default Billing;
