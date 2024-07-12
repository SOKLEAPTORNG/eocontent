import React, {useEffect} from 'react';
import {View, TouchableOpacity, ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {Color} from '../../Constant';
import {Layout} from '../../Component';
import AppText from '../../Component/Share/AppText';
import AppCustomHeader from '../../Component/Share/AppCustomHeader';
import Icon from 'react-native-vector-icons/Octicons';
import images from '../../Common/images';
import Svg, {
  LinearGradient,
  Text as SvgText,
  Defs,
  Stop,
} from 'react-native-svg';
import ButtonLinearGradient from 'react-native-linear-gradient';
import AppGradientHeaderTitle from '../../Component/Share/AppGradientHeaderTItle';
import AppGradientLongButton from '../../Component/Share/AppGradientLongButton';
import AppGradientCard from '../../Component/Share/AppGradientCard';

export default function Home() {
  const navigation = useNavigation();

  const headerItems = [
    {
      label: 'All',
      // onPress: () => navigation.navigate('All')
    },
    {
      label: 'Ecommerce',
      // onPress: () => navigation.navigate('Ecommerce')
    },
    {
      label: 'ADS',
      // onPress: () => navigation.navigate('ADS')
    },
    {
      label: 'Website',
      //  onPress: () => navigation.navigate('Website')
    },
    {
      label: 'Writing',
      //  onPress: () => navigation.navigate('Writing')
    },
    {
      label: 'Email',
      // onPress: () => navigation.navigate('Email')
    },
    {
      label: 'Social',
      // onPress: () => navigation.navigate('Social')
    },
    {
      label: 'Other',
      // onPress: () => navigation.navigate('Other')
    },
  ];

  const cardData = [
    {
      label: 'Rewrite Content',
      description:
        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      imageSource: images.ItemProfile1(),
    },
    {
      label: 'Hotel, Room and Product Benefits',
      description:
        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      imageSource: images.ItemProfile2(),
    },
    {
      label: 'Hotel and Production Description',
      description:
        'Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.',
      imageSource: images.ItemProfile3(),
    },
  ];

  // following prototype
  // useEffect(() => navigation.navigate('LoginScreen'));

  return (
    <Layout paddingHorizontal={0}>
      <AppCustomHeader
        flexDirection={'row'}
        alignItems={'center'}
        justifyContent={'center'}>
        <ButtonLinearGradient
          colors={['#50C3FA', '#CD5EF6', '#EA682A']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          style={styles.premiumContainer}>
          <TouchableOpacity
            style={styles.innerPremiumContainer}
            onPress={() => navigation.navigate('SubscribePlan')}>
            <AppText style={styles.primiumLabel}>Premium</AppText>
          </TouchableOpacity>
        </ButtonLinearGradient>
        <AppGradientHeaderTitle width={86} title={'eOconent'} />
        <TouchableOpacity
          style={styles.searchWrapper}
          onPress={() => navigation.navigate('SearchScreen')}>
          <Icon style={styles.searchIcon} name="search" />
        </TouchableOpacity>
      </AppCustomHeader>
      <View style={styles.horizontalContent}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1}}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {headerItems.map(({label, onPress}, index) => (
            <ButtonLinearGradient
              key={index}
              colors={['#50C3FA', '#CD5EF6', '#EA682A']}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              style={styles.headerItem}>
              <TouchableOpacity
                style={styles.innerHeaderContainer}
                onPress={onPress}>
                <AppText style={styles.headerItemLabel}>{label}</AppText>
              </TouchableOpacity>
            </ButtonLinearGradient>
          ))}
        </ScrollView>
      </View>
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingHorizontal: 15}}
        showsVerticalScrollIndicator={false}>
        <View style={styles.ecommerceLabelWrapper}>
          <Svg height="60" width="300">
            <Defs>
              <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
                <Stop offset="0" stopColor="#50C3FA" />
                <Stop offset="0.5" stopColor="#CD5EF6" />
                <Stop offset="1" stopColor="#EA682A" />
              </LinearGradient>
            </Defs>
            <SvgText
              fill="url(#grad)"
              fontSize="24"
              fontWeight="bold"
              x="0"
              y="40">
              Ecommerce
            </SvgText>
          </Svg>
        </View>

        {cardData.map((data, index) => (
          <AppGradientCard
            key={index}
            padding={20}
            marginBottom={index === cardData.length - 1 ? 15 : 12}>
            <Image style={styles.cardProfile} source={data.imageSource} />
            <AppText style={styles.cardLabel}>{data.label}</AppText>
            <AppText style={styles.cardDescription}>{data.description}</AppText>
            <AppGradientLongButton
              marginTop={13}
              borderRadius={12}
              height={40}
              title={'SELECT'}
              color={Color.APP_BACKGROUND}
              fontWeight={'bold'}
              onPress={() => navigation.navigate('NormalFeature')}
            />
          </AppGradientCard>
        ))}
      </ScrollView>
    </Layout>
  );
}
