import { Svg, SvgProps } from '@pancakeswap/uikit'

const Icon = ({ ...props }: SvgProps) => {
  return (
    <Svg width="24" height="24" viewBox="0 0 84 78" fill="none" {...props}>
      <g clipPath="url(#clip0_18_550)">
        <path
          d="M62.2792 39.2422L57.2156 49.2888C54.6738 54.3322 49.5099 57.517 43.8737 57.517H10.1773C4.57122 57.4969 0 62.0883 0 67.6742C0 73.2601 4.57122 77.8514 10.1773 77.8514H78.9264C82.9953 77.8514 85.4065 73.3003 83.1159 69.9347L62.2892 39.2422H62.2792Z"
          fill="#99B3FF"
        />
        <path
          d="M73.8127 0H15.3513C6.87191 0 0 6.87191 0 15.3513V67.6742C0 62.0883 4.57122 57.497 10.1773 57.497H43.8837C49.5199 57.497 54.6839 54.3122 57.2257 49.2687L78.3337 7.33405C80.0316 3.96843 77.5902 0 73.8127 0Z"
          fill="#3366FF"
        />
        <path
          d="M45.5115 31.6168C48.9273 31.6168 51.7002 29.4567 51.7002 26.7843C51.7002 24.1119 48.9273 21.9519 45.5115 21.9519C42.0956 21.9519 39.3228 24.1119 39.3228 26.7843C39.3228 29.4567 42.0956 31.6168 45.5115 31.6168Z"
          fill="#DAFF86"
        />
      </g>
      <defs>
        <clipPath id="clip0_18_550">
          <rect width="84" height="77.8514" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  )
}

export default Icon
