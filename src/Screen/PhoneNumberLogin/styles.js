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
    marginTop: 14,
    alignSelf: 'center',
  },
  regiterLabel: {
    fontSize: 24,
    color: Color.LIGHT_PRIMARY,
    marginVertical: 12,
    textAlign: 'center',
  },
  signUpText: {
    fontSize: 16,
    color: Color.LIGHT,
    textAlign: 'center',
  },
  phoneNumLabel: {
    fontSize: 16,
    color: Color.LIGHT,
    marginTop: 22,
  },
  phoneInputContainer: {
    width: '100%',
    height: 50,
    position: 'relative',
    backgroundColor: Color.APP_BACKGROUND,
    borderWidth: 0.5,
    borderColor: Color.LIGHT_PRIMARY,
    flexDirection: 'row',
    borderRadius: 10,
    marginTop: 8,
  },
  flagSideContainer: {
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
  },
  khFlag: {
    width: 40,
    height: 24,
    resizeMode: 'stretch',
  },
  codeLabel: {
    marginLeft: 5,
    color: Color.DARK_GRAY,
    fontSize: 13,
  },
  input: {
    flex: 1,
    fontSize: 13,
    color: Color.LIGHT,
    paddingHorizontal: 10,
  },
});
