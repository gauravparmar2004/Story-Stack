const RealTrustLogo = ({ className = "w-40 h-10" }) => {
  return (
    <svg
      viewBox="0 0 140 40"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* House Roof Outline - Dark Blue */}
      <path
        d="M 12 8 L 6 14 L 18 14 Z"
        fill="none"
        stroke="#1A2B5B"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Circle with Checkmark - Bright Blue */}
      <circle
        cx="6"
        cy="20"
        r="5"
        fill="#2A7FFF"
      />
      <path
        d="M 4 20 L 5.5 21.5 L 8 19"
        fill="none"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Real Trust Text - Dark Blue */}
      <text
        x="26"
        y="18"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontSize="16"
        fontWeight="600"
        fill="#1A2B5B"
        letterSpacing="0.5"
      >
        Real Trust
      </text>
    </svg>
  );
};

export default RealTrustLogo;
