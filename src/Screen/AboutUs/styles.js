import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  appLogo: {
    height: 70,
    width: 220,
    resizeMode: 'stretch',
    marginTop: 14,
    marginBottom: 30,
  },
  lightLabel: {
    fontSize: 16,
    color: Color.LIGHT,
  },
  robotIcon: {
    height: 160,
    width: 190,
    resizeMode: 'stretch',
    marginVertical: 30,
  },
  descriptionText: {
    fontSize: 14,
    color: Color.DARK_SILVER,
    textAlign: 'center',
    width: '85%',
  },
  rowContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  defaultIcon: {
    height: 60,
    width: 60,
    resizeMode: 'stretch',
    marginHorizontal: 8,
  },
});
