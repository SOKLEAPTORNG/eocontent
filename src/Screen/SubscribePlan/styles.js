import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  featureLogo: {
    height: 220,
    width: 220,
    resizeMode: 'stretch',
    alignSelf: 'center',
  },
  mainLabel: {
    fontSize: 32,
    color: Color.LIGHT,
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 12,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 7,
  },
  checkIconWrapper: {
    width: 18,
    height: 18,
    borderRadius: 1000,
    backgroundColor: Color.LIGHT_PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    fontSize: 12,
    color: Color.LIGHT,
  },
  checkLabel: {
    fontSize: 16,
    color: Color.LIGHT,
    marginLeft: 7,
  },
  optionContainer: {
    height: 90,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.LIGHT_PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  activeContentSide: {
    width: 24,
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 15,
  },
  activeOptionIcon: {
    width: 22,
    height: 22,
    resizeMode: 'stretch',
  },
  optionInfo: {
    flexDirection: 'column',
  },
  durationLabel: {
    fontSize: 20,
    color: Color.LIGHT,
    fontWeight: 'bold',
  },
  durationType: {
    fontSize: 14,
    color: Color.DARK_SILVER,
  },
  optionPriceContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 25,
  },
  dollar: {
    marginTop: -10,
    fontSize: 14,
    color: Color.DARK_SILVER,
  },
  priceLabel: {
    fontSize: 24,
    color: Color.LIGHT_PRIMARY,
    fontWeight: 'bold',
  },
  perDuriation: {
    marginTop: 10,
    fontSize: 14,
    color: Color.DARK_SILVER,
  },
  traingleStarImage: {
    position: 'absolute',
    right: -1,
    top: -1,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  inactiveOption: {
    width: 20,
    height: 20,
    borderRadius: 1000,
    borderWidth: 2,
    borderColor: Color.DARK_SILVER,
  },
  termText: {
    fontSize: 14,
    color: Color.LIGHT,
    textAlign: 'center',
    marginBottom: 15,
  },
  payWayLabel: {
    fontSize: 25,
    color: Color.DARK,
    marginTop: 10,
    marginBottom: 15,
  },
  khqrIcon: {
    height: 41,
    width: 45,
    resizeMode: 'stretch',
  },
  culumnWrapper: {
    flexDirection: 'column',
    marginLeft: 15,
  },
  buttonLabel: {
    fontSize: 18,
    color: Color.DARK,
    fontWeight: 'bold',
  },
  subButtonLabel: {
    fontSize: 15,
    color: Color.DARK_GRAY,
    marginTop: -5,
    width: 200,
  },
  rightIconWrapper: {
    height: 27,
    width: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: Color.LIGHT_GRAY,
    position: 'absolute',
    right: 15,
  },
  rightIcon: {
    fontSize: 18,
    color: Color.HARD_DARK_GRAY,
  },
  creditIcon: {
    resizeMode: 'stretch',
    height: 16,
    width: 100,
  },
  paySuccesImage: {
    height: 210,
    width: 170,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 20,
  },
  successLabel: {
    fontSize: 30,
    color: Color.DARK,
    textAlign: 'center',
    marginVertical: 10,
  },
  confirmOrderText: {
    fontSize: 14,
    color: Color.DARK_SILVER,
    textAlign: 'center',
  },
});
