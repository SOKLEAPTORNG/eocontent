import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APPBACKGROUND,
    alignItems: 'center',
  },
  appLogo: {
    width: 157,
    height: 50,
    marginTop: 10,
    marginBottom: 10,
  },
  premiumIcon: {
    width: 80,
    height: 60,
    resizeMode: 'stretch',
  },
  culumnContent: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  proLabel: {
    fontSize: 20,
    color: Color.LIGHT,
    marginBottom: 5,
  },
  proText: {
    fontSize: 12,
    color: Color.DARK_SILVER,
    width: 150,
  },
  premiumRightArrow: {
    fontSize: 20,
    color: Color.DARK_SILVER,
    position: 'absolute',
    right: 15,
  },
  defaultIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  defaultLabel: {
    fontSize: 20,
    color: Color.LIGHT,
    textTransform: 'capitalize',
  },
  rightArrowIcon: {
    fontSize: 20,
    color: Color.HARD_DARK_GRAY,
    position: 'absolute',
    right: 15,
  },
});
