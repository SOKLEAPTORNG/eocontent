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
  defaultText: {
    fontSize: 16,
    color: Color.LIGHT,
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
    marginVertical: 8,
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
    color: Color.LIGHT,
    fontSize: 16,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Color.LIGHT,
    paddingHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  checkBox: {
    width: 15,
    height: 15,
    borderColor: Color.LIGHT,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkIcon: {
    fontSize: 12,
    color: Color.LIGHT_PRIMARY,
  },
  agreeTermPrivacy: {
    fontSize: 14,
    color: Color.LIGHT,
  },
  lightPrimaryText: {
    fontSize: 16,
    color: Color.LIGHT_PRIMARY,
    marginLeft: 5,
  },
});
