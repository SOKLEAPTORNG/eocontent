import {View, TouchableOpacity, Image, ScrollView} from 'react-native';
import React from 'react';
import AppText from '../../Component/Share/AppText';
import {Layout} from '../../Component';
import {styles} from './styles';
import AppCard from '../../Component/Share/AppCard';
import {Color} from '../../Constant';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import images from '../../Common/images';

const HistoryScreen = () => {
  return (
    <Layout>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{flexGrow: 1}}>
        <AppText style={styles.cardLabel}>
          Rewrite Content - 2023-07-21 08;27:25
        </AppText>
        <AppCard
          borderColor={Color.LIGHT}
          backgroundColor={Color.LIGHT}
          borderRadius={20}>
          <AppText style={styles.cardDescription}>
            Horem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
            vulputate libero et velit interd um, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostr a, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </AppText>
          <View style={styles.cardIconWrapper}>
            <TouchableOpacity>
              <Icon
                style={[styles.heartIcon, {color: Color.DANGER}]}
                name="cards-heart"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.copyIcon} source={images.CopyIcon()} />
            </TouchableOpacity>
          </View>
        </AppCard>
        <AppText style={styles.cardLabel}>
          Rewrite Content - 2023-07-21 08;27:25
        </AppText>
        <AppCard
          borderColor={Color.LIGHT}
          backgroundColor={Color.LIGHT}
          borderRadius={20}>
          <AppText style={styles.cardDescription}>
            Horem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
            vulputate libero et velit interd um, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostr a, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </AppText>
          <View style={styles.cardIconWrapper}>
            <TouchableOpacity>
              <Icon style={styles.heartIcon} name="cards-heart" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.copyIcon} source={images.CopyIcon()} />
            </TouchableOpacity>
          </View>
        </AppCard>
        <AppText style={styles.cardLabel}>
          Rewrite Content - 2023-07-21 08;27:25
        </AppText>
        <AppCard
          borderColor={Color.LIGHT}
          backgroundColor={Color.LIGHT}
          borderRadius={20}>
          <AppText style={styles.cardDescription}>
            Horem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
            vulputate libero et velit interd um, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostr a, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </AppText>
          <View style={styles.cardIconWrapper}>
            <TouchableOpacity>
              <Icon style={styles.heartIcon} name="cards-heart" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.copyIcon} source={images.CopyIcon()} />
            </TouchableOpacity>
          </View>
        </AppCard>
        <AppText style={styles.cardLabel}>
          Rewrite Content - 2023-07-21 08;27:25
        </AppText>
        <AppCard
          borderColor={Color.LIGHT}
          backgroundColor={Color.LIGHT}
          borderRadius={20}
          marginBottom={15}>
          <AppText style={styles.cardDescription}>
            Horem ipsum dolor sit amet, consectetur adip iscing elit. Nunc
            vulputate libero et velit interd um, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostr a, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </AppText>
          <View style={styles.cardIconWrapper}>
            <TouchableOpacity>
              <Icon style={styles.heartIcon} name="cards-heart" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.copyIcon} source={images.CopyIcon()} />
            </TouchableOpacity>
          </View>
        </AppCard>
      </ScrollView>
    </Layout>
  );
};

export default HistoryScreen;