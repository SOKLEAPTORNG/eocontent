import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    backgroundColor: Color.APP_BACKGROUND,
    flex: 1,
  },
  appLogo: {
    height: 70,
    width: 220,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 14,
  },
  forgotPassLabel: {
    fontSize: 24,
    color: Color.LIGHT_PRIMARY,
    textAlign: 'center',
    marginVertical: 12,
  },
  emailLabel: {
    fontSize: 16,
    color: Color.LIGHT,
    marginTop: 10
  },
  descriptionText: {
    fontSize: 16,
    color: Color.DARK_SILVER,
  },
});
