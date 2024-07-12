import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  cardLabel: {
    fontSize: 14,
    color: Color.LIGHT,
    marginTop: 10,
    marginBottom: 7,
  },
  cardDescription: {
    fontSize: 16,
    color: Color.DARK,
  },
  cardIconWrapper: {
    justifyContent: 'flex-end',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heartIcon: {
    fontSize: 22,
    color: Color.DARK_SILVER,
    marginRight: 10,
  },
  copyIcon: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
});
