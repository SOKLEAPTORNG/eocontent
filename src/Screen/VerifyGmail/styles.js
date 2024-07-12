import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  appLogo: {
    height: 70,
    width: 220,
    resizeMode: 'stretch',
    marginTop: 14,
  },
  verifyAccountImage: {
    width: 98,
    height: 98,
    resizeMode: 'stretch',
    marginTop: 60,
  },
  verifyAccountLabel: {
    fontSize: 24,
    color: Color.LIGHT_PRIMARY,
    marginVertical: 12,
    textAlign: 'center',
  },
  verifyDescription: {
    fontSize: 16,
    color: Color.DARK_SILVER,
    textAlign: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
    marginTop: 22,
  },
  noEmailRecieve: {
    fontSize: 16,
    color: Color.LIGHT,
  },
  resendLabel: {
    fontSize: 16,
    color: Color.ORANGE,
  },
});
