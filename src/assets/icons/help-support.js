import React from 'react';
import Svg, {Path, Rect} from 'react-native-svg';

const profile = () => {
  return (
    <Svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Rect x="2" y="2.5" width="20" height="19" rx="6" fill="#232C40" />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.78471 10.2516C6.4642 9.98923 6.42581 9.52411 6.69898 9.21273C6.97214 8.90136 7.45341 8.86164 7.77392 9.12403L11.9991 12.5829L16.2243 9.12403C16.5448 8.86164 17.0261 8.90136 17.2993 9.21273C17.5724 9.52411 17.534 9.98923 17.2135 10.2516L13.0958 13.6226C12.7791 13.8819 12.3838 13.9936 11.9991 13.9653C11.6144 13.9936 11.2192 13.8819 10.9025 13.6226L6.78471 10.2516Z"
        fill="white"
      />
    </Svg>
  );
};

export default profile;
