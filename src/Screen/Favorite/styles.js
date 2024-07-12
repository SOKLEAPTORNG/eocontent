import {StyleSheet} from 'react-native';
import {Color} from '../../Constant';

export const styles = StyleSheet.create({
  searchWrapper: {
    height: '100%',
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    fontSize: 25,
    color: Color.HARD_DARK_GRAY,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Color.LIGHT,
  },
  filterWrapper: {
    height: '100%',
    width: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderLeftColor: Color.LIGHT_PRIMARY,
    borderLeftWidth: 0.5,
  },
  filterIcon: {
    width: 22,
    height: 22,
    resizeMode: 'stretch',
  },
  headerContent: {
    width: '100%',
    height: 50,
    borderColor: Color.LIGHT_PRIMARY,
    borderWidth: 0.5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: Color.APP_BACKGROUND,
    marginTop: 25,
    marginBottom: 10,
    flexDirection: 'row',
  },
  contentLabel: {
    fontSize: 14,
    color: Color.DARK_SILVER,
  },
  imageContentWrapper: {
    height: '100%',
    width: '60%',
    flexDirection: 'row',
  },
  imageWrapper: {
    width: '40%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  templateWrapper: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: '100%',
  },
  wordCreateWrapper: {
    height: '100%',
    width: '40%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  wordWrapper: {
    height: '100%',
    width: '40%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  dateWrapper: {
    height: '100%',
    width: '60%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  itemIcon: {
    borderRadius: 1000,
    width: 50,
    height: 50,
    resizeMode: 'stretch',
  },
  itemLabel: {
    fontSize: 13,
    color: Color.LIGHT,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  modalView: {
    width: '100%',
    borderRadius: 20,
    backgroundColor: Color.LIGHT,
    padding: 15,
  },
  filterLabel: {
    fontSize: 16,
    color: Color.DARK,
    marginBottom: 7,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  filterItemLabel: {
    fontSize: 14,
    color: Color.DARK_SILVER,
  },
  arrowContent: {
    flexDirection: 'column',
  },
  arrowIcon: {
    fontSize: 15,
    color: Color.DARK_SILVER,
  },
});
