import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APP_BACKGROUND,
  },
  inputLabel: {
    marginTop: 10,
    fontSize: 16,
    color: Color.LIGHT,
    marginBottom: 7,
  },
  arrowContent: {
    flexDirection: 'column',
    position: 'absolute',
    right: 15,
    height: '100%',
    justifyContent: 'center'
  },
  arrowIcon: {
    fontSize: 15,
    color: Color.DARK_SILVER,
  },
});
