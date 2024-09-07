const PersonIcon = ({ width = '24', height = '24', stroke = '#9ca3af' }) => (
  <svg
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke={stroke}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
    />
  </svg>
)

const ThermometerIcon = ({ width = '16', height = '20' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 28 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <linearGradient
      id="paint0_linear_2_8"
      x1="-0.270024"
      y1="5.16"
      x2="15.18"
      y2="31.93"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#515A69" stopOpacity="0.05" />
      <stop offset="0.45" stopColor="#6B7280" stopOpacity="0.05" />
      <stop offset="1" stopColor="#384354" stopOpacity="0.1" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_2_8"
      x1="-0.520023"
      y1="4.73"
      x2="15.43"
      y2="32.36"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#D4D7DD" />
      <stop offset="0.45" stopColor="#D4D7DD" />
      <stop offset="1" stopColor="#BEC1C6" />
    </linearGradient>
    <path
      d="M15 27.9C15 29.7565 14.2625 31.537 12.9497 32.8497C11.637 34.1625 9.85649 34.9 7.99998 34.9C6.14346 34.9 4.36298 34.1625 3.05023 32.8497C1.73747 31.537 0.999976 29.7565 0.999976 27.9C0.996277 26.759 1.26687 25.6337 1.78897 24.6191C2.31106 23.6045 3.06936 22.7303 3.99998 22.07V5.07C3.99998 4.00913 4.4214 2.99172 5.17155 2.24157C5.9217 1.49143 6.93911 1.07 7.99998 1.07C9.06084 1.07 10.0783 1.49143 10.8284 2.24157C11.5785 2.99172 12 4.00913 12 5.07V22.07C12.9306 22.7303 13.6889 23.6045 14.211 24.6191C14.7331 25.6337 15.0037 26.759 15 27.9ZM8.49998 11H12ZM8.49998 7H12ZM8.49998 15H12Z"
      fill="url(#paint0_linear_2_8)"
    />
    <path
      d="M8.49998 11H12M8.49998 7H12M8.49998 15H12M15 27.9C15 29.7565 14.2625 31.537 12.9497 32.8497C11.637 34.1625 9.85649 34.9 7.99998 34.9C6.14346 34.9 4.36298 34.1625 3.05023 32.8497C1.73747 31.537 0.999976 29.7565 0.999976 27.9C0.996277 26.759 1.26687 25.6337 1.78897 24.6191C2.31106 23.6045 3.06936 22.7303 3.99998 22.07V5.07C3.99998 4.00913 4.4214 2.99172 5.17155 2.24157C5.9217 1.49143 6.93911 1.07 7.99998 1.07C9.06084 1.07 10.0783 1.49143 10.8284 2.24157C11.5785 2.99172 12 4.00913 12 5.07V22.07C12.9306 22.7303 13.6889 23.6045 14.211 24.6191C14.7331 25.6337 15.0037 26.759 15 27.9Z"
      stroke="url(#paint1_linear_2_8)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 32.5C10.4853 32.5 12.5 30.4853 12.5 28C12.5 25.5147 10.4853 23.5 8 23.5C5.51472 23.5 3.5 25.5147 3.5 28C3.5 30.4853 5.51472 32.5 8 32.5Z"
      fill="#EF4444"
    />
    <path
      d="M8 13V28"
      stroke="#EF4444"
      strokeWidth="3"
      strokeMiterlimit="10"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 1; 0 0"
      />
    </path>
    <path
      fill="#374151"
      d="M18 22a2 2 0 11.56-1.47 2 2 0 01-.56 1.47zm-2-.79a.89.89 0 001.26 0 .88.88 0 000-1.25.83.83 0 00-.63-.27.86.86 0 00-.63.27.89.89 0 00-.26.63.85.85 0 00.21.57zM20 19.29a3.68 3.68 0 012.61-.85c1.75 0 2.87.68 3.35 2.06a.37.37 0 01-.26.54l-.67.23a.46.46 0 01-.34 0 .49.49 0 01-.19-.28 1.79 1.79 0 00-1.89-1.13 2.13 2.13 0 00-1.46.45 1.61 1.61 0 00-.52 1.3v2.73a1.62 1.62 0 00.52 1.3 2.08 2.08 0 001.46.46 1.78 1.78 0 001.88-1.1.53.53 0 01.21-.29.5.5 0 01.33 0l.66.24a.38.38 0 01.28.54c-.49 1.38-1.61 2.07-3.37 2.07a3.68 3.68 0 01-2.6-.85 3.09 3.09 0 01-.92-2.37v-2.7a3.07 3.07 0 01.92-2.35z"
    />
  </svg>
)

const SeaWaveIcon = ({ width = '28', height = '20', fill = '#5DDDF9' }) => (
  <svg width={width} height={height} viewBox="0 0 28 20" fill="none">
    <path
      d="M28 20H22C20.0023 19.9931 18.0521 19.39 16.3991 18.268C14.7462 17.1461 13.4657 15.5563 12.7218 13.7022C11.9778 11.8482 11.8041 9.81425 12.223 7.86091C12.642 5.90757 13.6344 4.12373 15.0732 2.7378C13.7667 2.25632 12.3861 2.00664 10.9937 2C9.77614 1.9875 8.57694 2.29728 7.51778 2.89792C6.45861 3.49856 5.57718 4.36868 4.9629 5.42C2.9966 8.4348 2 13.34 2 20H0C0 12.9458 1.106 7.6726 3.2871 4.3274C4.08398 2.99779 5.21409 1.8992 6.56571 1.14024C7.91732 0.381282 9.44362 -0.011751 10.9937 4.04194e-07H11.0005C13.2476 0.0318857 15.4577 0.576388 17.4624 1.592C17.6169 1.67259 17.7476 1.79214 17.8417 1.93882C17.9358 2.0855 17.9899 2.25421 17.9986 2.42823C18.0074 2.60226 17.9706 2.77556 17.8918 2.93096C17.813 3.08636 17.6949 3.21847 17.5493 3.3142C16.1235 4.2722 15.0428 5.66241 14.466 7.28039C13.8892 8.89838 13.8467 10.6587 14.3449 12.3026C14.8431 13.9465 15.8557 15.3872 17.2336 16.4128C18.6116 17.4383 20.2823 17.9947 22 18H28V20Z"
      fill={fill}
    />
  </svg>
)

const ArrowIcon = ({
  angle,
  width = 12,
  height = 18,
  fill = '#5DDDF9',
  stroke = '#5DDDF9',
}) => (
  <svg
    style={{ transform: `rotate(${angle}deg)` }}
    viewBox="0 0 11 18"
    fill="none"
    width={width}
    height={height}
  >
    <path
      d="M1.02713 1.345L5.32713 16.435C5.32713 16.4801 5.34504 16.5233 5.37692 16.5552C5.40881 16.5871 5.45205 16.605 5.49713 16.605C5.51984 16.6065 5.5426 16.6031 5.56389 16.5951C5.58518 16.587 5.60451 16.5746 5.6206 16.5585C5.63669 16.5424 5.64916 16.523 5.65719 16.5018C5.66521 16.4805 5.6686 16.4577 5.66713 16.435L9.98713 1.345C9.99755 1.29449 9.99668 1.2423 9.98458 1.19217C9.97248 1.14204 9.94945 1.0952 9.91713 1.055C9.87713 0.981667 9.79713 0.981667 9.67713 1.055L5.67713 2.555C5.57075 2.59489 5.45352 2.59489 5.34713 2.555L1.34713 1.055C1.21713 0.985 1.12713 0.985 1.06713 1.055C1.03212 1.09373 1.00957 1.14211 1.00244 1.19384C0.995305 1.24556 1.00391 1.29824 1.02713 1.345Z"
      stroke={stroke}
      fill={fill}
      strokeWidth="2"
    />
  </svg>
)

const BarometerIcon = ({ width = '40', height = '40' }) => (
  <svg width={width} height={height} viewBox="0 0 40 40" fill="none">
    <path
      d="M20 38C29.9411 38 38 29.9411 38 20C38 10.0589 29.9411 2 20 2C10.0589 2 2 10.0589 2 20C2 29.9411 10.0589 38 20 38Z"
      stroke="#d1d2d5"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 13V7M33.5 20H27.5M13 20H7M29.5 11.5L26.5 14.5M13.5 14.5L10.5 11.5M26.5 25.5L29.5 28.5M10.5 28.5L13.5 25.5"
      stroke="#d1d2d5"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 23C21.6569 23 23 21.6569 23 20C23 18.3431 21.6569 17 20 17C18.3431 17 17 18.3431 17 20C17 21.6569 18.3431 23 20 23Z"
      fill="#374151"
    />
    <path
      d="M20 23.5V8.5"
      stroke="#374151"
      strokeWidth="2"
      strokeMiterlimit="10"
      strokeLinecap="round"
    />
  </svg>
)

const SunIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <g>
      <path
        fill="none"
        stroke="#f59e0b"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M42.5 32A10.5 10.5 0 1132 21.5 10.5 10.5 0 0142.5 32zM32 15.71V9.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 47.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 32H9.5m45 0h-6.21"
      />
      <animateTransform
        attributeName="transform"
        dur="45s"
        from="0 32 32"
        repeatCount="indefinite"
        to="360 32 32"
        type="rotate"
      />
    </g>
  </svg>
)

const ClearNightIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <g>
      <path
        fill="none"
        stroke="#72b9d5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
      />
      <animateTransform
        attributeName="transform"
        dur="10s"
        repeatCount="indefinite"
        type="rotate"
        values="-5 32 32;15 32 32;-5 32 32"
      />
    </g>
  </svg>
)

const PartlyCloudyDay = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#f59e0b"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
        />
        <animateTransform
          attributeName="transform"
          dur="45s"
          from="0 19 24"
          repeatCount="indefinite"
          to="360 19 24"
          type="rotate"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
  </svg>
)

const PartyCloudyNight = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
        />
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
  </svg>
)

const CloudyIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <g>
      <path
        fill="none"
        stroke="#d1d2d5"
        strokeLinejoin="round"
        strokeWidth="3"
        d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
      />
      <animateTransform
        attributeName="transform"
        dur="7s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
  </svg>
)

const OvercastIcon = ({ width = '64', height = '64' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#9ca3af"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M34.23 33.45a4.05 4.05 0 004.05 4h16.51a4.34 4.34 0 00.81-8.61 3.52 3.52 0 00.06-.66 4.06 4.06 0 00-6.13-3.48 6.08 6.08 0 00-11.25 3.19 6.34 6.34 0 00.18 1.46h-.18a4.05 4.05 0 00-4.05 4.1z"
    />
    <animateTransform
      attributeName="transform"
      dur="7s"
      repeatCount="indefinite"
      type="translate"
      values="-2.1 0; 2.1 0; -2.1 0"
    />

    <path
      stroke="#d1d2d5"
      strokeLinejoin="round"
      fill="#fff"
      strokeWidth="3"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
    <animateTransform
      attributeName="transform"
      dur="7s"
      repeatCount="indefinite"
      type="translate"
      values="-3 0; 3 0; -3 0"
    />
  </svg>
)

const MistIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <g>
      <path
        fill="none"
        stroke="#d1d2d5"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 32h30"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d2d5"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 39h30"
      />
      <animateTransform
        attributeName="transform"
        begin="-2s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-3 0; 3 0; -3 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d2d5"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 25h30"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
  </svg>
)

const RainIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M24.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M31.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M38.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
  </svg>
)

const DrizzleIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M24.08 45.01l-.16.98"
      />
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M31.08 45.01l-.16.98"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M38.08 45.01l-.16.98"
      />
      <animateTransform
        attributeName="transform"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
  </svg>
)

const SnowIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <circle
        cx="31"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="-1 -6; 1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 31 45; 360 31 45"
      />
      <animate
        attributeName="opacity"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx="24"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 24 45; 360 24 45"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx="38"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 38 45; 360 38 45"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
  </svg>
)

const SleetIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <circle
        cx="24"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 24 45; 360 24 45"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx="38"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 38 45; 360 38 45"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M24.08 45.01l-.16.98"
      />
      <animateTransform
        attributeName="transform"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M31.08 45.01l-.16.98"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.5s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M38.08 45.01l-.16.98"
      />
      <animateTransform
        attributeName="transform"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="1.5s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
  </svg>
)

const ThunderstormDayIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#f59e0b"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
        />
        <animateTransform
          attributeName="transform"
          dur="45s"
          from="0 19 24"
          repeatCount="indefinite"
          to="360 19 24"
          type="rotate"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
      />
    </g>
  </svg>
)

const ThunderstormNightIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
        />
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
      />
    </g>
  </svg>
)

