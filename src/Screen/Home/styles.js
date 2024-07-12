import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingHorizontal: 15,
    backgroundColor: Color.APP_BACKGROUND,
  },
  premiumContainer: {
    width: 66,
    height: 29,
    borderRadius: 5,
    position: 'absolute',
    left: 15,
  },
  innerPremiumContainer: {
    borderRadius: 5,
    flex: 1,
    margin: 0.8,
    backgroundColor: Color.APP_BACKGROUND,
    justifyContent: 'center',
    alignItems: 'center',
  },
  primiumLabel: {
    fontSize: 10,
    color: Color.LIGHT,
  },
  searchWrapper: {
    position: 'absolute',
    right: 15,
  },
  searchIcon: {
    fontSize: 24,
    color: Color.LIGHT_DARK,
  },
  horizontalContent: {
    height: 45,
    marginTop: 10,
  },
  headerItem: {
    height: '100%',
    borderRadius: 12,
    justifyContent: 'center',
    marginLeft: 15,
  },
  innerHeaderContainer: {
    borderRadius: 12,
    paddingHorizontal: 15,
    flex: 1,
    margin: 0.8,
    backgroundColor: Color.APP_BACKGROUND,
    justifyContent: 'center',
  },
  headerItemLabel: {
    fontSize: 16,
    color: Color.LIGHT,
  },
  ecommerceLabelWrapper: {
    marginVertical: 5,
  },
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
