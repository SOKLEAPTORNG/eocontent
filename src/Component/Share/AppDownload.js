import React from 'react';
import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import images from '../../Common/images';

const AppDownload = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.searchWrapper} onPress={onPress}>
      <Image style={styles.downloadIcon} source={images.DownloadIcon()} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    position: 'absolute',
    right: 0,
  },
  downloadIcon: {
    width: 24,
    height: 24,
    resizeMode: 'stretch',
  },
});

export default AppDownload;