const FogDayIcon = ({ width = '64', height = '64' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="sun">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 44h30"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 51h30"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g clipPath="url(#sun)">
      <g>
        <path
          fill="none"
          stroke="#f59e0b"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="3"
          d="M42.5 39A10.5 10.5 0 1132 28.5 10.5 10.5 0 0142.5 39zM32 22.71V16.5m0 45v-6.21m11.52-27.81l4.39-4.39M16.09 54.91l4.39-4.39m0-23l-4.39-4.39m31.82 31.78l-4.39-4.39M15.71 39H9.5m45 0h-6.21"
        />
        <animateTransform
          attributeName="transform"
          dur="45s"
          from="0 32 39"
          repeatCount="indefinite"
          to="360 32 39"
          type="rotate"
        />
      </g>
    </g>
  </svg>
)

const FogNightIcon = ({ width = '64', height = '64' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="moon">
        <path fill="none" d="M0 7.5h64v32H0z" />
      </clipPath>
    </defs>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 44h30"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 51h30"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g clipPath="url(#moon)">
      <g>
        <path
          fill="none"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
          d="M46.66 36.2a16.66 16.66 0 01-16.78-16.55 16.29 16.29 0 01.55-4.15A16.56 16.56 0 1048.5 36.1c-.61.06-1.22.1-1.84.1z"
        />
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-5 32 32;15 32 32;-5 32 32"
        />
      </g>
    </g>
  </svg>
)

const FogIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M46.5 31.5h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0h28a7 7 0 000-14z"
    />
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 58h30"
      />
      <animateTransform
        attributeName="transform"
        begin="0s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#d1d5db"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="3"
        d="M17 52h30"
      />
      <animateTransform
        attributeName="transform"
        begin="-4s"
        dur="5s"
        repeatCount="indefinite"
        type="translate"
        values="-4 0; 4 0; -4 0"
      />
    </g>
  </svg>
)

const HailIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <circle cx="24" cy="45" r="1.5" fill="#72b8d4" />
      <animateTransform
        attributeName="transform"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 18; -4 14"
      />
      <animate
        attributeName="opacity"
        dur="0.6s"
        repeatCount="indefinite"
        values="1;1;0"
      />
    </g>
    <g>
      <circle cx="31" cy="45" r="1.5" fill="#72b8d4" />
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 18; -4 14"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.6s"
        repeatCount="indefinite"
        values="1;1;0"
      />
    </g>
    <g>
      <circle cx="38" cy="45" r="1.5" fill="#72b8d4" />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.6s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 18; -4 14"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.6s"
        repeatCount="indefinite"
        values="1;1;0"
      />
    </g>
  </svg>
)

const ThunderstormRainDayIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#f59e0b"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
        />
        <animateTransform
          attributeName="transform"
          dur="45s"
          from="0 19 24"
          repeatCount="indefinite"
          to="360 19 24"
          type="rotate"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M24.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M31.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M38.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
      />
    </g>
  </svg>
)

const ThunderstormRainNightIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
        />
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M24.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M31.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.4s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path
        fill="none"
        stroke="#2885c7"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="2"
        d="M38.39 43.03l-.78 4.94"
      />
      <animateTransform
        attributeName="transform"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        type="translate"
        values="1 -5; -2 10"
      />
      <animate
        attributeName="opacity"
        begin="-0.2s"
        dur="0.7s"
        repeatCount="indefinite"
        values="0;1;1;0"
      />
    </g>
    <g>
      <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
      />
    </g>
  </svg>
)

const ThunderstormSnowDayIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#f59e0b"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          d="M23.5 24a4.5 4.5 0 11-4.5-4.5 4.49 4.49 0 014.5 4.5zM19 15.67V12.5m0 23v-3.17m5.89-14.22l2.24-2.24M10.87 32.13l2.24-2.24m0-11.78l-2.24-2.24m16.26 16.26l-2.24-2.24M7.5 24h3.17m19.83 0h-3.17"
        />
        <animateTransform
          attributeName="transform"
          dur="45s"
          from="0 19 24"
          repeatCount="indefinite"
          to="360 19 24"
          type="rotate"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <circle
        cx="31"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="-1 -6; 1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 31 45; 360 31 45"
      />
      <animate
        attributeName="opacity"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx="24"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 24 45; 360 24 45"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx="38"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 38 45; 360 38 45"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
      />
    </g>
  </svg>
)

