import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APP_BACKGROUND,
  },
  inputLabel: {
    fontSize: 16,
    color: Color.LIGHT,
    marginTop: 10,
    marginBottom: 8,
  },
  cantChangeNumText: {
    fontSize: 14,
    color: Color.DARK_SILVER,
    marginLeft: 10,
    marginBottom: 8,
  },
  fixPhoneContainer: {
    height: 50,
    backgroundColor: Color.APP_BACKGROUND,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: Color.LIGHT_PRIMARY,
    borderWidth: 0.5,
    justifyContent: 'center',
  },
  fixPhoneNumber: {
    fontSize: 16,
    color: Color.DARK_SILVER,
  },
});
