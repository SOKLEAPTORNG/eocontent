import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Color.APP_BACKGROUND,
  },
  inputLabel: {
    marginTop: 20,
    fontSize: 16,
    color: Color.LIGHT,
    marginBottom: 7,
  },
  dropdownContent: {
    width: '100%',
    height: 'auto',
    position: 'relative',
  },
  contentType: {
    fontSize: 16,
    color: Color.LIGHT,
  },
  arrowContent: {
    flexDirection: 'column',
  },
  arrowIcon: {
    fontSize: 15,
    color: Color.DARK_SILVER,
  },
  contentDropdown: {
    height: 'auto',
    width: 270,
    backgroundColor: Color.LIGHT,
    borderRadius: 10,
    zIndex: 999,
    top: 50,
    position: 'absolute',
    borderRadius: 10,
  },
  checkContentContainer: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: Color.DARK_SILVER,
  },
  checkWrapper: {
    height: '100%',
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkIcon: {
    fontSize: 20,
    color: Color.DARK,
  },
  checkContentLabel: {
    fontSize: 16,
    color: Color.DARK,
  },
});
