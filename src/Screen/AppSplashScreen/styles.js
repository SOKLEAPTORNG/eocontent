import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  appLogo: {
    width: 190,
    height: 60,
    resizeMode: 'stretch',
  },
  botImage: {
    width: 190,
    height: 260,
    resizeMode: 'stretch',
  },
  appLabelVersion: {
    fontSize: 16,
    color: Color.DARK_SILVER,
    textAlign: 'center',
    position: 'absolute',
    bottom: 40,
  },
});
