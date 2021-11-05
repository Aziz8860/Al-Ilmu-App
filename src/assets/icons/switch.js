import React from 'react';
import Svg, {Path} from 'react-native-svg';

const switchIcon = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M22 8L18 4V7H3V9H18V12L22 8Z" fill="#1D2330" />
      <Path d="M2 16L6 20V17H21V15H6V12L2 16Z" fill="#1D2330" />
    </Svg>
  );
};

export default switchIcon;
