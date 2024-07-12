import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Color} from '../../Constant';
import Icon from 'react-native-vector-icons/Octicons';

const AppSearch = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.searchWrapper} onPress={onPress}>
      <Icon style={styles.searchIcon} name="search" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    position: 'absolute',
    right: 0,
  },
  searchIcon: {
    fontSize: 24,
    color: Color.LIGHT_DARK,
  },
});

export default AppSearch;
