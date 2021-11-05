import React from 'react';
import Svg, {Path, Rect, Circle, Mask, Line} from 'react-native-svg';

const asesmen = () => {
  return (
    <Svg
      width="25"
      height="25"
      viewBox="0 0 128 128"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M10 11H118C121.866 11 125 14.134 125 18V82C125 85.866 121.866 89 118 89H46H16H10C6.13401 89 3 85.866 3 82V18C3 14.134 6.13401 11 10 11Z"
        stroke="#D2D2D2"
        stroke-width="6"
      />
      <Circle cx="29" cy="39" r="10" stroke="#D2D2D2" stroke-width="6" />
      <Line
        x1="67"
        y1="26"
        x2="67"
        y2="60"
        stroke="#D2D2D2"
        stroke-width="6"
        stroke-linecap="round"
      />
      <Mask id="path-4-inside-1_0:17" fill="white">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M21 56C16.5817 56 13 59.5817 13 64V120C13 124.418 16.5817 128 21 128H42C46.4183 128 50 124.418 50 120V74H63C67.9706 74 72 69.9706 72 65C72 60.0294 67.9706 56 63 56H50H39H21Z"
        />
      </Mask>
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M21 56C16.5817 56 13 59.5817 13 64V120C13 124.418 16.5817 128 21 128H42C46.4183 128 50 124.418 50 120V74H63C67.9706 74 72 69.9706 72 65C72 60.0294 67.9706 56 63 56H50H39H21Z"
        fill="white"
      />
      <Path
        d="M50 74V68H44V74H50ZM19 64C19 62.8954 19.8954 62 21 62V50C13.268 50 7 56.268 7 64H19ZM19 120V64H7V120H19ZM21 122C19.8954 122 19 121.105 19 120H7C7 127.732 13.268 134 21 134V122ZM42 122H21V134H42V122ZM44 120C44 121.105 43.1046 122 42 122V134C49.732 134 56 127.732 56 120H44ZM44 74V120H56V74H44ZM63 68H50V80H63V68ZM66 65C66 66.6569 64.6569 68 63 68V80C71.2843 80 78 73.2843 78 65H66ZM63 62C64.6569 62 66 63.3431 66 65H78C78 56.7157 71.2843 50 63 50V62ZM50 62H63V50H50V62ZM39 62H50V50H39V62ZM21 62H39V50H21V62Z"
        fill="#D2D2D2"
        mask="url(#path-4-inside-1_0:17)"
      />
      <Line
        x1="32"
        y1="101"
        x2="32"
        y2="125"
        stroke="#D2D2D2"
        stroke-width="6"
        stroke-linecap="round"
      />
    </Svg>
  );
};

export default asesmen;
