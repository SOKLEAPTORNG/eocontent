import React from 'react';
import {Image} from 'react-native';
import {Layout} from '../../Component';
import images from '../../Common/images';
import {styles} from './styles';
import AppText from '../../Component/Share/AppText';

export default function AppSplashScreen() {
  return (
    <Layout justifyContent={'center'} alignItems={'center'}>
      <Image style={styles.appLogo} source={images.AppLogo()} />
      <Image style={styles.botImage} source={images.Bot()} />
      <AppText style={styles.appLabelVersion}>
        eOcontent{'\n'}
        version 1.0
      </AppText>
    </Layout>
  );
}
