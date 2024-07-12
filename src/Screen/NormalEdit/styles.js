import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  inputLabel: {
    marginTop: 10,
    fontSize: 16,
    color: Color.LIGHT,
    marginBottom: 7,
    zIndex: -1,
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
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginVertical: 25,
    zIndex: -1,
  },
  dropdownContent: {
    width: '100%',
    height: 'auto',
    position: 'relative',
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
  fillOutContainer: {
    height: 250,
    width: '100%',
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Color.LIGHT_PRIMARY,
    borderStyle: 'dashed',
    marginBottom: 15,
    zIndex: -1,
  },
  fillOutImage: {
    width: 75,
    height: 75,
    resizeMode: 'stretch',
  },
  fillOutText: {
    fontSize: 14,
    color: Color.LIGHT,
    marginTop: 20,
  },
});
