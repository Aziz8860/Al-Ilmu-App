import React from 'react';
import Svg, {Path} from 'react-native-svg';

const logout = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M15 7.5V7C15 4.79086 13.2091 3 11 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21H11C13.2091 21 15 19.2091 15 17V16.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M18.5 9.5L20.8586 11.8586C20.9367 11.9367 20.9367 12.0633 20.8586 12.1414L18.5 14.5"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
      <Path
        d="M9.5 12L20 12"
        stroke="white"
        stroke-width="1.5"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default logout;
