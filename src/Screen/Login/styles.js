import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  appLogo: {
    height: 70,
    width: 220,
    resizeMode: 'stretch',
    marginTop: 50,
    alignSelf: 'center',
  },
  loginLabel: {
    fontSize: 24,
    color: Color.LIGHT_PRIMARY,
    marginVertical: 10,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: Color.LIGHT,
  },
  forgrtPassLabel: {
    fontSize: 14,
    color: Color.DARK_SILVER,
    textAlign: 'right',
  },
  signInButton: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Color.LIGHT,
    flexDirection: 'row',
    marginBottom: 15,
  },
  signInIconDefault: {
    width: 25,
    height: 25,
    resizeMode: 'stretch',
  },
  signInLabelDefault: {
    fontSize: 18,
    color: Color.DARK,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 15,
  },
  noAccountLabel: {
    fontSize: 16,
    color: Color.LIGHT,
  },
  registerLabel: {
    fontSize: 16,
    color: Color.LIGHT_PRIMARY,
    marginLeft: 5,
  },
});
