import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  cardProfile: {
    width: 55,
    height: 55,
    borderRadius: 1000,
    resizeMode: 'stretch',
  },
  cardLabel: {
    fontSize: 20,
    color: Color.LIGHT,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  cardDescription: {
    fontSize: 13,
    color: Color.DARK_SILVER,
  },
});
