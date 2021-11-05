import React from 'react';
import Svg, {Path} from 'react-native-svg';

const home = () => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M4.293 10.707L11.293 3.70697C11.6835 3.31659 12.3165 3.31659 12.707 3.70697L19.707 10.707C19.8945 10.8945 20 11.1488 20 11.414V21C20 21.5523 19.5523 22 19 22H14V15H10V22H5C4.44772 22 4 21.5523 4 21V11.414C4 11.1488 4.10545 10.8945 4.293 10.707Z"
        fill="#D2D2D2"
      />
    </Svg>
  );
};

export default home;
