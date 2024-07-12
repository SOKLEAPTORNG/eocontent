import React from 'react';
import {ScrollView, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './styles';
import {Color} from '../../Constant';
import {Layout} from '../../Component';
import AppText from '../../Component/Share/AppText';
import AppCustomHeader from '../../Component/Share/AppCustomHeader';
import images from '../../Common/images';
import {Back} from '../../Component';
import AppInput from '../../Component/Share/AppInput';
import AppGradientLongButton from '../../Component/Share/AppGradientLongButton';
import AppGradientCard from '../../Component/Share/AppGradientCard';

export default function SearchScreen() {
  const navigation = useNavigation();

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

  return (
    <Layout>
      <AppCustomHeader
        flexDirection={'row'}
        alignItems={'center'}
        paddingHorizontal={0}>
        <Back />
        <AppInput
          width={'0%'}
          flex={1}
          marginLeft={10}
          placeholder={'Search content name'}
          placeholderTextColor={Color.DARK_SILVER}
        />
      </AppCustomHeader>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingTop: 15,
        }}
        showsVerticalScrollIndicator={false}>
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
