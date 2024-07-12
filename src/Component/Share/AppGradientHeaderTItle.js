import React from 'react';
import {View} from 'react-native';
import Svg, {
  LinearGradient,
  Text as SvgText,
  Defs,
  Stop,
} from 'react-native-svg';

const AppGradientHeaderTitle = ({title, width = 80}) => {
  return (
    <View style={[{width}]}>
      <Svg height="60" width={'100%'}>
        <Defs>
          <LinearGradient id="grad" x1="0" y1="0" x2="100%" y2="0">
            <Stop offset="0" stopColor="#22AAD4" />
            <Stop offset="1" stopColor="#3DD2CF" />
          </LinearGradient>
        </Defs>
        <SvgText fill="url(#grad)" fontSize="20" fontWeight="bold" x="0" y="40">
          {title}
        </SvgText>
      </Svg>
    </View>
  );
};

export default AppGradientHeaderTitle;
