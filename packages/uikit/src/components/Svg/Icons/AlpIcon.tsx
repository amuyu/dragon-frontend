import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

export const AlpIcon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width={15} height={16} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g clip-path="url(#clip0_5853_692)">
        <mask id="mask0_5853_692" maskUnits="userSpaceOnUse" x="0" y="1" width="15" height="15">
          <path d="M14.3237 1.57031H0.32373V15.5703H14.3237V1.57031Z" fill="white" />
        </mask>
        <g mask="url(#mask0_5853_692)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5737 4.97582V3.35864C12.5739 3.34185 12.5788 3.3254 12.588 3.31101C12.5972 3.29661 12.6103 3.28478 12.626 3.27675L14.1734 2.45793C14.1886 2.44965 14.2059 2.4453 14.2236 2.44531C14.2412 2.44533 14.2585 2.44971 14.2738 2.45801C14.289 2.46632 14.3017 2.47825 14.3104 2.49261C14.3192 2.50697 14.3238 2.52326 14.3237 2.53981V4.15699C14.3236 4.17354 14.3189 4.18976 14.3101 4.20411C14.3013 4.21845 14.2887 4.23042 14.2736 4.23887L12.7241 5.0577C12.7088 5.06598 12.6915 5.07033 12.6739 5.07031C12.6563 5.0703 12.6389 5.06592 12.6237 5.05762C12.6084 5.04931 12.5958 5.03738 12.587 5.02302C12.5782 5.00865 12.5737 4.99237 12.5737 4.97582ZM12.1851 5.34331C11.2683 7.47471 9.76868 9.29656 7.86283 10.5943C5.95698 11.892 3.72439 12.6115 1.42796 12.668C0.9527 11.9533 0.621208 11.1508 0.45242 10.3063C0.283633 9.46191 0.280853 8.59211 0.444238 7.74661C0.607624 6.90111 0.933975 6.09647 1.40466 5.3786C1.87535 4.66072 2.48115 4.0437 3.18748 3.56275C3.8938 3.0818 4.68682 2.74635 5.52128 2.57554C6.35568 2.40474 7.21518 2.40192 8.05073 2.56726C8.88623 2.7326 9.68138 3.06286 10.3908 3.53917C11.1001 4.01549 11.7099 4.62853 12.1851 5.34331ZM12.05 12.7744C12.8375 11.6603 13.2609 10.3248 13.2609 8.95501C13.2613 7.94551 13.0301 6.94971 12.5856 6.04598C10.5605 8.69411 9.27688 11.845 8.86943 15.168C10.1504 14.7254 11.2625 13.8885 12.05 12.7744Z"
            fill="url(#paint0_linear_5853_692)"
          />
        </g>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_5853_692"
          x1="-5.33247"
          y1="6.29551"
          x2="13.9326"
          y2="16.2001"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#C040FC" />
          <stop offset="1" stop-color="#4B3CFF" />
        </linearGradient>
        <clipPath id="clip0_5853_692">
          <rect width="14.1519" height="15.1406" fill="white" transform="translate(0.171875 0.429688)" />
        </clipPath>
      </defs>
    </Svg>
  );
};