const ThunderstormSnowNightIcon = ({ width = '60', height = '60' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <clipPath id="a">
        <path
          fill="none"
          d="M12 35l-5.28-4.21-2-6 1-7 4-5 5-3h6l5 1 3 3L33 20l-6 4h-6l-3 3v4l-4 2-2 2z"
        />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <g>
        <path
          fill="none"
          stroke="#72b9d5"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M29.33 26.68a10.61 10.61 0 01-10.68-10.54A10.5 10.5 0 0119 13.5a10.54 10.54 0 1011.5 13.11 11.48 11.48 0 01-1.17.07z"
        />
        <animateTransform
          attributeName="transform"
          dur="10s"
          repeatCount="indefinite"
          type="rotate"
          values="-10 19.22 24.293;10 19.22 24.293;-10 19.22 24.293"
        />
      </g>
    </g>
    <path
      fill="none"
      stroke="#d1d2d5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M43.67 45.5h2.83a7 7 0 000-14h-.32a10.49 10.49 0 00-19.11-8 7 7 0 00-10.57 6 7.21 7.21 0 00.1 1.14A7.5 7.5 0 0018 45.5a4.19 4.19 0 00.5 0v0"
    />
    <g>
      <circle
        cx="31"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M33.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M31 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="-1 -6; 1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 31 45; 360 31 45"
      />
      <animate
        attributeName="opacity"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx="24"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M26.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M24 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 24 45; 360 24 45"
      />
      <animate
        attributeName="opacity"
        begin="-2s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <circle
        cx="38"
        cy="45"
        r="1.25"
        fill="none"
        stroke="#72b8d4"
        strokeMiterlimit="10"
      />
      <path
        fill="none"
        stroke="#72b8d4"
        strokeLinecap="round"
        strokeMiterlimit="10"
        d="M40.17 46.25l-1.09-.63m-2.16-1.24l-1.09-.63M38 42.5v1.25m0 3.75v-1.25m-1.08-.63l-1.09.63m4.34-2.5l-1.09.63"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        type="translate"
        values="1 -6; -1 12"
      />
      <animateTransform
        additive="sum"
        attributeName="transform"
        dur="9s"
        repeatCount="indefinite"
        type="rotate"
        values="0 38 45; 360 38 45"
      />
      <animate
        attributeName="opacity"
        begin="-1s"
        dur="4s"
        repeatCount="indefinite"
        values="0;1;1;1;0"
      />
    </g>
    <g>
      <path fill="#f59e0b" d="M30 36l-4 12h4l-2 10 10-14h-6l4-8h-6z" />
      <animate
        attributeName="opacity"
        dur="2s"
        repeatCount="indefinite"
        values="1;1;1;1;1;1;0.1;1;0.1;1;1;0.1;1;0.1;1"
      />
    </g>
  </svg>
)

const SunriseIcon = ({ width = '64', height = '37' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 37"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_17_37)">
      <mask
        id="mask0_17_37"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="64"
        height="33"
      >
        <path d="M0 0.5H64V32.5H0V0.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_17_37)">
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 32 32"
            to="360 32 32"
            dur="45s"
            repeatCount="indefinite"
          />
          <path
            d="M32 15.71V9.5M32 54.5V48.29M43.52 20.48L47.91 16.09M16.09 47.91L20.48 43.52M20.48 20.52L16.09 16.13M47.91 47.91L43.52 43.52M15.71 32H9.5M54.5 32H48.29M42.5 32C42.5 34.0767 41.8842 36.1068 40.7304 37.8335C39.5767 39.5602 37.9368 40.906 36.0182 41.7007C34.0996 42.4955 31.9884 42.7034 29.9516 42.2982C27.9148 41.8931 26.0438 40.8931 24.5754 39.4246C23.1069 37.9562 22.1069 36.0852 21.7018 34.0484C21.2966 32.0116 21.5045 29.9004 22.2993 27.9818C23.094 26.0632 24.4398 24.4233 26.1665 23.2696C27.8932 22.1158 29.9233 21.5 32 21.5C34.7848 21.5 37.4555 22.6062 39.4246 24.5754C41.3938 26.5445 42.5 29.2152 42.5 32Z"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
      </g>
      <path
        d="M16 35.5H27L32 31L37 35.5H48"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_17_37">
        <rect
          width="64"
          height="36.5"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
)

const SunsetIcon = ({ width = '64', height = '41' }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 64 41"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_14_29)">
      <mask
        id="mask0_14_29"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="64"
        height="33"
      >
        <path d="M0 0.5H64V32.5H0V0.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_14_29)">
        <g>
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 32 32"
            to="360 32 32"
            dur="45s"
            repeatCount="indefinite"
          />
          <path
            d="M32 15.71V9.5M32 54.5V48.29M43.52 20.48L47.91 16.09M16.09 47.91L20.48 43.52M20.48 20.52L16.09 16.13M47.91 47.91L43.52 43.52M15.71 32H9.5M54.5 32H48.29M42.5 32C42.5 34.0767 41.8842 36.1068 40.7304 37.8335C39.5767 39.5602 37.9368 40.906 36.0182 41.7007C34.0996 42.4955 31.9884 42.7034 29.9516 42.2982C27.9148 41.8931 26.0438 40.8931 24.5754 39.4246C23.1069 37.9562 22.1069 36.0852 21.7018 34.0484C21.2966 32.0116 21.5045 29.9004 22.2993 27.9818C23.094 26.0632 24.4398 24.4233 26.1665 23.2696C27.8932 22.1158 29.9233 21.5 32 21.5C34.7848 21.5 37.4555 22.6062 39.4246 24.5754C41.3938 26.5445 42.5 29.2152 42.5 32Z"
            stroke="#F59E0B"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
          />
        </g>
      </g>
      <path
        d="M16 35.5H27L32 40L37 35.5H48"
        stroke="#374151"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_14_29">
        <rect
          width="64"
          height="40.5"
          fill="white"
          transform="translate(0 0.5)"
        />
      </clipPath>
    </defs>
  </svg>
)

const HumidityIcon = ({ width = '24', height = '34', percentage = 50 }) => {
  const clampedPercentage = Math.max(0, Math.min(percentage, 100))
  const waveHeight = 34 - (clampedPercentage / 100) * 34
  return (
    <svg width={width} height={height} viewBox="0 0 24 34">
      {/* Gota vacía */}
      <path
        fill="none"
        d="M12 2C5.91 11 2 16.62 2 22.09C2 24.7422 3.05357 27.2857 4.92893 29.1611C6.8043 31.0364 9.34784 32.09 12 32.09C14.6522 32.09 17.1957 31.0364 19.0711 29.1611C20.9464 27.2857 22 24.7422 22 22.09C22 16.62 18.09 11 12 2Z"
        stroke="#5DDDF9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Onda animada */}
      <path
        fill="#5DDDF9"
        d={`
          M0 ${waveHeight}
          Q 6 ${waveHeight - 2}, 12 ${waveHeight}
          T 24 ${waveHeight}
          V 34 H 0 Z
        `}
        clipPath="url(#clip-path)"
      >

        <animate
          attributeName="d"
          dur="4s"
          repeatCount="indefinite"
          values={`
            M0 ${waveHeight}
            Q 6 ${waveHeight - 2}, 12 ${waveHeight}
            T 24 ${waveHeight}
            V 34 H 0 Z;
            M0 ${waveHeight + 1.5}
            Q 6 ${waveHeight - 0.5}, 12 ${waveHeight + 1.5}
            T 24 ${waveHeight + 1.5}
            V 34 H 0 Z;
            M0 ${waveHeight}
            Q 6 ${waveHeight - 2}, 12 ${waveHeight}
            T 24 ${waveHeight}
            V 34 H 0 Z;
          `}
        />
      </path>
      <clipPath id="clip-path">
        <path d="M12 2C5.91 11 2 16.62 2 22.09C2 24.7422 3.05357 27.2857 4.92893 29.1611C6.8043 31.0364 9.34784 32.09 12 32.09C14.6522 32.09 17.1957 31.0364 19.0711 29.1611C20.9464 27.2857 22 24.7422 22 22.09C22 16.62 18.09 11 12 2Z" />
      </clipPath>
    </svg>
  )
}

const WaveThermometerIcon = ({ width = '35', height = '35' }) => (

  <svg width={width} height={height} version="1.1" id="Capa_1" viewBox="0 0 28 40" fill="none">
    <linearGradient
      id="paint0_linear_2_8"
      x1="-0.270024"
      y1="5.16"
      x2="15.18"
      y2="31.93"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#515A69" stopOpacity="0.05" />
      <stop offset="0.45" stopColor="#6B7280" stopOpacity="0.05" />
      <stop offset="1" stopColor="#384354" stopOpacity="0.1" />
    </linearGradient>
    <linearGradient
      id="paint1_linear_2_8"
      x1="-0.520023"
      y1="4.73"
      x2="15.43"
      y2="32.36"
      gradientUnits="userSpaceOnUse"
    >
      <stop stopColor="#D4D7DD" />
      <stop offset="0.45" stopColor="#D4D7DD" />
      <stop offset="1" stopColor="#BEC1C6" />
    </linearGradient>
    <path
      d="M15 27.9C15 29.7565 14.2625 31.537 12.9497 32.8497C11.637 34.1625 9.85649 34.9 7.99998 34.9C6.14346 34.9 4.36298 34.1625 3.05023 32.8497C1.73747 31.537 0.999976 29.7565 0.999976 27.9C0.996277 26.759 1.26687 25.6337 1.78897 24.6191C2.31106 23.6045 3.06936 22.7303 3.99998 22.07V5.07C3.99998 4.00913 4.4214 2.99172 5.17155 2.24157C5.9217 1.49143 6.93911 1.07 7.99998 1.07C9.06084 1.07 10.0783 1.49143 10.8284 2.24157C11.5785 2.99172 12 4.00913 12 5.07V22.07C12.9306 22.7303 13.6889 23.6045 14.211 24.6191C14.7331 25.6337 15.0037 26.759 15 27.9ZM8.49998 11H12ZM8.49998 7H12ZM8.49998 15H12Z"
      fill="url(#paint0_linear_2_8)"
    />
    <path
      d="M8.49998 11H12M8.49998 7H12M8.49998 15H12M15 27.9C15 29.7565 14.2625 31.537 12.9497 32.8497C11.637 34.1625 9.85649 34.9 7.99998 34.9C6.14346 34.9 4.36298 34.1625 3.05023 32.8497C1.73747 31.537 0.999976 29.7565 0.999976 27.9C0.996277 26.759 1.26687 25.6337 1.78897 24.6191C2.31106 23.6045 3.06936 22.7303 3.99998 22.07V5.07C3.99998 4.00913 4.4214 2.99172 5.17155 2.24157C5.9217 1.49143 6.93911 1.07 7.99998 1.07C9.06084 1.07 10.0783 1.49143 10.8284 2.24157C11.5785 2.99172 12 4.00913 12 5.07V22.07C12.9306 22.7303 13.6889 23.6045 14.211 24.6191C14.7331 25.6337 15.0037 26.759 15 27.9Z"
      stroke="url(#paint1_linear_2_8)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 32.5C10.4853 32.5 12.5 30.4853 12.5 28C12.5 25.5147 10.4853 23.5 8 23.5C5.51472 23.5 3.5 25.5147 3.5 28C3.5 30.4853 5.51472 32.5 8 32.5Z"
      fill="#000"
    />
    <path
      d="M8 13V28"
      stroke="#000"
      strokeWidth="3"
      strokeMiterlimit="10"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        dur="1s"
        repeatCount="indefinite"
        type="translate"
        values="0 0; 0 1; 0 0"
      />
    </path>
    <path
      fill="#5DDDF9"
      transform="translate(-1 37)"
      d="M.09074 1.99746C4.47261 1.61961 5.09395 1.61961 5.4759 1.99746C6.53301 3.04344 8.2531 3.04344 9.31021 1.99746C9.49521 1.81441 9.74117 1.7136 10.0028 1.7136C10.2644 1.7136 10.5104 1.81445 10.6954 1.99746C11.7525 3.04344 13.4726 3.04344 14.5297 1.99746C14.7147 1.81441 14.9607 1.7136 15.2223 1.7136C15.484 1.7136 15.7299 1.81445 15.9149 1.99746C16.427 2.50417 17.1079 2.78323 17.832 2.78323C18.5563 2.78323 19.2371 2.50417 19.7492 1.99746C20.0874 1.66284 20.0874 1.12035 19.7492 0.785772C19.411 0.451149 18.8627 0.451149 18.5246 0.785772C18.3396 0.968828 18.0937 1.06963 17.832 1.06963C17.5704 1.06963 17.3245 0.968785 17.1395 0.785815C16.6274 0.279103 15.9465 4.28401e-05 15.2224 0C15.2223 0 15.2223 0 15.2223 0C14.4982 0 13.8172 0.279103 13.3051 0.785772C12.9233 1.16366 12.3018 1.16358 11.92 0.785815C11.408 0.279103 10.7271 4.28401e-05 10.0029 0C10.0028 0 10.0029 0 10.0029 0C9.27869 0 8.59778 0.279103 8.08568 0.785772C7.70381 1.16366 7.08234 1.16362 6.70056 0.785772C5.64341 -0.260253 3.92332 -0.260253 2.86621 0.785772C2.48434 1.16362 1.86297 1.16362 1.48101 0.785772C1.14283 0.451149 0.594576 0.451149 0.256437 0.785772C-0.081702 1.1204 -0.081702 1.66288 0.25648 1.99746C1.3135 3.04344 3.03355 3.04344 4.09074 1.99746Z"
    />
    <path
      fill="#374151"
      d="M18 22a2 2 0 11.56-1.47 2 2 0 01-.56 1.47zm-2-.79a.89.89 0 001.26 0 .88.88 0 000-1.25.83.83 0 00-.63-.27.86.86 0 00-.63.27.89.89 0 00-.26.63.85.85 0 00.21.57zM20 19.29a3.68 3.68 0 012.61-.85c1.75 0 2.87.68 3.35 2.06a.37.37 0 01-.26.54l-.67.23a.46.46 0 01-.34 0 .49.49 0 01-.19-.28 1.79 1.79 0 00-1.89-1.13 2.13 2.13 0 00-1.46.45 1.61 1.61 0 00-.52 1.3v2.73a1.62 1.62 0 00.52 1.3 2.08 2.08 0 001.46.46 1.78 1.78 0 001.88-1.1.53.53 0 01.21-.29.5.5 0 01.33 0l.66.24a.38.38 0 01.28.54c-.49 1.38-1.61 2.07-3.37 2.07a3.68 3.68 0 01-2.6-.85 3.09 3.09 0 01-.92-2.37v-2.7a3.07 3.07 0 01.92-2.35z"
    />
  </svg >
)

const WindIcon = ({ width = '34', height = '34' }) => (
  <svg width={width} height={height} viewBox="0 0 64 64">
    <defs>
      <linearGradient
        id="wind-one"
        x1="27.56"
        x2="38.27"
        y1="17.64"
        y2="36.19"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#d4d7dd" />
        <stop offset=".45" stopColor="#d4d7dd" />
        <stop offset="1" stopColor="#bec1c6" />
      </linearGradient>
      <linearGradient
        id="wind-two"
        x1="19.96"
        x2="31.37"
        y1="29.03"
        y2="48.8"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#d4d7dd" />
        <stop offset=".45" stopColor="#d4d7dd" />
        <stop offset="1" stopColor="#bec1c6" />
      </linearGradient>
    </defs>
    <path
      fill="none"
      stroke="url(#wind-one)"
      strokeDasharray="35 22"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M43.64 20a5 5 0 113.61 8.46h-35.5"
    >
      <animate
        attributeName="stroke-dashoffset"
        dur="2s"
        repeatCount="indefinite"
        values="-57; 57"
      />
    </path>
    <path
      fill="none"
      stroke="url(#wind-two)"
      strokeDasharray="24 15"
      strokeLinecap="round"
      strokeMiterlimit="10"
      strokeWidth="3"
      d="M29.14 44a5 5 0 103.61-8.46h-21"
    >
      <animate
        attributeName="stroke-dashoffset"
        begin="-1.5s"
        dur="2s"
        repeatCount="indefinite"
        values="-39; 39"
      />
    </path>
  </svg>
)

const MarkerIcon = ({ width = '24', height = '24', fill = '#F79392', stroke = '#F79392' }) => (
  <svg width={width} height={height} viewBox="0 0 24 33" fill="none">
    <path d="M12 32C5.29932 23.0247 1 17.4226 1 11.9701C1 9.32236 2.15529 6.78684 4.2183 4.91698C6.28132 3.04712 9.07877 2 12 2C14.9212 2 17.7187 3.04712 19.7817 4.91698C21.8447 6.78684 23 9.32236 23 11.9701C23 17.4226 18.7007 23.0247 12 32Z" fill={fill} stroke={stroke} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="13" r="6" fill="white" />
  </svg>
)

const CircleIcon = ({ width = '24', height = '24' }) => (
  <svg viewBox="0 0 16 16" fill="none" width={width} height={height} style={{ boxShadow: '0 0 20px 5px #4f46e5', borderRadius: '50%' }}>
    <defs>
      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
        <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000" floodOpacity="0.3" />
      </filter>
    </defs>
    <g clipPath="url(#clip0_27_29)">
      <circle cx="8" cy="8" r="7.75" fill="white" stroke="#4f46e5" strokeWidth="0.5" />
      <circle cx="8" cy="8" r="5.75" fill="#4f46e5" stroke="white" strokeWidth="0.5" />
    </g>
    <defs>
      <clipPath id="clip0_27_29">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg >
)

/** 
* ArrowAngleIcon
 * @typedef {Object} Props
 * @param {object} props
 * @param  {('right'|'left'|'up'|'down')} props.direction - Dirección de la flecha default 'right'
*/

const ArrowAngleIcon = ({ className, width = '10', height = '12', fill = '#020202', direction = 'right', onClick }) => {
  const styleDirection = {
    right: 'rotate(0deg)',
    left: 'rotate(180deg)',
    up: 'rotate(270deg)',
    down: 'rotate(90deg)'
  }
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 9 11" fill="none" style={{ transform: styleDirection[direction] }} onClick={onClick}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 9.82143L5.82353 5.5L0 1.17857L0.705882 0L8.11765 5.5L0.705882 11L0 9.82143Z" fill={fill} />
    </svg>
  )
}

export {
  ThermometerIcon,
  SeaWaveIcon,
  ArrowIcon,
  BarometerIcon,
  SunIcon,
  ClearNightIcon,
  PartlyCloudyDay,
  PartyCloudyNight,
  CloudyIcon,
  OvercastIcon,
  MistIcon,
  RainIcon,
  DrizzleIcon,
  SnowIcon,
  SleetIcon,
  ThunderstormDayIcon,
  ThunderstormNightIcon,
  FogDayIcon,
  FogNightIcon,
  FogIcon,
  HailIcon,
  ThunderstormRainDayIcon,
  ThunderstormRainNightIcon,
  ThunderstormSnowDayIcon,
  ThunderstormSnowNightIcon,
  SunriseIcon,
  SunsetIcon,
  PersonIcon,
  HumidityIcon,
  WaveThermometerIcon,
  WindIcon,
  MarkerIcon,
  CircleIcon,
  ArrowAngleIcon
}
