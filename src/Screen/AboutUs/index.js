import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import images from '../../Common/images';

const AboutUs = () => {
  return (
    <Layout alignItems={'center'}>
      <Image style={styles.appLogo} source={images.AppLogo()} />
      <AppText style={styles.lightLabel}>About Us</AppText>
      <Image style={styles.robotIcon} source={images.ByeRobotIcon()} />
      <AppText style={styles.descriptionText}>
        Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis. Class aptent taciti
        sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
      </AppText>
      <AppText style={[styles.lightLabel, {marginVertical: 30}]}>
        Follow Us
      </AppText>
      <View style={styles.rowContainer}>
        <TouchableOpacity>
          <Image style={styles.defaultIcon} source={images.FBIcon()} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.defaultIcon} source={images.TelegramIcon()} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.defaultIcon} source={images.InstagramIcon()} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.defaultIcon} source={images.DribbbleIcon()} />
        </TouchableOpacity>
      </View>
    </Layout>
  );
};

export default AboutUs;
