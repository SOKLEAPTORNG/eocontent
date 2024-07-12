import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  billingVisaIcon: {
    alignSelf: 'center',
    marginTop: 10,
    height: 140,
    width: 135,
    resizeMode: 'stretch',
  },
  mainLabel: {
    fontSize: 20,
    color: Color.LIGHT_PRIMARY,
    marginBottom: 10,
  },
  dataText: {
    fontSize: 16,
    color: Color.DARK,
  },
  invoiceIcon: {
    width: 24,
    height: 26,
    resizeMode: 'stretch',
    marginRight: 10,
  },
  optionContainer: {
    height: 90,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: Color.LIGHT_PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
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
});
