import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  appLogo: {
    height: 70,
    width: 220,
    resizeMode: 'stretch',
    alignSelf: 'center',
    marginTop: 14,
  },
  codeVerifyLabel: {
    fontSize: 24,
    color: Color.LIGHT_PRIMARY,
    textAlign: 'center',
    marginVertical: 12
  },
  codeSendLabel: {
    fontSize: 14,
    color: Color.DARK_SILVER,
    textAlign: 'center',
  },
  codeFieldContent: {
    marginVertical: 22,
  },
  cell: {
    width: 50,
    height: 50,
    borderRadius: 4,
    paddingTop: 8,
    textAlign: 'center',
    fontSize: 24,
    color: Color.DARK,
    backgroundColor: Color.LIGHT,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'center',
  },
  countDownTime: {
    fontSize: 15,
    color: Color.LIGHT,
  },
  resendCode: {
    fontSize: 13,
    color: Color.DARK_SILVER,
  },
  clickHereLabel: {
    fontSize: 13,
    color: Color.LIGHT_PRIMARY,
    textDecorationLine: 'underline',
  },
});
